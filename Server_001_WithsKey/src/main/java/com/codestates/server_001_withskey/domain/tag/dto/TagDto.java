package com.codestates.server_001_withskey.domain.tag.dto;

import com.codestates.server_001_withskey.domain.board.dto.BoardDto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

public class TagDto {
    @Getter
    @Setter
    @NoArgsConstructor
    public static class Post{
        private long tagId;
        private String tagName;
        private String tagInfo;

        private List<BoardDto.Post> board;
//        private List<DrinkDto.Post> drinks;

    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response{
        private long tagId;
        private String tagName;
        private String tagInfo;

        private List<BoardDto.Response> board;
    }

    @Getter
    @Setter
    public static class Info{
        private long tagId;
        private String tagName;
    }
}
