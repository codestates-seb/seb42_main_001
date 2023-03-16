package com.codestates.server_001_withskey.domain.drink.tastingNote.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;

public class TastingNoteDto {

    @Getter
    @Setter
    public static class Response{
        private long Sweet;
        private long Smoky;
        private long Citrus;
        private long Herbal;
        private long Tropical;
    }
}
