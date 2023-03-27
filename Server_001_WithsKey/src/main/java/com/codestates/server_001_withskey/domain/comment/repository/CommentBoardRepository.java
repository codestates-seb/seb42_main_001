package com.codestates.server_001_withskey.domain.comment.repository;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.comment.entity.CommentBoard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentBoardRepository extends JpaRepository<CommentBoard, Long> {
    List<CommentBoard> findAllByBoard(Board board);
    List<CommentBoard> findAllByMemberId(long memberId);
}
