package com.codestates.server_001_withskey.domain.tag.repository;

import com.codestates.server_001_withskey.domain.tag.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Long> {

}
