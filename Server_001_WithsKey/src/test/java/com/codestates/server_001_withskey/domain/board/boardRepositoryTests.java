package com.codestates.server_001_withskey.domain.board;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.board.repository.BoardRepository;
import java.util.stream.IntStream;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class boardRepositoryTests {
    @Autowired
    private BoardRepository repository;

    @Test
    public void insertTest(){
        IntStream.rangeClosed(1,10).forEach(i->{
            Board board = Board.builder()
                .content("test board "+i)
                .build();
            repository.save(board);
        });
    }

}
