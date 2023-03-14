package com.codestates.server_001_withskey.domain.image.dto;

import lombok.*;

import java.util.List;

public class ImageDto {
    @Data
    @NoArgsConstructor
    public static class Post{
        private long imageId;
        private String boardImageUrl;
    }

    @Data
    @NoArgsConstructor
    public static class Patch{
        private long imageId;
        private String boardImageUrl;
    }

    @Data
    @NoArgsConstructor
    public static class Response{
        private long imageId;
        private String imageUrl;
    }

}
