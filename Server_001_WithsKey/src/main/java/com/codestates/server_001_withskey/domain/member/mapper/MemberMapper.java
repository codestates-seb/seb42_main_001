package com.codestates.server_001_withskey.domain.member.mapper;

import com.codestates.server_001_withskey.domain.member.dto.MemberDto;
import com.codestates.server_001_withskey.domain.member.entity.Member;

public interface MemberMapper {

    Member memberDtoPatchToMember(MemberDto.Patch memberPatch);

    MemberDto.Response memberToMemberDtoResponse (Member member);
}
