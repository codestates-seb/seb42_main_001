package com.codestates.server_001_withskey.domain.board.service;

import com.codestates.server_001_withskey.domain.board.dto.BoardDto;
import com.codestates.server_001_withskey.domain.board.dto.PageRequestDto;
import com.codestates.server_001_withskey.domain.board.dto.PageResultDto;
import com.codestates.server_001_withskey.domain.board.entity.Board;

public interface BoardService {

    Long createBoard(BoardDto dto);

    BoardDto readBoard(Long boardId);

    void updateBoard(BoardDto dto);

    void deleteBoard(Long boardId);

    PageResultDto<BoardDto, Board> getList(PageRequestDto requestDto);

    /*mapper 대체*/
    default Board dtoToEntity(BoardDto dto){
        Board entity = Board.builder()
            .boardId(dto.getBoardId())
            .content(dto.getContent())
            .boardImageUrl(dto.getBoardImageUrl())
            .build();

        return entity;
    }

    default BoardDto entityToDto(Board entity){
        BoardDto dto = BoardDto.builder()
            .boardId(entity.getBoardId())
            .content(entity.getContent())
            .boardImageUrl(entity.getBoardImageUrl())
            .build();

        return dto;
    }

}
