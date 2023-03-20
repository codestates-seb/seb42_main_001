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
import com.codestates.server_001_withskey.global.security.Jwt.JwtTokenizer;
import com.codestates.server_001_withskey.global.security.Redis.TokenRedisRepository;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.List;
import java.util.concurrent.TimeUnit;

@RestController
@Validated
@RequestMapping("/members")
@RequiredArgsConstructor
public class  MemberController {

    private final MemberMapperImpl memberMapper;

    private final MemberService memberService;

    private final BoardMapperImpl boardMapper;
    private final CommentBoardService commentBoardService;
    private final CommentBoardMapper commentBoardMapper;
    private final LikeBoardService likeBoardService;

    @Autowired
    private TokenRedisRepository tokenRedisRepository;
    @Autowired
    private JwtTokenizer jwtTokenizer;

    @GetMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request) {
        String accessTokenHeader = request.getHeader("Authorization");
        String refreshTokenHeader = request.getHeader("Refresh");
        if (accessTokenHeader != null && accessTokenHeader.startsWith("Bearer ")) {
            String accessToken = accessTokenHeader.replace("Bearer ","");
            int accessTokenDuration = jwtTokenizer.getAccessTokenExpirationMinutes();
            tokenRedisRepository.saveInvalidatedAccessToken(accessToken, accessTokenDuration, TimeUnit.MINUTES);
        }
        if (refreshTokenHeader != null) {
            String refreshToken = refreshTokenHeader;
            int refreshTokenDuration = jwtTokenizer.getRefreshTokenExpirationMinutes();
            tokenRedisRepository.saveInvalidatedRefreshToken(refreshToken, refreshTokenDuration, TimeUnit.MINUTES);
        }
        return ResponseEntity.ok("Logout successful");
    }

    @PatchMapping
    public ResponseEntity patchMember(@RequestBody @Valid MemberDto.Patch patchMember) throws Exception{
        Member member = memberMapper.memberDtoPatchToMember(patchMember);
        Long memberId = Long.valueOf(String.valueOf(SecurityContextHolder.getContext().getAuthentication().getPrincipal()));

        member.setMemberId(memberId);
        Member updatedMember = memberService.updateMember(member);
        MemberDto.Response response = memberMapper.memberToMemberDtoResponse(updatedMember);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/mypage")
    @Transactional
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

        return new ResponseEntity(myPage, HttpStatus.OK);
    }

    @DeleteMapping
    @Transactional
    public ResponseEntity deleteMember() {
        Long memberId = Long.valueOf(String.valueOf(SecurityContextHolder.getContext().getAuthentication().getPrincipal()));
        memberService.deletedMember(memberId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }


}
