package com.codestates.server_001_withskey.domain.drink.tastingNote.mapper;

import com.codestates.server_001_withskey.domain.drink.tastingNote.TastingNote;
import com.codestates.server_001_withskey.domain.drink.tastingNote.dto.TastingNoteDto;
import org.springframework.stereotype.Component;

@Component
public class TastingNoteMapper {

    public TastingNoteDto.Response tastingNoteToResponse(TastingNote tastingNote){
        TastingNoteDto.Response response = new TastingNoteDto.Response();

        response.setOrc(tastingNote.getOrc());
        response.setSweet(tastingNote.getSweet());
        response.setSmoky(tastingNote.getSmoky());
        response.setSpicy(tastingNote.getSpicy());
        response.setFruity(tastingNote.getFruity());

        return response;
    }
}
