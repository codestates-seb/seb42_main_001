package com.codestates.server_001_withskey.domain.comment.repository;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.comment.entity.CommentBoard;
import com.codestates.server_001_withskey.domain.comment.entity.CommentDrink;
import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentDrinkRepository extends JpaRepository<CommentDrink, Long> {
    List<CommentDrink> findAllByDrink(Drink drink);
    List<CommentDrink> findAllByMemberId(long memberId);
}
