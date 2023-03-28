package com.codestates.server_001_withskey.domain.member.service;

import com.codestates.server_001_withskey.domain.member.entity.Member;
import com.codestates.server_001_withskey.domain.member.repository.MemberRepository;
import com.codestates.server_001_withskey.global.advice.BusinessLogicException;
import com.codestates.server_001_withskey.global.advice.ExceptionCode;
import com.codestates.server_001_withskey.global.security.Jwt.withsKeyAuthorityUtils;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final withsKeyAuthorityUtils withsKeyAuthorityUtils;

    public MemberService(MemberRepository memberRepository, com.codestates.server_001_withskey.global.security.Jwt.withsKeyAuthorityUtils withsKeyAuthorityUtils) {
        this.memberRepository = memberRepository;
        this.withsKeyAuthorityUtils = withsKeyAuthorityUtils;
    }

    public Member createMember(Member member) {
        if(!verifyEmail(member.getEmail())) {
            List<String> roles = withsKeyAuthorityUtils.createRoles(member.getEmail());
            member.setRoles(roles);
            Member savedMember = memberRepository.save(member);
            return savedMember;
        }
        return null;
    }
    public Member updateMember(Member member) throws Exception{
        Member findMember = findMemberById(member.getMemberId());

        Optional.ofNullable(member.getDisplayName())
                        .ifPresent(displayName -> findMember.setDisplayName(displayName));
        Optional.ofNullable(member.getAboutMe())
                        .ifPresent(aboutMe->findMember.setAboutMe(aboutMe));
        Optional.ofNullable(member.getPhoneNumber())
                        .ifPresent(phone->findMember.setPhoneNumber(phone));
        Optional.ofNullable(member.getProfilePicture())
                        .ifPresent(profile->findMember.setProfilePicture(profile));

        return memberRepository.save(findMember);
    }
    @Transactional
    public void deletedMember(long memberId) {
        Member member = findMemberById(memberId);
        memberRepository.delete(member);
    }

    public boolean verifyEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        return member.isPresent();
    }

    public void verifyExistedEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if(member.isPresent())
            throw new BusinessLogicException(ExceptionCode.EMAIL_ALREADY_EXIST);
    }

    public Optional<Member> getMemberByEmail(String email) {
        return memberRepository.findByEmail(email);
    }
    public Member findMemberByEmail(String email) {
        return memberRepository.findMemberByEmail(email);
    }

    public Member findMemberById (long memberId) {
        Member findMember = memberRepository.findById(memberId);
        if(findMember == null) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
        }
        return findMember;
    }
}
