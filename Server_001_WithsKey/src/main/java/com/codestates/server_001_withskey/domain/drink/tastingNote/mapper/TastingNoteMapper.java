package com.codestates.server_001_withskey.domain.drink.tastingNote.mapper;

import com.codestates.server_001_withskey.domain.drink.tastingNote.TastingNote;
import com.codestates.server_001_withskey.domain.drink.tastingNote.dto.TastingNoteDto;
import org.springframework.stereotype.Component;

@Component
public class TastingNoteMapper {

    public TastingNoteDto.Response tastingNoteToResponse(TastingNote tastingNote){
        TastingNoteDto.Response response = new TastingNoteDto.Response();

        response.setCitrus(tastingNote.getCitrus());
        response.setSweet(tastingNote.getSweet());
        response.setSmoky(tastingNote.getSmoky());
        response.setHerbal(tastingNote.getHerbal());
        response.setTropical(tastingNote.getTropical());

        return response;
    }
}
