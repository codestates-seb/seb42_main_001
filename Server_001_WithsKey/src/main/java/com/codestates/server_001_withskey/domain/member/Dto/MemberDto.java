package com.codestates.server_001_withskey.domain.member.Dto;

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

        //작성한 Boards
        private List<BoardDto.Response> writeBoards;

        //작성한 Comment
        private List<CommentBoardDto.MyPage> writeComments;
        private String url;
    }
}
