package com.codestates.server_001_withskey.domain.like.repository;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.like.entity.LikeBoard;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface LikeBoardRepository extends JpaRepository<LikeBoard, Long> {
    List<LikeBoard> findAllByMemberId(long memberId);
    Optional<LikeBoard> findLikeBoardByMemberIdAndBoard(long memberId, Board board);

}
