package com.codestates.server_001_withskey.global.security;


import com.codestates.server_001_withskey.domain.member.repository.MemberRepository;
import com.codestates.server_001_withskey.domain.member.service.MemberService;
import com.codestates.server_001_withskey.global.security.Jwt.JwtTokenizer;
import com.codestates.server_001_withskey.global.security.Jwt.JwtVerificationFilter;
import com.codestates.server_001_withskey.global.security.Jwt.withsKeyAuthorityUtils;
import com.codestates.server_001_withskey.global.security.OAuth2.OAuth2MemberSuccessHandler;
import com.codestates.server_001_withskey.global.security.OAuth2.withsKeyAccessDeniedHandler;
import com.codestates.server_001_withskey.global.security.OAuth2.withsKeyAuthenticationEntryPoint;
import com.codestates.server_001_withskey.global.security.Redis.TokenRedisRepository;
import org.apache.catalina.filters.CorsFilter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import javax.servlet.*;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
@Configuration
public class SecurityConfiguration {
    @Value("${spring.security.oauth2.client.registration.google.clientId}")
    private String clientId;
    @Value("${spring.security.oauth2.client.registration.google.clientSecret}")
    private String clientSecret;
    @Value("${spring.security.oauth2.client.registration.google.redirectUri}")
    private String redirectUri;


    private final JwtTokenizer jwtTokenizer;
    private final withsKeyAuthorityUtils authorityUtils;
    private final MemberService memberService;
    private final MemberRepository memberRepository;
    private final StringRedisTemplate stringRedisTemplate;

    public SecurityConfiguration(JwtTokenizer jwtTokenizer,
                                 withsKeyAuthorityUtils authorityUtils,
                                 MemberService memberService,
                                 MemberRepository memberRepository,
                                 StringRedisTemplate stringRedisTemplate) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
        this.memberService = memberService;
        this.memberRepository = memberRepository;
        this.stringRedisTemplate = stringRedisTemplate;
    }
    


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        CustomFilterConfigurer customFilterConfigurer = new CustomFilterConfigurer(jwtTokenizer, authorityUtils, tokenRedisRepository(stringRedisTemplate));
        http
                .headers().frameOptions().disable() //<= frameOptions disable
                .and()
                .csrf().disable()
                .cors(withDefaults())
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new withsKeyAuthenticationEntryPoint())
                .accessDeniedHandler(new withsKeyAccessDeniedHandler())
                .and()
                .anonymous().disable()
                .apply(customFilterConfigurer)
                .and()
                .authorizeHttpRequests(authorize -> authorize
                                .anyRequest().permitAll()
                )
                .oauth2Login(oauth2 -> oauth2
                        .successHandler(new OAuth2MemberSuccessHandler(jwtTokenizer, authorityUtils, memberService,memberRepository))
                ).cors(withDefaults());


        return http.build();
    }

    //CORS 설정 하는 메서드
    @Bean
    CorsConfigurationSource corsConfigurationSource() {

        // CORS 설정에 대한 객체.
        CorsConfiguration configuration = new CorsConfiguration();

        configuration.setAllowedOriginPatterns(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("POST","GET","PATCH","DELETE","OPTIONS"));
        configuration.setExposedHeaders(Arrays.asList("*")); //서버 측에서 제공하는 추가적인 헤더 명시
        configuration.setAllowedHeaders(Arrays.asList("*")); //요청 측에서 제공하는 추가적인 헤더 명시

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public TokenRedisRepository tokenRedisRepository(StringRedisTemplate stringRedisTemplate) {
        return new TokenRedisRepository(stringRedisTemplate);
    }

        public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {

            private final JwtTokenizer jwtTokenizer;
            private final withsKeyAuthorityUtils authorityUtils;
            private final TokenRedisRepository tokenRedisRepository;

            public CustomFilterConfigurer(JwtTokenizer jwtTokenizer,
                                          withsKeyAuthorityUtils authorityUtils,
                                          TokenRedisRepository tokenRedisRepository) {
                this.jwtTokenizer = jwtTokenizer;
                this.authorityUtils = authorityUtils;
                this.tokenRedisRepository = tokenRedisRepository;
            }
            @Override
            public void configure(HttpSecurity builder) throws Exception {
                JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils, tokenRedisRepository);
                builder.addFilterAfter(jwtVerificationFilter, OAuth2LoginAuthenticationFilter.class);
            }
    }
}
