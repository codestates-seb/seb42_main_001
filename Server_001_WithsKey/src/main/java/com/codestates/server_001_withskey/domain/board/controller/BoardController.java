package com.codestates.server_001_withskey.domain.board.controller;

import com.codestates.server_001_withskey.commondto.MultiResponseDto;
import com.codestates.server_001_withskey.domain.board.dto.BoardDto;
import com.codestates.server_001_withskey.domain.board.entity.Board;

import java.util.List;
import javax.validation.Valid;
import javax.validation.constraints.Positive;

import com.codestates.server_001_withskey.domain.board.mapper.BoardMapper;
import com.codestates.server_001_withskey.domain.board.service.BoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Validated
@Slf4j
@RequestMapping("/boards")
public class BoardController {
    private final BoardService boardService;
    private final BoardMapper mapper;

    // 등록
    @PostMapping
    public ResponseEntity createBoard(@Valid @RequestBody BoardDto.Post postBoard) {
        Board board = boardService.createBoard(mapper.PostDtoToBoard(postBoard));
        return new ResponseEntity<>(board, HttpStatus.CREATED);

    }

    // 수정
    @PatchMapping("/{board-id}")
    public ResponseEntity updateBoard(@PathVariable("board-id") long boardId, @RequestBody BoardDto.Patch patch){
        patch.setBoardId(boardId);
        Board board = boardService.updateBoard(mapper.PatchDtoToBoard(patch));

        return new ResponseEntity<>(mapper.PatchDtoToBoard(patch), HttpStatus.OK);
    }


    // 삭제
    @DeleteMapping("/{board-id}")
    public ResponseEntity deleteBoard(@PathVariable("board-id") @Positive long boardId){
        this.boardService.deleteBoard(boardId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // 조회
    @GetMapping
    public ResponseEntity getBoards(@Positive @RequestParam int page,
        @Positive @RequestParam int size) {
        Page<Board> boardsPage = boardService.findBoards(page - 1, size);
        List<Board> boards = boardsPage.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(mapper.BoardsToDto(boards), boardsPage),
            HttpStatus.OK);
    }

}
