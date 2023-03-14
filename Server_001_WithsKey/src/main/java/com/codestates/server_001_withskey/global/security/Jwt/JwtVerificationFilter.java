package com.codestates.server_001_withskey.global.security.Jwt;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import lombok.extern.slf4j.Slf4j;
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
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

// OAuth2 인증에 성공하면 FE 앱 쪽에서 request를 전송할 때 마다
// Authorization header에 실어 보내는 Access Token에 대한
// 검증을 수행하는 역
@Component
@Slf4j
public class JwtVerificationFilter extends OncePerRequestFilter {
    private final JwtTokenizer jwtTokenizer;
    private final withsKeyAuthorityUtils authorityUtils;

    public JwtVerificationFilter(JwtTokenizer jwtTokenizer, withsKeyAuthorityUtils authorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
    }
    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        String authorizationHeader = request.getHeader("Authorization");
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            String token = authorizationHeader.replace("Bearer ","");
            try {
                Map<String, Object> claims = verifyJws(token);
                setAuthenticationToContext(claims);
            } catch (SignatureException se) {
                request.setAttribute("exception", se);
            } catch (ExpiredJwtException ee) {
                // token이 만료가 될 경우, Request header에서 Refresh Token을 가져온다.

                String refreshToken = request.getHeader("Refresh");

                try{
                    verifyJws(refreshToken);
                } catch (ExpiredJwtException e){
                    response.sendRedirect("http://ec2-3-36-117-214.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google");
                    log.info("리다이렉트 요청은 성공");
                    return;
                }
                // Regenerate new Access Token from JwtTokenizer class.
                String newAccessToken = jwtTokenizer.regenerateAccessToken(refreshToken);

                // Set new Access Token to response header
                response.setHeader("Authorization", "Bearer " + newAccessToken);

            } catch (Exception e) {
                request.setAttribute("exception", e);
            }
        }
        filterChain.doFilter(request, response);
    }
    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        String authorization = request.getHeader("Authorization");
        return authorization == null || !authorization.startsWith("Bearer");
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
        String memberId = (String)claims.get("memberId");
        List<GrantedAuthority> authorities = authorityUtils.createAuthorities((List)claims.get("roles"));
        Authentication authentication = new UsernamePasswordAuthenticationToken(memberId,null,authorities);
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }
}
