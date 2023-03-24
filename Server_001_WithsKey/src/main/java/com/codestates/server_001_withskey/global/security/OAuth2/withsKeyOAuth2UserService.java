package com.codestates.server_001_withskey.global.security.OAuth2;

import com.codestates.server_001_withskey.domain.member.entity.Member;
import com.codestates.server_001_withskey.domain.member.service.MemberService;

import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;

import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

// OAuth2 인증에 성공한 유저의 정보를 관리하는 역할
@Service
public class withsKeyOAuth2UserService extends DefaultOAuth2UserService {

    private final MemberService memberService;

    public withsKeyOAuth2UserService(MemberService memberService) {
        this.memberService = memberService;
    }


    // 파라미터로 받는 OAuth2UserRequest는 AccessToken과 사용자의 등록 정보를 담고있다.
    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        // OAuth2 인증에 성공한 유저의 이메일, 이름과 같은 사용자 속성등을 OAuth2User 객체 oAuth2User에 담음.
        OAuth2User oAuth2User = super.loadUser(userRequest);
        String email = oAuth2User.getAttribute("email");
        String displayName = oAuth2User.getAttribute("name");
        String oauth2Type = userRequest.getClientRegistration().getRegistrationId();

        // OAuth2 인증에 성공한 유저의 이메일을 기준으로 DB에 저장된 회원이 있는지 조회
        Member member = memberService.findMemberByEmail(email);

        // 만약 회원 객체가 없다면 이메일을 생성자로 주어 새로운 회원 객체 생성.
        // 그 후 새로 생성한 회원 객체에 oAuth2에 보관한 정보(displayName, oauth2Type)을 넣어줌.
        // 정보를 할당한 회원 객체를 DB에 새로 생성함.
        if(member ==null) {
            member = new Member(email);
            member.setDisplayName(displayName);
            member.setOauthType(oauth2Type);
            memberService.createMember(member);

            // 이메일을 기준으로 DB에서 회원 객체가 조회된다면,
            // 해당 조회된 회원 객체에 DisplayName과 OauthType을 할당함.
        } else {
            member.setDisplayName(displayName);
            member.setOauthType(oauth2Type);
            // 정보를 추가한 회원 객체를 DB에 업데이트함. (예외가 발생할 수 있으므로 try 문작성)
            try {
                memberService.updateMember(member);
                // 만일 업데이트 중
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
            return oAuth2User;
        } // DB에 새로운 회원 객체를 추가하든, 기존 회원 객체를 수정하든 완료되면 oAuth2User를 반환함.
        return oAuth2User;
    }
}