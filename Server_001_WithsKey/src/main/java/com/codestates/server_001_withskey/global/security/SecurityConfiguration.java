package com.codestates.server_001_withskey.global.security;


import com.codestates.server_001_withskey.domain.member.repository.MemberRepository;
import com.codestates.server_001_withskey.domain.member.service.MemberService;
import com.codestates.server_001_withskey.global.security.Jwt.CustomFilterConfigurer;
import com.codestates.server_001_withskey.global.security.Jwt.JwtTokenizer;
import com.codestates.server_001_withskey.global.security.Jwt.withsKeyAuthorityUtils;
import com.codestates.server_001_withskey.global.security.OAuth2.OAuth2MemberSuccessHandler;
import com.codestates.server_001_withskey.global.security.OAuth2.withsKeyAccessDeniedHandler;
import com.codestates.server_001_withskey.global.security.OAuth2.withsKeyAuthenticationEntryPoint;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
@Configuration
@RequiredArgsConstructor
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
    private final CustomFilterConfigurer customFilterConfigurer;
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

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
                        //로그아웃 요청은 사용자, 관리자 권한
                        .antMatchers(HttpMethod.GET,"/members/logout").hasAnyRole("USER","ADMIN")
                        // 회원 정보 변경 요청 사용자, 관리자
                        .antMatchers(HttpMethod.PATCH,"/members").hasAnyRole("USER","ADMIN")
                        // 회원 정보 삭제 요청 사용자, 관리자
                        .antMatchers(HttpMethod.DELETE,"/members").hasAnyRole("USER","ADMIN")
                        // 회원 정보 조회 요청 사용자, 관리자
//                        .antMatchers(HttpMethod.GET,"/members/mypage").hasAnyRole("USER","ADMIN")
                        // 게시글 생성 요청 회원, 관리자
                        .antMatchers(HttpMethod.POST,"/boards").hasAnyRole("USER","ADMIN")
                        // 게시글 수정 요청 회원, 관리자
                        .antMatchers(HttpMethod.PATCH,"/boards/{board-id}").hasAnyRole("USER","ADMIN")
                        // 게시글 삭제 요청 회원, 관리자
                        .antMatchers(HttpMethod.DELETE,"/boards/{board-id}").hasAnyRole("USER","ADMIN")
                        // 게시글-댓글 등록 요청 회원,관리자
                        .antMatchers(HttpMethod.POST,"/comments/boards").hasAnyRole("USER","ADMIN")
                        // 게시글-댓글 수정 요청 회원,관리자
                        .antMatchers(HttpMethod.PATCH,"/comments/boards/{commentBoard-id}").hasAnyRole("USER","ADMIN")
                        // 게시글-댓글 삭제 요청 회원, 관리자
                        .antMatchers(HttpMethod.DELETE,"/comments/boards/{commentBoard-id}").hasAnyRole("USER","ADMIN")
                        // 주류 댓글 등록 요청 회원, 관리자
                        .antMatchers(HttpMethod.POST,"/comments/drinks").hasAnyRole("USER","ADMIN")
                        // 주류 댓글 수정 요청
                        .antMatchers(HttpMethod.PATCH,"/comments/drinks/{commentDrink-id}").hasAnyRole("USER","ADMIN")
                        // 주류 댓글 삭제 요청
                        .antMatchers(HttpMethod.DELETE,"/comments/drinks/{commentDrink-id}").hasAnyRole("USER","ADMIN")
                        // 게시글 좋아요 등록 요청
                        .antMatchers(HttpMethod.POST,"/likes/boards/{board-id}").hasAnyRole("USER","ADMIN")
                        // 게시글 좋아요 삭제 요청
                        .antMatchers(HttpMethod.DELETE,"/likes/boards/{board-id}").hasAnyRole("USER","ADMIN")
                        // 주류 좋아요 등록 요청
                        .antMatchers(HttpMethod.POST,"/likes/drinks/{drink-id}").hasAnyRole("USER","ADMIN")
                        // 주류 좋아요 삭제 요청
                        .antMatchers(HttpMethod.DELETE,"/likes/drinks/{drink-id}").hasAnyRole("USER","ADMIN")
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
}
