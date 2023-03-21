package com.codestates.server_001_withskey.global.security.OAuth2;

import com.codestates.server_001_withskey.domain.member.entity.Member;
import com.codestates.server_001_withskey.domain.member.repository.MemberRepository;
import com.codestates.server_001_withskey.domain.member.service.MemberService;
import com.codestates.server_001_withskey.global.security.Jwt.JwtTokenizer;
import com.codestates.server_001_withskey.global.security.Jwt.withsKeyAuthorityUtils;
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
public class OAuth2MemberSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final JwtTokenizer jwtTokenizer;
    private final withsKeyAuthorityUtils authorityUtils;
    private final MemberService memberService;
    private final MemberRepository memberRepository;

    public OAuth2MemberSuccessHandler(JwtTokenizer jwtTokenizer,
                                      withsKeyAuthorityUtils authorityUtils,
                                      MemberService memberService,
                                      MemberRepository memberRepository) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
        this.memberService = memberService;
        this.memberRepository = memberRepository;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
        var oAuth2User = (OAuth2User)authentication.getPrincipal();
        String email = String.valueOf(oAuth2User.getAttributes().get("email"));
        List<String> authorities = authorityUtils.createRoles(email);

        // Resource Owner의 이메일 주소를 EB에 저장.
        // 연관 관계에 있는 테이블, 엔티티와의 관계를 위해
        // 최소한의 정보(이메일)은 가지고 있는 편이 좋다.
        saveMember(email);
        Member member = memberRepository.findMemberByEmail(email);

        String username = null;
        if (member != null) {
            username = member.getDisplayName();
        }
        String accessToken = delegateAccessToken(member, authorities);
        String refreshToken = delegateRefreshToken(username);

        response.setHeader("Authorization", "Bearer "+accessToken);
        response.setHeader("Refresh",refreshToken);

        response.addHeader(accessToken, refreshToken);

        getRedirectStrategy().sendRedirect(request, response, makeRedirectUrl(accessToken, refreshToken));
    }
    // 신규 코드
    private String makeRedirectUrl (String accessToken, String refreshToken) {
        return UriComponentsBuilder.fromUriString("http://localhost:3000/mypage?")
                .queryParam("Authorization", accessToken)
                .queryParam("Refresh", refreshToken)
                .build().toUriString();
    }
    private void saveMember(String email) {
        Member member = new Member(email);
        memberService.createMember(member);
    }

    private String delegateAccessToken(Member member, List<String> authorities) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("memberId", String.valueOf(member.getMemberId()));
        claims.put("username", member.getDisplayName());
        claims.put("roles", authorities);

        String subject = String.valueOf(member.getMemberId());
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String accessToken = jwtTokenizer.generateAccessToken(
                claims,
                subject,
                expiration,
                base64EncodedSecretKey);

        return accessToken;
    }

    private String delegateRefreshToken(String username) {
        String subject = username;
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes());
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String refreshToken = jwtTokenizer.generateRefreshToken(subject, expiration,base64EncodedSecretKey);

        return refreshToken;
    }
}
