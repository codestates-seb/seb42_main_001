package com.codestates.server_001_withskey.domain.board.controller;

import com.codestates.server_001_withskey.commondto.MultiResponseDto;
import com.codestates.server_001_withskey.commondto.PageInfo;
import com.codestates.server_001_withskey.domain.board.dto.BoardDto;
import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.board.mapper.BoardMapperImpl;
import com.codestates.server_001_withskey.domain.board.service.BoardService;
import com.codestates.server_001_withskey.domain.comment.mapper.CommentBoardMapper;
import com.codestates.server_001_withskey.domain.comment.entity.CommentBoard;
import com.codestates.server_001_withskey.domain.comment.service.CommentBoardService;
import com.codestates.server_001_withskey.domain.image.service.ImageService;
import com.codestates.server_001_withskey.domain.like.service.LikeBoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;


@RestController
@RequiredArgsConstructor
@Validated
@Slf4j
@RequestMapping("/boards")
public class BoardController {
    private final BoardService boardService;
    private final BoardMapperImpl boardMapper;
    private final ImageService imageService;
    private final CommentBoardService commentService;
    private final CommentBoardMapper commentMapper;
    private final LikeBoardService likeBoardService;

    // 등록
    @PostMapping
    public ResponseEntity createBoard(@Valid @RequestBody BoardDto.Post postBoard) {
        Board board = boardMapper.PostDtoToBoard(postBoard);
        Board result = boardService.createBoard(board);
        imageService.saveImage(result, postBoard.getBoardImageUrl());

        return new ResponseEntity(result.getBoardTitle(), HttpStatus.CREATED);
    }

    // 수정
    @PatchMapping("/{board-id}")
    @Transactional
    public ResponseEntity updateBoard(@PathVariable("board-id") long boardId,
                                      @RequestBody BoardDto.Patch patch){
        patch.setBoardId(boardId);
        Board result = boardService.updateBoard(patch);
        return new ResponseEntity<>(result.getBoardTitle(), HttpStatus.OK);
    }

    // 삭제
    @DeleteMapping("/{board-id}")
    @Transactional
    public ResponseEntity deleteBoard(@PathVariable("board-id") @Positive long boardId){
        this.boardService.deleteBoard(boardId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // 조회
    @GetMapping("/{board-id}")
    @Transactional
    public ResponseEntity getBoard(@PathVariable("board-id") long boardId){
        Board board = boardService.findVerifiedBoard(boardId);
        BoardDto.ResponseDetail response = boardMapper.BoardToDetail(board);

        // 이미지 가져오기 : 리팩토링 필요
        response.setBoardImages(imageService.findByBoard(board));

        //Recommand Board 가져오기
        List<Board> recommandBoard = boardService.findRecommandBoardsByTag(board);
        response.setRecommandBoards(boardMapper.boardsToRecommands(recommandBoard));

        //Comment 가져오기
        List<CommentBoard> commentBoards = commentService.getCommentByBoard(board);
        response.setComments(commentMapper.commentsToResponses(commentBoards));


        return new ResponseEntity(response, HttpStatus.OK);
    }

    @GetMapping
    @Transactional
    public ResponseEntity getBoards(@RequestParam int page,
                                    @RequestParam int size) {

        //TODO 페이지네이션 추가
        Page<Board> boards = boardService.findBoards(page, size);
        List<BoardDto.Response> responses = boardMapper.BoardsToDtos(boards.getContent());
        PageInfo pageInfo = new PageInfo(boards.getNumber()+1, boards.getSize(), boards.getTotalPages(), boards
                .getTotalElements());

        List<BoardDto.Short> likeList = new ArrayList<>();
        // 멤버가 로그인 한 상태라면 좋아요 한 보드 게시글 id, 제목 조회
        try {
            Long memberId = Long.valueOf(String.valueOf(SecurityContextHolder.getContext().getAuthentication().getPrincipal()));
            likeList = likeBoardService.getLikeBoardsByMemberId(memberId)
                        .stream()
                        .map(board -> {
                            BoardDto.Short like = new BoardDto.Short();
                            like.setBoardTitle(board.getBoardTitle());
                            like.setBoardId(board.getBoardId());
                            return like;
                        }).collect(Collectors.toList());
        } catch (Exception e){}



        return new ResponseEntity<>(new MultiResponseDto<>(responses, likeList, pageInfo), HttpStatus.OK);
    }

}
