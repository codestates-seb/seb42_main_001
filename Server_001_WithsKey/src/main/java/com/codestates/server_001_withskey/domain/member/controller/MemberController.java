package com.codestates.server_001_withskey.domain.member.controller;
//
//import com.codestates.server_001_withskey.domain.member.mapper.MemberMapper;
import com.codestates.server_001_withskey.domain.member.Dto.MemberDto;
import com.codestates.server_001_withskey.domain.member.entity.Member;
import com.codestates.server_001_withskey.domain.member.mapper.MemberMapper;
import com.codestates.server_001_withskey.domain.member.service.MemberService;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@Validated
@RequestMapping("/members")
public class  MemberController {
    @Getter
    private final String url = "http://localhost:8080/members/";

    MemberMapper mapper;
    MemberService memberService;

    public MemberController(MemberMapper mapper, MemberService memberService) {
        this.mapper = mapper;
        this.memberService = memberService;
    }

    @PatchMapping
    public ResponseEntity patchMember(@RequestBody @Valid MemberDto.Patch patchMember) throws Exception{
        Member member = mapper.memberDtoPatchToMember(patchMember);
        // Ojbect 타입을 바로 Long으로 바꿀수는 없으니 String -> Long으로 돌린다.
        Long memberId = Long.valueOf(String.valueOf(SecurityContextHolder.getContext().getAuthentication().getPrincipal()));

        member.setMemberId(memberId);
        Member updatedMember = memberService.updateMember(member);
        MemberDto.Response response = mapper.memberToMemberDtoResponse(updatedMember);
        response.setUrl(url+memberId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/mypage")
    public ResponseEntity getMyPage() {
        Long memberId = (Long)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Member findMember = memberService.findMemberById(memberId);
        MemberDto.Response response = mapper.memberToMemberDtoResponse(findMember);
        response.setUrl(url+memberId);
        return new ResponseEntity(response, HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity deleteMember() {
        Long memberId = (Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        memberService.deletedMember(memberId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }


}
