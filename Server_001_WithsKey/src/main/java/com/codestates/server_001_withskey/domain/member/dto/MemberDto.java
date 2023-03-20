package com.codestates.server_001_withskey.domain.member.dto;

//        @Email
//        @NotBlank(message = "email must be not blank")
//        private String email;
//
//        @NotBlank(message = "Name must be not blank")
//        private String name;
//
//        @Pattern(regexp = "^010-\\d{3,4}-\\d{4}$")
//        private String phone;

import com.codestates.server_001_withskey.domain.board.dto.BoardDto;
import com.codestates.server_001_withskey.domain.comment.dto.CommentBoardDto;
import com.codestates.server_001_withskey.domain.comment.dto.CommentDrinkDto;
import com.codestates.server_001_withskey.domain.drink.dto.DrinkDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

public class MemberDto {

    @Getter
    @Setter
    public static class Patch {
        private long memberId;
        private String phoneNumber;
        private String aboutMe;
        private String displayName;
        private String profilePicture;
    }
    @Getter
    @Setter
    public static class Response {
        long memberId;
        private String phoneNumber;
        private String displayName;
        private String profilePicture;
        private String url;
    }
    @Getter
    @Setter
    public static class MyPage{
        private long memberId;
        private String displayName;
        private String profilePicture;
        private String aboutMe;
        //좋아요 한 Boards
        private List<BoardDto.Response> likeBoards;
        //TODO 좋아요 한 Drinks;
        private List<DrinkDto.Short> likeDrinks;
        //작성한 Boards
        private List<BoardDto.Response> writeBoards;

        //작성한 BoardComment
        private List<CommentBoardDto.MyPage> writeBoardComments;
        private List<CommentDrinkDto.MyPage> writeDrinkComments;
        private String url;
    }

    //1. Boards -> BoardService Tag를 기준으로 Board를 찾아줘 + BoardRepository
    //2. Drinks -> DrinkService Tag를 기준으로 Drnik를 찾아줘 + DrinkRepository
    //3. TagService

}
