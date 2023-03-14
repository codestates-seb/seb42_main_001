package com.codestates.server_001_withskey.domain.drink.Repository;

import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DrinkRepository extends JpaRepository<Drink, Long> {

}
