package com.codestates.server_001_withskey.domain.tag.repository;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.tag.entity.Tag;
import java.util.List;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.EntityGraph.EntityGraphType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TagRepository extends JpaRepository<Tag, Long> {
    // tag >> tagBoardListId 출력
    @Query("select t, b from Tag t left join t.tagBoardList b where t.tagId =:tagId")
    List<Object> getTagWithBoard(@Param("tagId") Long tagId);


}
