package com.codestates.server_001_withskey.domain.board.dto;

import java.time.LocalDateTime;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
public class BoardDto {
    @Getter
    @Setter
//    @Builder
    @NoArgsConstructor
    public static class Post{
        private long boardId;
        private String boardTitle;
        private String content;
//        private String boardImageUrl;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Patch{
        private long boardId;
        private String boardTitle;
        private String content;
    }

    @Getter
    @Setter

    @NoArgsConstructor
    public static class Response{
        private long boardId;
        private String boardTitle;
        private String content;
//        private String boardImageUrl;

    }
}
