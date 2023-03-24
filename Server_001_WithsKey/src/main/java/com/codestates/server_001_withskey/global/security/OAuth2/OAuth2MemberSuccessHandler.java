package com.codestates.server_001_withskey.global.security.OAuth2;

import com.codestates.server_001_withskey.domain.member.entity.Member;
import com.codestates.server_001_withskey.domain.member.repository.MemberRepository;
import com.codestates.server_001_withskey.domain.member.service.MemberService;
import com.codestates.server_001_withskey.global.security.Jwt.JwtTokenizer;
import com.codestates.server_001_withskey.global.security.Jwt.withsKeyAuthorityUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

// OAuth2 인증에 성공하면 JWT를 생성하여 response header를 통해 FE 쪽으로  전달하는 역할
@Slf4j
@RequiredArgsConstructor
public class OAuth2MemberSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final JwtTokenizer jwtTokenizer;
    private final withsKeyAuthorityUtils authorityUtils;
    private final MemberService memberService;
    private final MemberRepository memberRepository;


    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
        // authentication 객체의 principal("memberId")를 oAuth2User로 저장.
        var oAuth2User = (OAuth2User)authentication.getPrincipal();
        // email을 oAuth2User로부터 가져와서 String email에 할당.
        String email = String.valueOf(oAuth2User.getAttributes().get("email"));
        // email을 토대로 Role를 생성한다.
        List<String> authorities = authorityUtils.createRoles(email);

        // 가져온 email로 새로운 회원 객체를 만들어 DB에 저장한다.
        saveMember(email);
        // email을 토대로 DB에서 회원 객체를 할당한다.
        Member member = memberRepository.findMemberByEmail(email);

        String username = null;
        // DB에 주어진 email를 가진 회원이 있다면 username을 그 회원의 displayName으로 할당.
        if (member != null) {
            username = member.getDisplayName();
        }
        // DB에서 조회한 회원 객체와, email을 기준으로 생성한 권한을 부여하여 accessToken 생성.
        String accessToken = delegateAccessToken(member, authorities);
        // 회원의 displayName을 할당하여 RefreshToken을 생성함.
        String refreshToken = delegateRefreshToken(username);

        // response에 (accessToken과 refreshToken을 response Header로 추가함.
        response.addHeader(accessToken, refreshToken);
        // response의 Header에 "Authorization" 항목에 "Bearer "+accessToken 할당.
        response.setHeader("Authorization", "Bearer "+accessToken);
        // response의 Header에 "Refresh" 항목에 refreshToken 할당.
        response.setHeader("Refresh",refreshToken);
//         v1
//        getRedirectStrategy().sendRedirect(request, response, makeRedirectUrl(accessToken, refreshToken));
//        // v2
        // 사용자에게 makeRedirectUrl 메서드를 활용하여 endpoint + accessToken + RefreshToken을 보냄.
        getRedirectStrategy().sendRedirect(request, response, makeRedirectUrl(accessToken, refreshToken, request));
    }
    // v2
    private String makeRedirectUrl (String accessToken,
                                    String refreshToken,
                                    HttpServletRequest request) {
        // request의 요청의 체계 (http or https)를 확인하여 scheme 변수에 저장.
        String scheme = request.getScheme(); // http or https
        // request의 서버 이름(호스트 이름, IP 주소)을 확인하여 serverName 변수에 저장.
        String serverName = request.getServerName(); // hostname or ip address
        // request의 서버 포트 번호를 확인하여 serverPort 변수에 저장.
        int serverPort = request.getServerPort(); // port number

        // UriComponentsBuilder를 사용하여 scheme+host+port+path 형식으로 구성한다.
        // ex: http://localhost:8080/mypage
        return UriComponentsBuilder.newInstance()
                .scheme(scheme)
                .host(serverName)
                .port(serverPort)
                .path("/mypage")
                .queryParam("Authorization", accessToken)
                .queryParam("Refresh", refreshToken)
                .build().toUriString();
    }
    // v1
//    private String makeRedirectUrl (String accessToken, String refreshToken) {
//        return UriComponentsBuilder.fromUriString("http://localhost:3000/mypage?")
//                .queryParam("Authorization", accessToken)
//                .queryParam("Refresh", refreshToken)
//                .build().toUriString();
//    }
    // email을 기준으로 새로운 회원 객체를 생성하고 DB에 회원 객체 저장.
    // OAuth2 인증에 성공한 뒤 사용자의 이메일을 저장하는데 사용됨.
    private void saveMember(String email) {
        Member member = new Member(email);
        memberService.createMember(member);
    }
    //
    private String delegateAccessToken(Member member, List<String> authorities) {
        // Token에서 확인되는 payload를 보관하기 위한 claims 생성
        Map<String, Object> claims = new HashMap<>();

        // Object 자리인 Value를 long 타입인 memberId를 담기위해 String 으로 감싸서 지정.
        claims.put("memberId", String.valueOf(member.getMemberId()));
        claims.put("username", member.getDisplayName());
        claims.put("roles", authorities);

        // memberId를 String 형태인 subject에 할당.
        String subject = String.valueOf(member.getMemberId());
        // access token의 유효 기간을 application.yml로부터 가져와서 Date 객체에 할당.
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());
        // secretKey를 Base64형식으로 인코딩하여 String 객체에 할당.
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        // 위에 정의한 claims, subject(memberId), expiration, key를 전달하여 AccessKey 생성.
        String accessToken = jwtTokenizer.generateAccessToken(
                claims,
                subject,
                expiration,
                base64EncodedSecretKey);
        System.out.println("accessToken's memberId: "+subject);
        return accessToken;
    }
    //
    private String delegateRefreshToken(String username) {
        // 파라미터로 주어진 username을 subject로 할당
        String subject = username;
        // 유효 기간을 application.yml에 설정한 시간으로 가져와서 Date 객체에 담음
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes());
        // Base64 형식으로 secrectKey를 인코딩함.
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        // subject, expiration, base64EncodedKey 로 RefreshToken 생성함.
        String refreshToken = jwtTokenizer.generateRefreshToken(subject, expiration,base64EncodedSecretKey);
        return refreshToken;
    }
}
