package com.codestates.server_001_withskey.global.security;

import com.codestates.server_001_withskey.global.security.Redis.TokenRedisRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.core.StringRedisTemplate;
@Configuration
public class ComponentConfiguration {
    @Bean
    public TokenRedisRepository tokenRedisRepository(StringRedisTemplate stringRedisTemplate) {
        return new TokenRedisRepository(stringRedisTemplate);
    }
}
