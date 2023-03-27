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
@Component // Spring에가 이 클래스의 인스턴스를 관리한다.
public class JwtTokenizer {

    @Getter
    @Value("${jwt.key.secret}") // application.yml에서 불러오도록 처리됨.
    private String secretKey;

    @Getter
    @Value("${jwt.access-token-expiration-minutes}") // application.yml에서 불러오도록 처리됨.
    private int accessTokenExpirationMinutes;

    @Getter
    @Value("${jwt.refresh-token-expiration-minutes}")// application.yml에서 불러오도록 처리됨.
    private int refreshTokenExpirationMinutes;

    public String encodeBase64SecretKey(String secretKey) {
        // 문자열 SecretKey를 JWT 라이브러리에서 제공하는 Base64형식으로 인코딩하여 반환함.
        return Encoders.BASE64.encode(secretKey.getBytes(StandardCharsets.UTF_8));
    }

    // AccessToken을 생성하는 메서드.
    public String generateAccessToken(Map<String, Object> claims,
                                      String subject,
                                      Date expiration,
                                      String base64EncodedSecretKey) {
        // Key객체의 key는 Base64형식으로 인코딩된 문자열 SecretKey를 디코딩한 순수 문자열 SecretKey.
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);
        // 전달받은 claims, subject, IssuedAt, Expiration
        // 그리고 key를 사용해 compact string 타입으로 AccessKey를 발급.
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(Calendar.getInstance().getTime())
                .setExpiration(expiration)
                .signWith(key)
                .compact();
    }
    // RefreshToken을 생성하는 메서드
    public String generateRefreshToken(String subject,
                                       Date expiration,
                                       String base64EncodedSecretKey) {
        // Key객체의 key는 Base64형식으로 인코딩된 문자열 SecretKey를 디코딩한 순수 문자열 SecretKey.
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

        String refreshToken = Jwts.builder()
                .setSubject(subject)
                .setIssuedAt(Calendar.getInstance().getTime())
                .setExpiration(expiration)
                .signWith(key)
                .compact();

        return refreshToken;
    }
    // 처음 발급받은 RefreshToken을 가지고 2번째 AccessToken을 생성하는 메서드
    public String regenerateAccessToken(String refreshToken) {

        try {
            // RefreshToken과 SecretKey를 Base64로 인코딩한 키를 입력받고,
            // 그 RefreshToken 을 디코딩하여 Jws<Claims>객체 refreshTokenClaims 에 담는다.
            Jws<Claims> refreshTokenClaims = getClaims(refreshToken, encodeBase64SecretKey(secretKey));

            // refreshTokenClaims 객체로부터 exp(토큰의 만료 타임스탬프)를 int 타입으로 가져온다.
            int epochTime = (Integer) refreshTokenClaims.getBody().get("exp");

            // RefreshToken 로부터 만료 시간을 계산하여 Date 객체에 담는다.
            // milliseconds 로 바꾸기 위해 1000을 곱함.
            Date refreshTokenExpiration = new Date(epochTime * 1000L);

            // refreshToken 만료시간을 계산하여 현재 시간과 비교하여
            if (refreshTokenExpiration.before(new Date())) {
            // 만료가 되었다면 RefreshToken has expired 메시지와 예외 처리.
                throw new RuntimeException("RefreshToken has expired");
            }
            // refreshToken 이 유효하다면 refreshTokenClaims 객체로부터
            // getSubject 메서드를 사용하여 이메일을 가져온다.
            String email = refreshTokenClaims.getBody().getSubject();
            // 새로운 AccessToken의 만료 기간을 필드 accessTokenExpirationMinutes 변수를 통해 할당.
            Date accessTokenExpiration = getTokenExpiration(accessTokenExpirationMinutes);
            // 새로운 accessToken의 claims을 위해 Map 객체를 생성하여,
            // refreshTokenClaims로부터 확보해둔 email을 집어 넣는다.
            Map<String, Object> accessTokenClaims = new HashMap<>();
            accessTokenClaims.put("email", email);
            // 새로운 AccessToken을 생성하며
            // 새로운 claims, email, 만료날짜와 Base64로 인코딩된 SecretKey를 파라미터로 사용한다.
            String newAccessToken = generateAccessToken(accessTokenClaims, email, accessTokenExpiration, encodeBase64SecretKey(secretKey));
            // 새로운 AccessToken 생성.
            return newAccessToken;
        // 그 과정에서 예외가 발생하면 RuntimeException 으로 처리.
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    // Jwt 토큰과 Base64형식으로 인코딩된 SecretKey를 입력받는다.
    public Jws<Claims> getClaims(String jws, String base64EncodedSecretKey) {
        // Base64로 인코딩된 SecretKey를 getKeyFromBase64EncodedKey 메서드로 디코딩하여 key 생성.
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);
        // Token을 디코딩하여 token claims를 반환.
        Jws<Claims> claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(jws);
        return claims;
    }
    // JWT Token과 Base64형식의 인코딩 SecretKey를 입력받고, Token의 Sinature를 검증한다.
    public void verifySignature(String jws, String base64EncodedSecretKey) {
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);
        Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(jws);
    }
    // 구체적인 Minutes 단위의 값을 전달받아 Token의 만료날짜를 계산한다.
    public Date getTokenExpiration(int expirationMinutes) {
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.MINUTE, expirationMinutes);
        Date expiration = calendar.getTime();

        return expiration;
    }
    // JWT 라이브러리를 사용하여 Base64 형식의 인코딩된 SecretKey를 디코딩하여 key 객체 반환.
    private Key getKeyFromBase64EncodedKey(String base64EncodedSecretKey) {
        byte[] keyBytes = Decoders.BASE64.decode(base64EncodedSecretKey);
        Key key = Keys.hmacShaKeyFor(keyBytes);
        return key;
    }
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

