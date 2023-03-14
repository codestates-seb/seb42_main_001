package com.codestates.server_001_withskey.domain.board.service;

import com.codestates.server_001_withskey.domain.board.dto.BoardDto;
import com.codestates.server_001_withskey.commondto.PageRequestDto;
import com.codestates.server_001_withskey.commondto.PageResultDto;
import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.board.repository.BoardRepository;
import java.util.function.Function;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@Log4j2
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService{
    private final BoardRepository repository;

    /*CRUD*/
    // create
    public Long createBoard(BoardDto dto){

        log.info(dto);

        Board entity = dtoToEntity(dto);
        log.info(entity);

        repository.save(entity);

        return entity.getBoardId();
    }

    // read
    @Override
    public PageResultDto<BoardDto, Board> getList(PageRequestDto requestDto) {
        Pageable pageable = requestDto.getPageable(Sort.by("boardId").descending());

        Page<Board> result = repository.findAll(pageable);

        Function<Board, BoardDto> fn = (entity -> entityToDto(entity));
        // entityToDto(BoardDto.class) result : Board entity
        // Page<Entity>와 Function 전달해 객체들을 DTO 리스트로 반환 및 페이지 처리에 필요한 값 생성

        return new PageResultDto<>(result, fn);
    }

    @Override
    public BoardDto readBoard(Long boardId) {
        return null;
    }

    // update
    @Override
    public void updateBoard(BoardDto dto) {

    }

    // delete
    @Override
    public void deleteBoard(Long boardId) {

    }




}
