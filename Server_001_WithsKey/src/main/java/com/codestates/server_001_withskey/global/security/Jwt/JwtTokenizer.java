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
// remove v1
//    private final JwtVerificationFilter jwtVerificationFilter;

    @Getter
    @Value("${jwt.key.secret}")
    private String secretKey;

    @Getter
    @Value("${jwt.access-token-expiration-minutes}")
    private int accessTokenExpirationMinutes;

    @Getter
    @Value("${jwt.refresh-token-expiration-minutes}")
    private int refreshTokenExpirationMinutes;

//    // redis 추가1
//    private final RedisTemplate<String, Object> redisTemplate;
//
//    // redis 추가2
//    public JwtTokenizer(RedisTemplate<String, Object> redisTemplate) {
//        this.redisTemplate = redisTemplate;
//    }


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

        // redis 추가3 : Store refresh token in Redis with expiration time
//        redisTemplate.opsForValue().set(refreshToken,subject,refreshTokenExpirationMinutes, TimeUnit.MINUTES);

        return refreshToken;
    }
    public String regenerateAccessToken(String refreshToken) {
//        // redis 추가4
//        try {
//            // check if refreshToken exists in Redis
//            if (redisTemplate.hasKey(refreshToken)) {
//                String email = (String) redisTemplate.opsForValue().get(refreshToken);
//                Date accessTokenExpiration = getTokenExpiration(accessTokenExpirationMinutes);
//                Map<String, Object> accessTokenClaims = new HashMap<>();
//                accessTokenClaims.put("email", email);
//                String newAccessToken = generateAccessToken(accessTokenClaims, email, accessTokenExpiration, encodeBase64SecretKey(secretKey));
//                return newAccessToken;
//            } else {
//                throw new RuntimeException("Refresh Token not found in Redis");
//            }
//        } catch (Exception e) {
//            throw new RuntimeException(e);
//        }
//    }
//     redis 적용하기 전 code.
        try {
            Jws<Claims> refreshTokenClaims = getClaims(refreshToken, encodeBase64SecretKey(secretKey));

//            Instant refreshTokenExpiration = Instant.ofEpochSecond((Long) refreshTokenClaims.getBody().get("exp"));
            int epochTime = (Integer) refreshTokenClaims.getBody().get("exp");

            // 1000L = 1sec,
            Date refreshTokenExpiration = new Date(epochTime * 1000L*60);

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
}
