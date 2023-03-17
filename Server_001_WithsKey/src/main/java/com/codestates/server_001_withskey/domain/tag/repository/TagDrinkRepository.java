package com.codestates.server_001_withskey.domain.tag.repository;

import com.codestates.server_001_withskey.domain.tag.entity.TagBoard;
import com.codestates.server_001_withskey.domain.tag.entity.TagDrink;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TagDrinkRepository extends JpaRepository<TagBoard, Long> {
    // tagId로 drink 불러오기
    @Query("select b, t"
        + " from TagDrink b left join Tag t on b.tag = t"
        + " where t.tagId = :tagId")
    List<TagDrink> findDrinkByTagDrink(@Param("tagId") long tagId);

}
