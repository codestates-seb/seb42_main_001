package com.codestates.server_001_withskey.domain.like.controller;

import com.codestates.server_001_withskey.domain.like.entity.LikeBoard;
import com.codestates.server_001_withskey.domain.like.service.LikeBoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@Slf4j
@RestController
@RequestMapping("/likes/boards")
public class LikeBoardController {
    private final LikeBoardService likeBoardService;

    @PostMapping("/{board-id}")
    public ResponseEntity upLike(@PathVariable(name = "board-id") long boardId){
        long memberId = Long.valueOf(String.valueOf(SecurityContextHolder.getContext().getAuthentication().getPrincipal()));

        likeBoardService.updateLike(memberId, boardId);

        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{board-id}")
    public ResponseEntity deleteLike(@PathVariable(name = "board-id") long boardId){
        long memberId = Long.valueOf(String.valueOf(SecurityContextHolder.getContext().getAuthentication().getPrincipal()));

        likeBoardService.deleteLike(memberId, boardId);

        return ResponseEntity.noContent().build();
    }


}
