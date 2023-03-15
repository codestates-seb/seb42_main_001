package com.codestates.server_001_withskey.domain.member.mapper;

import com.codestates.server_001_withskey.domain.member.dto.MemberDto;
import com.codestates.server_001_withskey.domain.member.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class MemberMapperImpl implements MemberMapper{

    public Member memberDtoPatchToMember(MemberDto.Patch memberPatch) {
        if (memberPatch == null) {
            return null;
        } else {
            Member member = new Member();
            member.setMemberId(memberPatch.getMemberId());
            member.setDisplayName(memberPatch.getDisplayName());
            member.setAboutMe(memberPatch.getAboutMe());
            member.setPhoneNumber(memberPatch.getPhoneNumber());
            member.setProfilePicture(memberPatch.getProfilePicture());
            return member;
        }
    }

    public MemberDto.Response memberToMemberDtoResponse(Member member) {
        if (member == null) {
            return null;
        } else {
            MemberDto.Response response = new MemberDto.Response();
            response.setMemberId(member.getMemberId());
            response.setPhoneNumber(member.getPhoneNumber());
            response.setDisplayName(member.getDisplayName());
            response.setProfilePicture(member.getProfilePicture());
            return response;
        }
    }

    public MemberDto.MyPage memberToMyPage(Member member){
        MemberDto.MyPage myPage = new MemberDto.MyPage();

        myPage.setMemberId(member.getMemberId());
        myPage.setProfilePicture(member.getProfilePicture());
        myPage.setAboutMe(member.getAboutMe());
        myPage.setDisplayName(member.getDisplayName());

        return myPage;
    }
}
