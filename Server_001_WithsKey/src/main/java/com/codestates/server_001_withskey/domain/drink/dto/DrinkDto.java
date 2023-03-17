package com.codestates.server_001_withskey.domain.drink.dto;

import com.codestates.server_001_withskey.domain.comment.dto.CommentDrinkDto;
import com.codestates.server_001_withskey.domain.drink.tastingNote.dto.TastingNoteDto;
import com.codestates.server_001_withskey.domain.member.snack.dto.SnackDto;
import com.codestates.server_001_withskey.domain.tag.dto.TagDto;
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

        private TastingNoteDto.Response tastingNote;

        private List<SnackDto.Response> snacks;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Short{
        private long drinkId;
        private String drinkName;
    }
}

