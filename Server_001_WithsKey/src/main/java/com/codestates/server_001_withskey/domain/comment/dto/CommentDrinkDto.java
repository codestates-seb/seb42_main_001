package com.codestates.server_001_withskey.domain.comment.dto;

import lombok.*;

import java.time.LocalDateTime;

public class CommentDrinkDto {

    @Getter
    @Setter
    public static class Post{
        private long drinkId;
        private String commentContent;
    }

    @Getter
    @Setter
    public static class Patch{
        private long commentDrinkId;
        private String commentContent;
    }

    @Getter
    @Setter
    public static class Response{
        private long commentId;
        private long memberId;
        private String displayName;
        private String commentContent;
        private LocalDateTime createAt;
    }

    @Getter
    @Setter
    public static class MyPage{
        private long drinkId;
        private long commentId;
        private String commentContent;
        private String drinkName;
    }
}
