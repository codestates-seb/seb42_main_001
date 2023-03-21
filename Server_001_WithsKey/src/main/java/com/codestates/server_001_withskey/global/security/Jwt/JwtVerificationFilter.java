package com.codestates.server_001_withskey.global.security.Jwt;

import com.codestates.server_001_withskey.global.security.Redis.TokenRedisRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.security.SignatureException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.concurrent.TimeUnit;

// OAuth2 인증에 성공하면 FE 앱 쪽에서 request를 전송할 때 마다
// Authorization header에 실어 보내는 Access Token에 대한
// 검증을 수행하는 역
// add v2
@Component
@Slf4j
public class JwtVerificationFilter extends OncePerRequestFilter {

    private final JwtTokenizer jwtTokenizer;
    private final withsKeyAuthorityUtils authorityUtils;
    private final TokenRedisRepository tokenRedisRepository;

    public JwtVerificationFilter(JwtTokenizer jwtTokenizer,
                                 withsKeyAuthorityUtils authorityUtils,
                                 TokenRedisRepository tokenRedisRepository) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
        this.tokenRedisRepository = tokenRedisRepository;
    }
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

        //만약에 들어온 Refresh토큰이 블랙리스트에 있다면 인증 실패 처리
        String authorizationHeader = request.getHeader("Authorization");
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            String token = authorizationHeader.replace("Bearer ", "");

            if (tokenRedisRepository.isAccessTokenUsed(token) || token.equals(tokenRedisRepository.getAccessToken(token))) {
                throw new BadCredentialsException("Invalid access token");
            }

            try {
                Map<String, Object> claims = verifyJws(token);
                setAuthenticationToContext(claims);
            } catch (SignatureException se) {
                request.setAttribute("exception", se);
            } catch (ExpiredJwtException ee) {
                String refreshToken = request.getHeader("Refresh");

                try {
                    verifyJws(refreshToken);
                } catch (ExpiredJwtException e) {
                     // Local 환경 동작용
                    response.sendRedirect("http://localhost:8080/oauth2/authorization/google");
//                    // EC2 환경 동작용
//                    response.sendRedirect("http://ec2-3-36-117-214.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google");
                    return;
                }

                if (tokenRedisRepository.isRefreshTokenUsed(refreshToken) || refreshToken.equals(tokenRedisRepository.getRefreshToken(refreshToken))) {
                    sendCustomErrorResponse(response, "", "", "Invalid refresh token", HttpServletResponse.SC_UNAUTHORIZED);
                    return;
                }

                String newAccessToken = jwtTokenizer.regenerateAccessToken(refreshToken);
                Jws<Claims> refreshTokenClaims = jwtTokenizer.getClaims(refreshToken, jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey()));
                Date refreshTokenExpiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes()); // application.yml
                String newRefreshToken = jwtTokenizer.generateRefreshToken(refreshTokenClaims.getBody().getSubject(), refreshTokenExpiration, jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey()));

                // 각 토큰들이 Redis안에서 보관되는 기간을 JwtTokenizer 클래스의 필드만큼 지정. (결국 application.yml 설정만큼)
                long accessTokenDuration = jwtTokenizer.getAccessTokenExpirationMinutes();
                long refreshTokenDuration = jwtTokenizer.getRefreshTokenExpirationMinutes();

                saveNewAccessTokenAndRefreshToken(newAccessToken, newRefreshToken, refreshToken, accessTokenDuration, refreshTokenDuration, TimeUnit.MINUTES);
                sendCustomErrorResponse(response, newAccessToken, newRefreshToken, "New access token and refresh token generated", HttpServletResponse.SC_OK);

                return;

            } catch (Exception e) {
                request.setAttribute("exception", e);
            }
        }
        filterChain.doFilter(request, response);
    }

    private void sendCustomErrorResponse(HttpServletResponse response,
                                         String newAccessToken,
                                         String newRefreshToken,
                                         String message,
                                         int status) throws IOException {
        response.setStatus(status);
        response.setHeader("Authorization", "Bearer " + newAccessToken);
        response.setHeader("Refresh", newRefreshToken);
        response.setContentType("application/json");

        Map<String, String> responseBody = new HashMap<>();
        responseBody.put("error", message);
        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(responseBody);

        response.getWriter().write(json);
        response.getWriter().flush();
        response.getWriter().close();
    }

    private void saveNewAccessTokenAndRefreshToken(String newAccessToken,
                                                   String newRefreshToken,
                                                   String usedRefreshToken,
                                                   long accessTokenDuration,
                                                   long refreshTokenDuration,
                                                   TimeUnit timeUnit) {
        // Redis 에 새로 생성된 AccessToken과 RefreshToken을 설정해둔 유효 기간동안 보관.
        tokenRedisRepository.saveNewAccessTokenAndRefreshToken(newAccessToken, newRefreshToken, accessTokenDuration, refreshTokenDuration, timeUnit);

        // Redis 에서 usedRefreshToken를 최초 생성될 떄 지정받은 유효 기간 동안 보관.
        tokenRedisRepository.saveUsedRefreshToken(usedRefreshToken, jwtTokenizer.getRefreshTokenExpirationMinutes(), TimeUnit.MINUTES);
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        String authorization = request.getHeader("Authorization");
        return authorization == null || !authorization.startsWith("Bearer");
    }
    private void saveNewAccessToken(String newAccessToken, String usedRefreshToken, long duration, TimeUnit timeUnit) {
        tokenRedisRepository.saveUsedAccessToken(newAccessToken, duration, timeUnit);
        tokenRedisRepository.saveUsedRefreshToken(usedRefreshToken, 10, TimeUnit.MINUTES);
    }
    private Map<String, Object> verifyJws(String jws) {
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        Map<String, Object> claims = jwtTokenizer.getClaims(jws, base64EncodedSecretKey).getBody();
        return claims;
    }
    private void setAuthenticationToContext(Map<String, Object> claims) {
// ContextHolder에 저장되는 UsernamePasswordAuthenticationToken의 Principal을 memberId로 변환
// memberId는 Object 타입이므로 String 타입으로 형변환하여 claims 객체에 담아준다
// Controller를 통해 들어오는 요청에서 같은 USER 권한이더라도 요청에 담긴 member 객체의 memberId로
// 요청자를 구분하여 resource에 접근하려는 주체를 구분할 수 있다. + Request URL 의 간단함.
        String memberId = (String) claims.get("memberId");
        List<GrantedAuthority> authorities = authorityUtils.createAuthorities((List)claims.get("roles"));
        Authentication authentication = new UsernamePasswordAuthenticationToken(memberId,null,authorities);
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }
}
