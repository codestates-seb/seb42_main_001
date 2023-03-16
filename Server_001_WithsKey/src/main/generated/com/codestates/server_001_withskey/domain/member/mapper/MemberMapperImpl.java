package com.codestates.server_001_withskey.domain.member.mapper;

import com.codestates.server_001_withskey.domain.member.Dto.MemberDto.Patch;
import com.codestates.server_001_withskey.domain.member.Dto.MemberDto.Response;
import com.codestates.server_001_withskey.domain.member.entity.Member;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-15T15:05:15+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 16.0.1 (AdoptOpenJDK)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member memberDtoPatchToMember(Patch memberPatch) {
        if ( memberPatch == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( memberPatch.getMemberId() );
        member.setDisplayName( memberPatch.getDisplayName() );
        member.setPhoneNumber( memberPatch.getPhoneNumber() );
        member.setProfilePicture( memberPatch.getProfilePicture() );

        return member;
    }

    @Override
    public Response memberToMemberDtoResponse(Member member) {
        if ( member == null ) {
            return null;
        }

        Response response = new Response();

        response.setMemberId( member.getMemberId() );
        response.setPhoneNumber( member.getPhoneNumber() );
        response.setDisplayName( member.getDisplayName() );
        response.setProfilePicture( member.getProfilePicture() );

        return response;
    }
}
