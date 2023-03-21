package com.codestates.server_001_withskey.global.security.Jwt;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.time.Instant;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

// JWT AccessToken, RefreshToken 생성

@Component
public class JwtTokenizer {

    @Getter
    @Value("${jwt.key.secret}")
    private String secretKey;

    @Getter
    @Value("${jwt.access-token-expiration-minutes}")
    private int accessTokenExpirationMinutes;

    @Getter
    @Value("${jwt.refresh-token-expiration-minutes}")
    private int refreshTokenExpirationMinutes;

    public String encodeBase64SecretKey (String secretKey) {
        return Encoders.BASE64.encode(secretKey.getBytes(StandardCharsets.UTF_8));
    }

    public String generateAccessToken(Map<String, Object> claims,
                                      String subject,
                                      Date expiration,
                                      String base64EncodedSecretKey) {
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(Calendar.getInstance().getTime())
                .setExpiration(expiration)
                .signWith(key)
                .compact();
    }
    public String generateRefreshToken(String subject,
                                       Date expiration,
                                       String base64EncodedSecretKey) {
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

        String refreshToken = Jwts.builder()
                .setSubject(subject)
                .setIssuedAt(Calendar.getInstance().getTime())
                .setExpiration(expiration)
                .signWith(key)
                .compact();

        return refreshToken;
    }
    public String regenerateAccessToken(String refreshToken) {

        try {
            Jws<Claims> refreshTokenClaims = getClaims(refreshToken, encodeBase64SecretKey(secretKey));

            // RefreshToken의 claims의 body에서 exp(토큰의 만료 타임스탬프)를 가져온다.
            int epochTime = (Integer) refreshTokenClaims.getBody().get("exp");

            // RefreshToken의 만료 날짜를 계산.
            Date refreshTokenExpiration = new Date(epochTime * 1000L);

            if (refreshTokenExpiration.before(new Date())) {
                throw new RuntimeException("RefreshToken has expired");
            }

            String email = refreshTokenClaims.getBody().getSubject();
            Date accessTokenExpiration = getTokenExpiration(accessTokenExpirationMinutes);
            Map<String, Object> accessTokenClaims = new HashMap<>();
            accessTokenClaims.put("email", email);
            String newAccessToken = generateAccessToken(accessTokenClaims, email, accessTokenExpiration, encodeBase64SecretKey(secretKey));

            return newAccessToken;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
    public Jws<Claims> getClaims(String jws, String base64EncodedSecretKey) {
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

        Jws<Claims> claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(jws);
        return claims;
    }
    public void verifySignature(String jws, String base64EncodedSecretKey) {
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

        Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(jws);
    }
    public Date getTokenExpiration(int expirationMinutes) {
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.MINUTE, expirationMinutes);
        Date expiration = calendar.getTime();

        return expiration;
    }
    private Key getKeyFromBase64EncodedKey (String base64EncodedSecretKey) {
        byte[] keyBytes = Decoders.BASE64.decode(base64EncodedSecretKey);
        Key key = Keys.hmacShaKeyFor(keyBytes);
        return key;
    }
    // 현재는 regenerateAccessToken과 generateRefreshToken 메서드를 사용하므로 필요 X.
//    public Map<String, String> regenerateAccessTokenAndRefreshToken(String refreshToken) {
//        try {
//            Jws<Claims> refreshTokenClaims = getClaims(refreshToken, encodeBase64SecretKey(secretKey));
//            int epochTime = (Integer) refreshTokenClaims.getBody().get("exp");
//
//            Date refreshTokenExpiration = new Date(epochTime * 1000L * 60);
//
//            if (refreshTokenExpiration.before(new Date())) {
//                throw new RuntimeException("RefreshToken has expired");
//            }
//
//            String email = refreshTokenClaims.getBody().getSubject();
//            Date accessTokenExpiration = getTokenExpiration(accessTokenExpirationMinutes);
//            Date newRefreshTokenExpiration = getTokenExpiration(refreshTokenExpirationMinutes);
//            Map<String, Object> accessTokenClaims = new HashMap<>();
//            accessTokenClaims.put("email", email);
//
//            String newAccessToken = generateAccessToken(accessTokenClaims, email, accessTokenExpiration, encodeBase64SecretKey(secretKey));
//            String newRefreshToken = generateRefreshToken(email, newRefreshTokenExpiration, encodeBase64SecretKey(secretKey));
//
//            Map<String, String> tokens = new HashMap<>();
//            tokens.put("accessToken", newAccessToken);
//            tokens.put("refreshToken", newRefreshToken);
//            return tokens;
//        } catch (Exception e) {
//            throw new RuntimeException(e);
//        }
//    }
}
