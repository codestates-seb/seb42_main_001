package com.codestates.server_001_withskey.domain.drink.repository;

import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface DrinkRepository extends JpaRepository<Drink, Long> {
    // 제목으로 Drink 검색 기능.
    @Query(value = "SELECT * FROM drink WHERE TITLE LIKE CONCAT('%', :q ,'%')", nativeQuery = true)
    public Page<Drink> findAllByTitle(@Param("q")String q, Pageable pageable);
}
