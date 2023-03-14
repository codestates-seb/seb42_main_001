package com.codestates.server_001_withskey.global.security;


import com.codestates.server_001_withskey.domain.member.repository.MemberRepository;
import com.codestates.server_001_withskey.domain.member.service.MemberService;
import com.codestates.server_001_withskey.global.security.Jwt.JwtTokenizer;
import com.codestates.server_001_withskey.global.security.Jwt.JwtVerificationFilter;
import com.codestates.server_001_withskey.global.security.Jwt.withsKeyAuthorityUtils;
import com.codestates.server_001_withskey.global.security.OAuth2.OAuth2MemberSuccessHandler;
import com.codestates.server_001_withskey.global.security.OAuth2.withsKeyAccessDeniedHandler;
import com.codestates.server_001_withskey.global.security.OAuth2.withsKeyAuthenticationEntryPoint;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
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

    public SecurityConfiguration(JwtTokenizer jwtTokenizer,
                                 withsKeyAuthorityUtils authorityUtils,
                                 MemberService memberService,
                                 MemberRepository memberRepository) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
        this.memberService = memberService;
        this.memberRepository = memberRepository;
    }
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin()
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
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize -> authorize
                                .anyRequest().permitAll()
                )
                .oauth2Login(oauth2 -> oauth2
                        .successHandler(new OAuth2MemberSuccessHandler(jwtTokenizer, authorityUtils, memberService,memberRepository))
                );

        return http.build();
    }
    //CORS 설정 하는 메서드
    @Bean
    CorsConfigurationSource corsConfigurationSource() {

        // CORS 설정에 대한 객체.
        CorsConfiguration configuration = new CorsConfiguration();

        // 1. 브라우저가 허용하는 출처 (request를 보내는 입장의 주소)에 대한 설정.
        configuration.setAllowedOriginPatterns(Arrays.asList("http://localhost:3000"));
        // 2. 이거는 1번과 동일한 역할을 함.
//        configuration.setAllowedOrigins(Arrays.asList("*"));
        // 3. 여기에는 pre-flight를 위해 OPTIONS을 추가.
        configuration.setAllowedMethods(Arrays.asList("POST","GET","PATCH","DELETE","OPTIONS"));

        // BE 정하는 규칙.(Arrays.asList) "Authrorization",
        // 4. request에 어떤 헤더값을 우리(BE)가 응답에 넣어서 보내줄지 ex) 회원가입하면 JWT auth를 넣어주듯.
        configuration.setExposedHeaders(Arrays.asList("*"));
        // 5. request에 어떤 헤더값을 받아들이는데 성공할지
        configuration.setAllowedHeaders(Arrays.asList("*"));

        // 6. 프론트에서 로그인 인증이나 인증이 필요한 요청에는
        // withCrednetial라고 FE 에서하는게 있는데 거기에 대한 결과가 true여야지만 CORS 통과하도록 설정.
        // FE에 혹시 withCredential 설정은 어떻게 했는지 물어보고 안만들었다 하면 false로 해야함
        // 단 true일 경우에는 #1. allowedOriginPatterns()에는 * 를 사용할 수 없음.
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        // 위에서 정한 configuration의 CORS 정책을 적용하고 싶은 URL ex)
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);
            builder.addFilterAfter(jwtVerificationFilter, OAuth2LoginAuthenticationFilter.class);
        }
    }
}
