package com.codestates.server_001_withskey.domain.member.service;

import com.codestates.server_001_withskey.global.security.Jwt.JwtTokenizer;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
@RequiredArgsConstructor
public class GuestUtil {

    private final JwtTokenizer jwtTokenizer;

    public String delegateGuestAccessToken() {
        Map<String, Object> claim = new HashMap<>();
        claim.put("memberId", "100");
        claim.put("username", "guest");
        claim.put("roles", List.of("USER"));

        String subject = "100";
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String accessToken = jwtTokenizer.generateAccessToken(
                claim,
                subject,
                expiration,
                base64EncodedSecretKey
        );
        return accessToken;
    }

    public String delegateGuestRefreshToken() {
        Map<String, Object> claim = new HashMap<>();
        claim.put("memberId", "100");
        claim.put("username", "guest");
        claim.put("roles", List.of("USER"));

        String subject = "100";
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String refreshToken = jwtTokenizer.generateRefreshToken(subject, expiration,base64EncodedSecretKey);
        return refreshToken;
    }

    public static String makeRedirectUrl (String accessToken,
                                    String refreshToken) {
        return UriComponentsBuilder.fromUriString("http://withskey.site/mypage")
                .queryParam("Authorization", accessToken)
                .queryParam("Refresh", refreshToken)
                .build().toUriString();
    }
}
