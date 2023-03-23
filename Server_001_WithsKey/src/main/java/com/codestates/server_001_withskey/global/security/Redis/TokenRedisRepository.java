package com.codestates.server_001_withskey.global.security.Redis;

import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Repository;

import java.util.concurrent.TimeUnit;

// AccessToken과 RefreshToken을 Redis를 통해 관리하기 위한 클래스.
public class TokenRedisRepository {
    // StringRedisTemplate은 Redis와 상호작용을 하기 위한 객체 타입.
    private final StringRedisTemplate redisTemplate;
    // Redis에 토큰들을 저장할 때는 Map 형태(Key : Value)로 저장하는데 Key값 에 해당하는 문자열을 담는 상수.
    // Redis에 "access:"+token 의 형태로 토큰들이 저장된다.

    private final static String ACCESS_TOKEN_PREFIX = "access:"; // 생성된 accessToken 저장 상수
    private final static String REFRESH_TOKEN_PREFIX = "refresh:"; // 생성된 refreshToken 저장 상수
    private final static String USED_ACCESS_TOKEN_PREFIX = "used_access:"; // 사용된 accessToken 저장 상수
    private final static String USED_REFRESH_TOKEN_PREFIX = "used_refresh:"; // 사용된 refreshToken 저장 상수
    private final static String NO_MORE_USED_ACCESS_TOKEN_PREFIX = "logout_used_access:"; // 로그아웃 유저의 accessToken 저장 상수
    private final static String NO_MORE_USED_REFRESH_TOKEN_PREFIX = "logout_used_refresh:"; // 로그아웃 유저의 refreshToken 저장 상수

    public TokenRedisRepository(StringRedisTemplate redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    // 파라미터로 주어진 accessToken 를 활용하여 accessKey 를 생성하고
    // 이를 토대로 Redis 에서 보관중인 accessToken 이 있는지 검색하는 메서드
    // Redis에 일치하는 accessToken 이 있다면 accessToken을 리턴, 없으면 null 리턴
    public String getAccessToken(String accessToken) {
        // accessKey 는 Redis 에서 보관중인 AccessToken을 검색하는 식별자 역할.
        String accessKey = ACCESS_TOKEN_PREFIX + accessToken;
        // redisTemplate : Redis와 상호작용하는 객체
        // redisTemplate.opsForValue() 메서드를 통해 accessKey를 조회하여 Redis에서 불러온다.
        // String accessKey = "access:" + accessToken
        return redisTemplate.opsForValue().get(accessKey);
    }

    // 파라미터로 주어진 refreshToken 를 활용하여 refreshKey 를 생성하고
    // 이를 토대로 Redis 에서 보관중인 RefreshToken 이 있는지 검색하는 메서드
    // Redis에 일치하는 RefreshToken 이 있다면 RefreshToken을 리턴, 없으면 null 리턴
    public String getRefreshToken(String refreshToken) {
        String refreshKey = REFRESH_TOKEN_PREFIX + refreshToken;
        // redisTemplate.opsForValue() 메서드를 사용해
        // Redis 에서 refreshKey를 조회하여 RefreshToken을 불러온다.
        return redisTemplate.opsForValue().get(refreshKey);
    }

    // 사용된 AccessToken을 Redis에 저장하는 메서드.
    public void saveUsedAccessToken(String token, long duration, TimeUnit timeUnit) {
        String key = USED_ACCESS_TOKEN_PREFIX + token;
        // value를 "" 으로 하면 Redis CLI에서 조회할 경우
        // used_access:token값 : "" 으로 나오고 value를 "used"로 하면
        // used_access:token값 : "used" 라고 나오는데 중요치 않으므로 ""으로 작성함.
        // redisTemplate.opsForValue() 메서드로 Redis에 .set() 을 이용해 저장함.
        redisTemplate.opsForValue().set(key, "", duration, timeUnit);
    }

    // 사용된 RefreshToken을 Redis에 저장하는 메서드
    public void saveUsedRefreshToken(String refreshToken, long duration, TimeUnit timeUnit) {
        String key = USED_REFRESH_TOKEN_PREFIX + refreshToken;
        // value를 "" 으로 하면 Redis CLI에서 조회할 경우
        // used_refresh:token값 : "" 으로 나오고 value를 "used"로 하면
        // used_refresh:token값 : "used" 라고 나오는데 중요치 않으므로 ""으로 작성함.
        redisTemplate.opsForValue().set(key, "", duration, timeUnit);
    }

    // 파라미터로 주어진 token 이 used 라고 표시되어 있는지 확인하는 메서드.
    public boolean isAccessTokenUsed(String token) {
        // key = used_access:+token 으로 생성
        String key = USED_ACCESS_TOKEN_PREFIX + token;
        // 위에 생성한 key 가 Redis 에서 찾아 진다면 해당 token 은 used 상태이며, true 리턴.
        // 만일 key 가 Redis 에서 찾아지지 않는다면, 해당 token 은 사용된 상태가 아니며 false 리턴.
        return redisTemplate.hasKey(key);
    }

    // 파라미터로 주어진 refreshToken이 used 라고 표시되어 있는지 확인하는 메서드
    public boolean isRefreshTokenUsed(String refreshToken) {
        // key = 상수값 : used_refresh:+refreshToken 으로 생성.
        String key = USED_REFRESH_TOKEN_PREFIX + refreshToken;
        // 위에 생성한 key 를 Redis 에서 조회했을 때 찾아지면 used Refresh 이며, true 리턴.
        // key 가 Redis 에서 조회되지 않으면 valid Refresh 이며, false 리턴.
        return redisTemplate.hasKey(key);
    }

    // 로그아웃 유저의 AccessToken 을 Redis 에 보관하는 메서드
    public void saveInvalidatedAccessToken(String accessToken, long duration, TimeUnit timeUnit) {
        // key = logout_used_access:+accessToken 으로 생성.
        String key = NO_MORE_USED_ACCESS_TOKEN_PREFIX + accessToken;
        // value 를 "" 으로 하면 Redis CLI 에서 조회할 경우
        // logout_used_access: accessToken : "" 으로 나오고 value 를 "used"로 하면
        // logout_used_access: accessToken : "used" 라고 나오는데 중요치 않으므로 ""으로 작성함.
        // Redis 에 redisTemplate.opsForValue().set() 을 이용해 파라미터들을 저장하는 메서드.
        redisTemplate.opsForValue().set(key, "", duration, timeUnit);
    }

    // 로그아웃 유저의 RefreshToken 을 Redis에 보관하는 메서드
    public void saveInvalidatedRefreshToken(String refreshToken, long duration, TimeUnit timeUnit) {
        // key = logout_used_refresh:+refreshToken 으로 생성.
        String key = NO_MORE_USED_REFRESH_TOKEN_PREFIX + refreshToken;
        // value 를 "" 으로 하면 Redis CLI 에서 조회할 경우
        // logout_used_refresh: refreshToken : "" 으로 나오고 value를 "used"로 하면
        // logout_used_refresh: refreshToken : "used" 라고 나오는데 중요치 않으므로 ""으로 작성함.
        redisTemplate.opsForValue().set(key, "", duration, timeUnit);
    }

    // 새로 생성된 AccessToken 과 RefreshToken 을 Redis 에 저장하는 메서드
    public void saveNewAccessTokenAndRefreshToken(String accessToken,
                                                  String refreshToken,
                                                  long accessTokenDuration,
                                                  long refreshTokenDuration,
                                                  TimeUnit timeUnit ) {
        // accessKey = access: + accessToken.
        String accessKey = ACCESS_TOKEN_PREFIX + accessToken;
        // refreshKey = refresh: + refreshToken.
        String refreshKey = REFRESH_TOKEN_PREFIX + refreshToken;

        // Redis와 상호작용을 하는 RedisTemplate class의 인스턴스인 redisTemplate를 사용.
        // redisTemplate.opsForValue()는 ValueOperations 인터페이스를 Return 하며,
        // ValueOperations 인터페이스는 String 값으로 작업하는 단순 작업에 대한 기능을 제공하는 인터페이스.
        // accessKey 를 key 로 사용. (Redis에서 저장된 Value들의 식별자로 활용)
        // 상수 ACCESS_TOKEN_PREFIX + new RefreshToken 를 value 로 사용하여 Redis에 보관한다.

        // Redis에 redisTemplate.opsForValue().set() 을 이용해 파라미터들을 저장하는 메서드.
        redisTemplate.opsForValue().set(accessKey, accessToken,accessTokenDuration,timeUnit);
        redisTemplate.opsForValue().set(refreshKey, refreshToken, refreshTokenDuration, timeUnit);
    }
}
