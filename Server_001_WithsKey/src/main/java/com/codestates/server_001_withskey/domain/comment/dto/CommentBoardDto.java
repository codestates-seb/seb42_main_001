package com.codestates.server_001_withskey.domain.comment.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

public class CommentBoardDto {
    @Getter
    @Setter
    public static class Post{
        private long boardId;
        private String commentContent;
    }

    @Getter
    @Setter
    public static class Patch{
        private long commentBoardId;
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
        private long commentId;
        private String commentContent;
        private long boardId;
        private String boardTitle;
    }
}
