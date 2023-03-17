package com.codestates.server_001_withskey.domain.tag.dto;

import com.codestates.server_001_withskey.domain.board.dto.BoardDto;
import com.codestates.server_001_withskey.domain.drink.dto.DrinkDto;
import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import com.codestates.server_001_withskey.domain.image.dto.ImageDto;
import com.codestates.server_001_withskey.domain.tag.dto.TagBoardDto.Response;
import java.time.LocalDateTime;
import java.util.List;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
        private List<DrinkDto.Response> drink;
    }

    @Getter
    @Setter
    public static class Info{
        private long tagId;
        private String tagName;
    }

}
