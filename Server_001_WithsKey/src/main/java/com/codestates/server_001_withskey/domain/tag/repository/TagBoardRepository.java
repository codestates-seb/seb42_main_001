package com.codestates.server_001_withskey.domain.tag.repository;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.tag.entity.Tag;
import com.codestates.server_001_withskey.domain.tag.entity.TagBoard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TagBoardRepository extends JpaRepository<TagBoard, Long> {
    List<TagBoard> findTagBoardsByBoard(Board board);

    List<TagBoard> findTagBoardsByTag(Tag tag);


    // tagId로 board 불러오기
    @Query("select b, t"
        + " from TagBoard b left join Tag t on b.tag = t"
        + " where t.tagId = :tagId")
    List<TagBoard> findBoardByTagBoard(@Param("tagId") long tagId);
}
