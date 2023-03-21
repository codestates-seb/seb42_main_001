package com.codestates.server_001_withskey.global.security.Redis;

import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Repository;

import java.util.concurrent.TimeUnit;


public class TokenRedisRepository {

    private final StringRedisTemplate redisTemplate;
    private final static String ACCESS_TOKEN_PREFIX = "access:";
    private final static String USED_ACCESS_TOKEN_PREFIX = "used_access:";
    private final static String REFRESH_TOKEN_PREFIX = "refresh:";
    private final static String USED_REFRESH_TOKEN_PREFIX = "used_refresh:";
    private final static String NO_MORE_USED_ACCESS_TOKEN_PREFIX = "logout_used_access:";
    private final static String NO_MORE_USED_REFRESH_TOKEN_PREFIX = "logout_used_refresh:";

    public TokenRedisRepository(StringRedisTemplate redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    public String getAccessToken(String accessToken) {
        String accessKey = ACCESS_TOKEN_PREFIX + accessToken;
        return redisTemplate.opsForValue().get(accessKey);
    }
    public String getRefreshToken(String refreshToken) {
        String refreshKey = REFRESH_TOKEN_PREFIX + refreshToken;
        return redisTemplate.opsForValue().get(refreshKey);
    }

    public void saveUsedAccessToken(String token, long duration, TimeUnit timeUnit) {
        String key = USED_ACCESS_TOKEN_PREFIX + token;
        redisTemplate.opsForValue().set(key, "", duration, timeUnit);
    }
    public boolean isAccessTokenUsed(String token) {
        String key = USED_ACCESS_TOKEN_PREFIX + token;
        return redisTemplate.hasKey(key);
    }
    public void saveUsedRefreshToken(String refreshToken, long duration, TimeUnit timeUnit) {
       String key = USED_REFRESH_TOKEN_PREFIX + refreshToken;
       redisTemplate.opsForValue().set(key, "", duration, timeUnit);
    }
    public boolean isRefreshTokenUsed(String refreshToken) {
        String key = USED_REFRESH_TOKEN_PREFIX + refreshToken;
        return redisTemplate.hasKey(key);
    }
    public void saveInvalidatedAccessToken(String accessToken, long duration, TimeUnit timeUnit) {
        String key = NO_MORE_USED_ACCESS_TOKEN_PREFIX + accessToken;
        redisTemplate.opsForValue().set(key, "", duration, timeUnit);
    }
    public void saveInvalidatedRefreshToken(String refreshToken, long duration, TimeUnit timeUnit) {
        String key = NO_MORE_USED_REFRESH_TOKEN_PREFIX + refreshToken;
        redisTemplate.opsForValue().set(key, "", duration, timeUnit);
    }


    public void saveNewAccessTokenAndRefreshToken(String accessToken,
                                                  String refreshToken,
                                                  long accessTokenDuration,
                                                  long refreshTokenDuration,
                                                  TimeUnit timeUnit ) {
        // accessKey는 ACCESS_TOKEN_PREFIX와 new AccessToken 값을 합친 변수.
        String accessKey = ACCESS_TOKEN_PREFIX + accessToken;
        String refreshKey = REFRESH_TOKEN_PREFIX + refreshToken;

        // Redis와 상호작용을 하는 RedisTemplate class의 인스턴스인 redisTemplate를 사용.
        // redisTemplate.opsForValue()는 ValueOperations 인터페이스를 Return 하며,
        // ValueOperations 인터페이스는 String 값으로 작업하는 단순 작업에 대한 기능을 제공하는 인터페이스.
        // accessKey 를 key 로 사용. (Redis에서 저장된 Value들의 식별자로 활용)
        // 상수 ACCESS_TOKEN_PREFIX + new RefreshToken 를 value 로 사용하여 Redis에 보관한다.
        redisTemplate.opsForValue().set(accessKey, accessToken,accessTokenDuration,timeUnit);
        redisTemplate.opsForValue().set(refreshKey, refreshToken, refreshTokenDuration, timeUnit);
    }
}
