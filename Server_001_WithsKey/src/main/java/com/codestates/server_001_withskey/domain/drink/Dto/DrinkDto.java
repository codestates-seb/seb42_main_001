package com.codestates.server_001_withskey.domain.drink.Dto;

import com.codestates.server_001_withskey.domain.comment.Dto.CommentDrinkDto;
import lombok.*;

import javax.persistence.Column;
import java.time.LocalDateTime;
import java.util.List;

public class DrinkDto {

        @Getter
        @Setter
        @Builder
        @AllArgsConstructor
        @NoArgsConstructor
        public static class Response {
            @Column(name = "created_at", updatable = false)
            private LocalDateTime createdAt;
            @Column(name = "LAST_MODIFIED_AT")
            private LocalDateTime modifiedAt;
            private long drinkId;
            private String drinkName;
            private String priceRank;
            private int drinkAbv;
            private String drinkImageUrl;
            private List<CommentDrinkDto.Response> commentDrinks;
            // List<TastingNote>
            // List<tag>
            // List<Snacks>
            // List<Comment>
        }
}

