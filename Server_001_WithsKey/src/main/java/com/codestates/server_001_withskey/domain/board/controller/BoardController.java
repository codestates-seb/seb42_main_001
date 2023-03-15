package com.codestates.server_001_withskey.domain.board.controller;

import com.codestates.server_001_withskey.domain.board.dto.BoardDto;
import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.board.mapper.BoardMapperImpl;
import com.codestates.server_001_withskey.domain.board.service.BoardService;
import com.codestates.server_001_withskey.domain.image.service.ImageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Validated
@Slf4j
@RequestMapping("/boards")
public class BoardController {
    private final BoardService boardService;
    private final BoardMapperImpl mapper;
    private final ImageService imageService;

    // 등록
    @PostMapping
    public ResponseEntity createBoard(@Valid @RequestBody BoardDto.Post postBoard) {
        Board board = mapper.PostDtoToBoard(postBoard);
        Board result = boardService.createBoard(board);
        imageService.saveImage(result, postBoard.getBoardImageUrl());

        // 결과 반환은 변동사항 있을 수 있음.
        return new ResponseEntity(result.getBoardTitle(), HttpStatus.CREATED);
    }

    // 수정
    @PatchMapping("/{board-id}")
    public ResponseEntity updateBoard(@PathVariable("board-id") long boardId,
                                      @RequestBody BoardDto.Patch patch){
        patch.setBoardId(boardId);
        Board board = boardService.updateBoard(patch);
        //TODO Tag 수정 기능


        return new ResponseEntity<>(board.getBoardTitle(), HttpStatus.OK);
    }

    // 삭제
    @DeleteMapping("/{board-id}")
    public ResponseEntity deleteBoard(@PathVariable("board-id") @Positive long boardId){
        this.boardService.deleteBoard(boardId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // 조회
    @GetMapping("/{board-id}")
    public ResponseEntity getBoard(@PathVariable("board-id") long boardId){
        Board board = boardService.findVerifiedBoard(boardId);
        BoardDto.ResponseDetail response = mapper.BoardToDetail(board);

        // TODO 이미지 가져오기 : 리팩토링 필요
        response.setBoardImages(imageService.findByBoard(board));
        //Recommand Board 가져오기
        List<Board> recommandBoard = boardService.findBoardsByTag(board);
        response.setRecommandBoards(mapper.boardsToRecommands(recommandBoard));
        //TODO Comment 가져오기
        response.setComments(null);

        return new ResponseEntity(response, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getBoards() {
        List<Board> boards = boardService.findBoards();
        List<BoardDto.Response> responses = mapper.BoardsToDtos(boards);
        return new ResponseEntity<>(responses, HttpStatus.OK);
    }

}
