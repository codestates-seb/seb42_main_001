package com.codestates.server_001_withskey.domain.member.controller;
//
//import com.codestates.server_001_withskey.domain.member.mapper.MemberMapper;
import com.codestates.server_001_withskey.domain.board.dto.BoardDto;
import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.board.mapper.BoardMapperImpl;
import com.codestates.server_001_withskey.domain.comment.dto.CommentBoardDto;
import com.codestates.server_001_withskey.domain.comment.dto.CommentDrinkDto;
import com.codestates.server_001_withskey.domain.comment.entity.CommentBoard;
import com.codestates.server_001_withskey.domain.comment.entity.CommentDrink;
import com.codestates.server_001_withskey.domain.comment.mapper.CommentBoardMapper;
import com.codestates.server_001_withskey.domain.comment.mapper.CommentDrinkMapper;
import com.codestates.server_001_withskey.domain.comment.service.CommentBoardService;
import com.codestates.server_001_withskey.domain.comment.service.CommentDrinkService;
import com.codestates.server_001_withskey.domain.drink.dto.DrinkDto;
import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import com.codestates.server_001_withskey.domain.drink.mapper.DrinkMapper;
import com.codestates.server_001_withskey.domain.like.service.LikeBoardService;
import com.codestates.server_001_withskey.domain.like.service.LikeDrinkService;
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

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import javax.validation.Valid;
import java.io.IOException;
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
    private final CommentDrinkService commentDrinkService;
    private final CommentDrinkMapper commentDrinkMapper;
    private final LikeDrinkService likeDrinkService;
    private final DrinkMapper drinkMapper;


    @GetMapping("/login")
    public ResponseEntity login(HttpServletResponse response) throws IOException {
        response.sendRedirect("http://ec2-52-79-163-159.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google");
        return new ResponseEntity(HttpStatus.OK);
    }
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

        //멤버가 작성한 게시글 CommentList -> MyPage로 바꿔서 set
        List<CommentBoard> comments = commentBoardService.findAllByMemberId(findMember.getMemberId());
        List<CommentBoardDto.MyPage> myComment = commentBoardMapper.commentsToMyPageComments(comments);
        myPage.setWriteBoardComments(myComment);

        //멤버가 작성한 술 ComentList
        List<CommentDrink> commentDrinksList = commentDrinkService.findAllByMemberId(findMember.getMemberId());
        List<CommentDrinkDto.MyPage> myDrinkComment = commentDrinkMapper.commentsToMyPages(commentDrinksList);
        myPage.setWriteDrinkComments(myDrinkComment);

        //멤버가 좋아요한 Board 리스트
        List<Board> likeList = likeBoardService.getLikeBoardsByMemberId(findMember.getMemberId());
        List<BoardDto.Response> myLikeBoard = boardMapper.BoardsToDtos(likeList);
        myPage.setLikeBoards(myLikeBoard);

        //멤버가 좋아요한 Drink 리스트
        List<Drink> drinkList = likeDrinkService.getLikeDrinksByMemberId(findMember.getMemberId());
        List<DrinkDto.Short> myLikeDrink = drinkMapper.drinksToShorts(drinkList);
        myPage.setLikeDrinks(myLikeDrink);

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
