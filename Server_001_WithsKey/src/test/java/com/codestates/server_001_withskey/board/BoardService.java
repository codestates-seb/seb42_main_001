package com.codestates.server_001_withskey.board;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.board.repository.BoardRepository;
import java.util.Arrays;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class BoardService {
    @Autowired
    private BoardRepository repository;

    @Test
    public void insertBoard(){
        Board board = Board.builder()
            .boardTitle("test123")
            .content("test123456")
            .build();

        repository.save(board);
    }
//
//    @Test
//    public void testTagBoard(){
//        List<Board> result = repository.findBoardByTagBoard(1L);
//
//        for(Board arr : result ){
//            System.out.println(Arrays.toString(new Board[]{arr}));
//        }
//    }

}
//List<Tag> result = repository.findTagWithBoard(1L);
//
//        for(Tag arr:result){
//            System.out.println(Arrays.toString(new Tag[]{arr}));
//        }