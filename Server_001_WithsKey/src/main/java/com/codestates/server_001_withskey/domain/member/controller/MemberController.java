package com.codestates.server_001_withskey.domain.member.controller;
//
//import com.codestates.server_001_withskey.domain.member.mapper.MemberMapper;
import com.codestates.server_001_withskey.domain.board.dto.BoardDto;
import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.board.mapper.BoardMapperImpl;
import com.codestates.server_001_withskey.domain.comment.dto.CommentBoardDto;
import com.codestates.server_001_withskey.domain.comment.entity.CommentBoard;
import com.codestates.server_001_withskey.domain.comment.mapper.CommentBoardMapper;
import com.codestates.server_001_withskey.domain.comment.service.CommentBoardService;
import com.codestates.server_001_withskey.domain.like.service.LikeBoardService;
import com.codestates.server_001_withskey.domain.member.dto.MemberDto;
import com.codestates.server_001_withskey.domain.member.entity.Member;
import com.codestates.server_001_withskey.domain.member.mapper.MemberMapperImpl;
import com.codestates.server_001_withskey.domain.member.service.MemberService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@Validated
@RequestMapping("/members")
@RequiredArgsConstructor
public class  MemberController {
    @Getter
    private final String url = "http://localhost:8080/members/";

    private final MemberMapperImpl memberMapper;

    private final MemberService memberService;

    private final BoardMapperImpl boardMapper;
    private final CommentBoardService commentBoardService;
    private final CommentBoardMapper commentBoardMapper;
    private final LikeBoardService likeBoardService;


    @PatchMapping
    public ResponseEntity patchMember(@RequestBody @Valid MemberDto.Patch patchMember) throws Exception{
        Member member = memberMapper.memberDtoPatchToMember(patchMember);
        Long memberId = Long.valueOf(String.valueOf(SecurityContextHolder.getContext().getAuthentication().getPrincipal()));

        member.setMemberId(memberId);
        Member updatedMember = memberService.updateMember(member);
        MemberDto.Response response = memberMapper.memberToMemberDtoResponse(updatedMember);
        response.setUrl(url+memberId);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/mypage")
    public ResponseEntity getMyPage() {
        Long memberId = Long.valueOf(String.valueOf(SecurityContextHolder.getContext().getAuthentication().getPrincipal()));
        Member findMember = memberService.findMemberById(memberId);

        MemberDto.MyPage myPage = memberMapper.memberToMyPage(findMember);

        //멤버가 작성한 board List -> Response로 바꿔서 set
        List<BoardDto.Response> myBoard = boardMapper.BoardsToDtos(findMember.getBoards());
        myPage.setWriteBoards(myBoard);

        //멤버가 작성한 CommentList -> MyPage로 바꿔서 set
        List<CommentBoard> comments = commentBoardService.findAllByMemberId(findMember.getMemberId());
        List<CommentBoardDto.MyPage> myComment = commentBoardMapper.commentsToMyPageComments(comments);
        myPage.setWriteComments(myComment);

        //TODO 멤버가 좋아요한 Board 리스트
        List<Board> likeList = likeBoardService.getLikeBoardsByMemberId(findMember.getMemberId());
        List<BoardDto.Response> myLikeBoard = boardMapper.BoardsToDtos(likeList);
        myPage.setLikeBoards(myLikeBoard);

        myPage.setUrl(url + memberId);
        return new ResponseEntity(myPage, HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity deleteMember() {
        Long memberId = Long.valueOf(String.valueOf(SecurityContextHolder.getContext().getAuthentication().getPrincipal()));
        memberService.deletedMember(memberId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }


}
