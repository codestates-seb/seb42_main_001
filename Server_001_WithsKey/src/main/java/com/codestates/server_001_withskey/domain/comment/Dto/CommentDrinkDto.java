package com.codestates.server_001_withskey.domain.comment.Dto;

import lombok.*;

import java.time.LocalDateTime;

public class CommentDrinkDto {

    @Getter
    @Setter
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Response{
        private LocalDateTime createdAt;
        private long commentId;
        private long memberId;
        private String displayName;
        private String profileImageUrl;

    }
}
