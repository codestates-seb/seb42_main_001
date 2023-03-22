package com.codestates.server_001_withskey.domain.like.controller;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.like.entity.LikeBoard;
import com.codestates.server_001_withskey.domain.like.repository.LikeBoardRepository;
import com.codestates.server_001_withskey.domain.like.service.LikeBoardService;
import com.codestates.server_001_withskey.domain.member.entity.Member;
import com.codestates.server_001_withskey.domain.member.service.MemberService;
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


    @PostMapping("/{board-id}")
    public ResponseEntity upLike(@PathVariable(name = "board-id") long boardId){
        long memberId = Long.valueOf(String.valueOf(SecurityContextHolder.getContext().getAuthentication().getPrincipal()));
        likeBoardService.updateLike(memberId, boardId);
        return ResponseEntity.ok().build();
    }
    // 좋아요 삭제에 접근 권한을 걸어야합니다.
    // 사용자의 접근 권한을 확인.
    // how ? getAuth


    // 1. 토큰에 담긴 memberId 확보.
    // 2. boardId를 기준으로 board를 가져온다.
    // 3. 가져온 board에서 member를 확보한다.
    // 4. 확보한 memeber 객체에서 memberId를 가져온다.

    // 1번 토큰 memberId를 가져와서 boardId로 불러온 board의 memberId를 비교.

    // 5. 1번과 4번을 비교해서 동일하면 삭제, 다르면 거절.

    @DeleteMapping("/{board-id}")
    public ResponseEntity deleteLike(@PathVariable(name = "board-id") long boardId){

        // 토큰에 담긴 memberId
        long memberId = Long.valueOf(String.valueOf(SecurityContextHolder.getContext().getAuthentication().getPrincipal()));

        // LikeBoard의 memberId를 구함.
        LikeBoard foundLikeBoard = likeBoardService.findLikeBoard(boardId);

        if (memberId != foundLikeBoard.getMemberId()) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("접근 권한이 없습니다");
        } else {
            likeBoardService.deleteLike(memberId, boardId);
            return ResponseEntity.noContent().build();
        }
    }
}
