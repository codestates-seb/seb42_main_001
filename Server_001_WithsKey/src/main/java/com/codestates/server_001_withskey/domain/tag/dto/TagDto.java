package com.codestates.server_001_withskey.domain.tag.dto;

import lombok.Data;

public class TagDto {

    @Data
    public static class Post{
        private long tagId;
        private String tagName;
    }
}
