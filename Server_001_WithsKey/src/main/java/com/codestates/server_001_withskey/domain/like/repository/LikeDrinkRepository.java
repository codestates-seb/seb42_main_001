package com.codestates.server_001_withskey.domain.like.repository;

import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import com.codestates.server_001_withskey.domain.like.entity.LikeBoard;
import com.codestates.server_001_withskey.domain.like.entity.LikeDrink;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface LikeDrinkRepository extends JpaRepository<LikeDrink, Long> {

    Optional<LikeDrink> findLikeDrinkByMemberIdAndDrink (long memberId, Drink drink);
    List<LikeDrink> findAllByMemberId(long memberId);
}
