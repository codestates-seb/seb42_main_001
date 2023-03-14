package com.codestates.server_001_withskey.domain.tag.repository;

import com.codestates.server_001_withskey.domain.tag.entity.TagBoard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagBoardRepository extends JpaRepository<TagBoard, Long> {

}
