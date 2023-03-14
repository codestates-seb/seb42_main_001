package com.codestates.server_001_withskey.domain.board.controller;

import com.codestates.server_001_withskey.commondto.MultiResponseDto;
import com.codestates.server_001_withskey.commondto.SingleResponseDto;
import com.codestates.server_001_withskey.domain.board.dto.BoardDto;
import com.codestates.server_001_withskey.domain.board.entity.Board;

import java.util.List;
import javax.validation.Valid;
import javax.validation.constraints.Positive;

import com.codestates.server_001_withskey.domain.board.mapper.BoardMapper;
import com.codestates.server_001_withskey.domain.board.service.BoardService;
import com.codestates.server_001_withskey.domain.image.dto.ImageDto;
import com.codestates.server_001_withskey.domain.image.service.ImageService;
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
    private final ImageService imageService;

    // 등록
    @PostMapping
    public ResponseEntity createBoard(@Valid @RequestBody BoardDto.Post postBoard) {
        Board board = mapper.PostDtoToBoard(postBoard);
        Board result = boardService.createBoard(board);
        imageService.saveImage(result, postBoard.getImages());

        // 결과 반환은 변동사항 있을 수 있음.
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    // 수정
    @PatchMapping("/{board-id}")
    public ResponseEntity updateBoard(@PathVariable("board-id") long boardId,
                                      @RequestBody BoardDto.Patch patch){
        patch.setBoardId(boardId);
        //TODO mapper 작성


        Board board = boardService.updateBoard(patch);

        return new ResponseEntity<>(mapper.PatchDtoToBoard(patch), HttpStatus.OK);
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
        BoardDto.Response response = mapper.BoardToDto(board);

        //TODO 이미지 url 매핑이 빠져있음.
        response.setImages(imageService.findByBoard(board));

        return new ResponseEntity(response, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getBoards(@Positive @RequestParam int page,
                                    @Positive @RequestParam int size) {
        Page<Board> boardsPage = boardService.findBoards(page - 1, size);
        List<Board> boards = boardsPage.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(mapper.BoardsToDtos(boards), boardsPage),
            HttpStatus.OK);
    }

}
