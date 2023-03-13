package com.codestates.server_001_withskey.domain.board;

import com.codestates.server_001_withskey.domain.board.dto.BoardDto;
import com.codestates.server_001_withskey.domain.board.dto.PageRequestDto;
import com.codestates.server_001_withskey.domain.board.dto.PageResultDto;
import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.board.entity.repository.BoardRepository;
import com.codestates.server_001_withskey.domain.board.service.BoardServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class boardServiceTests {
    @Autowired
    private BoardServiceImpl service;

    @Test
    public void createTests(){
        BoardDto dto = BoardDto.builder()
            .content("Board Test")
            .boardImageUrl("url....")
            .build();

        System.out.println(service.createBoard(dto));
    }

    @Test
    public void createSaveTests(){
        BoardDto dto = BoardDto.builder()
            .boardId(1L)
            .content("Board Test")
            .boardImageUrl("url....")
            .build();

        service.createBoard(dto);
    }

    @Test
    public void testList(){
        PageRequestDto pageRequestDto = PageRequestDto.builder().page(1).size(10).build();

        PageResultDto<BoardDto, Board> resultDto = service.getList(pageRequestDto);

        for(BoardDto boardDto:resultDto.getDtoList()){
            System.out.println(boardDto);
        }
    }
}