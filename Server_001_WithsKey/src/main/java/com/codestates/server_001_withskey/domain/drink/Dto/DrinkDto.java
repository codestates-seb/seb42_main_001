package com.codestates.server_001_withskey.domain.drink.Dto;

import com.codestates.server_001_withskey.domain.comment.dto.CommentDrinkDto;
import com.codestates.server_001_withskey.domain.snack.entity.Snack;
import com.codestates.server_001_withskey.domain.tag.dto.TagDto;
import com.codestates.server_001_withskey.domain.tag.entity.TagDrink;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

public class DrinkDto {

        @Getter
        @Setter
        @Builder
        @AllArgsConstructor
        @NoArgsConstructor
        public static class Response {
            private long drinkId;
            private String drinkName;
            private String priceRank;
            private int drinkAbv;
            private String drinkImageUrl;
            private LocalDateTime createAt;

            private List<TagDto.Info> tags;

            // List<TastingNote>
            // List<tag>
            // List<Snacks>
        }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ResponseDetail extends Response {
        private List<CommentDrinkDto.Response> commentDrinks;

        private int likeCount;

        private List<Snack> snacks;
    }
}

