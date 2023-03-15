package com.codestates.server_001_withskey.domain.like.repository;

import com.codestates.server_001_withskey.domain.like.entity.LikeBoard;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LikeBoardRepository extends JpaRepository<LikeBoard, Long> {
    List<LikeBoard> findAllByMemberId(long memberId);

}
