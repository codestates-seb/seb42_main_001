package com.codestates.server_001_withskey.domain.comment.controller;


import com.codestates.server_001_withskey.domain.comment.dto.CommentBoardDto;
import com.codestates.server_001_withskey.domain.comment.dto.CommentDrinkDto;
import com.codestates.server_001_withskey.domain.comment.entity.CommentDrink;
import com.codestates.server_001_withskey.domain.comment.mapper.CommentDrinkMapper;
import com.codestates.server_001_withskey.domain.comment.service.CommentDrinkService;
import com.codestates.server_001_withskey.domain.member.entity.Member;
import com.codestates.server_001_withskey.domain.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;

@RestController
@RequestMapping("/comments/drinks")
@RequiredArgsConstructor

public class CommentDrinkController {
    private final MemberService memberService;
    private final CommentDrinkMapper mapper;
    private final CommentDrinkService commentDrinkService;

    @PostMapping
    @Transactional
    public ResponseEntity postComment(@RequestBody CommentDrinkDto.Post postComment){
        long memberId = Long.valueOf(String.valueOf(SecurityContextHolder.getContext().getAuthentication().getPrincipal()));
        Member member = memberService.findMemberById(memberId);

        CommentDrink commentDrink = mapper.dtoToComment(postComment, member);
        commentDrinkService.saveCommentDrink(commentDrink);

        return ResponseEntity.ok().build();
    }

    @PatchMapping("/{commentDrinkId}")
    @Transactional
    public ResponseEntity patchComment(@PathVariable long commentDrinkId,
                                       @RequestBody CommentDrinkDto.Patch patch){

        patch.setCommentDrinkId(commentDrinkId);
        commentDrinkService.updateComment(patch);

        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{commentBoardId}")
    @Transactional
    public ResponseEntity deleteComment(@PathVariable long commentBoardId){
        commentDrinkService.deleteComment(commentBoardId);
        return ResponseEntity.noContent().build();
    }
}
