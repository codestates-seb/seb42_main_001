package com.codestates.server_001_withskey.global.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
    @Bean
    public SecurityFilterChain configurer(HttpSecurity https) throws Exception {
        https
                .csrf().disable()
                .httpBasic().disable()
                .headers().frameOptions().disable()
                .and()
                .formLogin().disable()
                .cors().disable()
                .authorizeHttpRequests(authz ->
                        authz.anyRequest().permitAll()
                );

        return https.build();
    }
}
