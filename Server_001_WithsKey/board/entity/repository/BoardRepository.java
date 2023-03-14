package com.codestates.server_001_withskey.domain.board.repository;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Long> {

}
