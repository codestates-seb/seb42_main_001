package com.codestates.server_001_withskey.domain.drink.tastingNote.dto;

import lombok.Getter;
import lombok.Setter;

public class TastingNoteDto {

    @Getter
    @Setter
    public static class Response{
        private long sweet;
        private long smoky;
        private long orc;
        private long spicy;
        private long fruity;
    }
}
