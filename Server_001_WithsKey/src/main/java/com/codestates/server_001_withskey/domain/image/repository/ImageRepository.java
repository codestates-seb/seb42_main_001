package com.codestates.server_001_withskey.domain.image.repository;

import com.codestates.server_001_withskey.domain.image.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {
}
