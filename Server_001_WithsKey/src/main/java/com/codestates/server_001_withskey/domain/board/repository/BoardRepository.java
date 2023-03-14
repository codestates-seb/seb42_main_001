package com.codestates.server_001_withskey.domain.board.repository;


import com.codestates.server_001_withskey.domain.board.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Long> {
    boolean existsById(Long boardId);


//    @Query("SELECT b FROM Board b WHERE b.title LIKE %:keyword% OR b.problemContent LIKE %:keyword%")
//    Page<Board> findByKeyword(@Param("keyword") String keyword, Pageable pageable);
}


