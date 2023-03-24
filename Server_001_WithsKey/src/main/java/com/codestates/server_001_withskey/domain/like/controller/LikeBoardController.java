package com.codestates.server_001_withskey.domain.like.controller;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.board.service.BoardService;
import com.codestates.server_001_withskey.domain.like.entity.LikeBoard;
import com.codestates.server_001_withskey.domain.like.repository.LikeBoardRepository;
import com.codestates.server_001_withskey.domain.like.service.LikeBoardService;
import com.codestates.server_001_withskey.domain.member.entity.Member;
import com.codestates.server_001_withskey.domain.member.service.MemberService;
import com.codestates.server_001_withskey.global.advice.BusinessLogicException;
import com.codestates.server_001_withskey.global.advice.ExceptionCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Slf4j
@RestController
@RequestMapping("/likes/boards")
public class LikeBoardController {
    private final LikeBoardService likeBoardService;
    private final BoardService boardService;


    @PostMapping("/{board-id}")
    public ResponseEntity upLike(@PathVariable(name = "board-id") long boardId){
        long memberId = Long.valueOf(String.valueOf(SecurityContextHolder.getContext().getAuthentication().getPrincipal()));
        likeBoardService.updateLike(memberId, boardId);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{board-id}")
    public ResponseEntity deleteLike(@PathVariable(name = "board-id") long boardId){
        long memberId = Long.valueOf(String.valueOf(SecurityContextHolder.getContext().getAuthentication().getPrincipal()));
        Board board = boardService.findVerifiedBoard(boardId);
        likeBoardService.findVerifyCanLike(memberId,board);
        likeBoardService.deleteLike(memberId,boardId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
