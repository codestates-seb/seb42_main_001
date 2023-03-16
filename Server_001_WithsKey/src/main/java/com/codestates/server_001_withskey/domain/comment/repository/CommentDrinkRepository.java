package com.codestates.server_001_withskey.domain.comment.repository;

import com.codestates.server_001_withskey.domain.comment.entity.CommentDrink;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentDrinkRepository extends JpaRepository<CommentDrink, Long> {
}
