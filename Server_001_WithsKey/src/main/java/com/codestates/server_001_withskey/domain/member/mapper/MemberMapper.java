package com.codestates.server_001_withskey.domain.member.mapper;

import com.codestates.server_001_withskey.domain.member.Dto.MemberDto;
import com.codestates.server_001_withskey.domain.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {

    Member memberDtoPatchToMember(MemberDto.Patch memberPatch);

    MemberDto.Response memberToMemberDtoResponse (Member member);

}
