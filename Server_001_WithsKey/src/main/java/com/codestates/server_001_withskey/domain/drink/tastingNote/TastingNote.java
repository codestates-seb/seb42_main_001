package com.codestates.server_001_withskey.domain.drink.tastingNote;

import lombok.Getter;

@Getter
public enum TastingNote {
    JACKDANIELHONEY("SWEET",4/5);

// SWEET, NUTTY, BITTER


    @Getter
    String taste;
    @Getter
    int score;

    TastingNote(String taste, int score) {
        this.score = score;
        this.taste = taste;
    }
}
