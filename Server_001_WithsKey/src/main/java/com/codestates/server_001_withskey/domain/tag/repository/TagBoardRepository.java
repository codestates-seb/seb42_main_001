package com.codestates.server_001_withskey.domain.tag.repository;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.tag.entity.Tag;
import com.codestates.server_001_withskey.domain.tag.entity.TagBoard;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TagBoardRepository extends JpaRepository<TagBoard, Long> {
    List<TagBoard> findTagBoardsByBoard(Board board);
}
