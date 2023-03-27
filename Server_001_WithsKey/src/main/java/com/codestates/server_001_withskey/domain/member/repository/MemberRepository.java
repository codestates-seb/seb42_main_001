package com.codestates.server_001_withskey.domain.member.repository;

import com.codestates.server_001_withskey.domain.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Member findMemberByEmail(String email);
    Optional<Member> findByEmail(String email);
    Member findById (long memberId);
}
