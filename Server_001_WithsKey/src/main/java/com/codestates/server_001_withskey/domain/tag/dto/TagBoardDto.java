package com.codestates.server_001_withskey.domain.tag.dto;


import com.codestates.server_001_withskey.domain.board.dto.BoardDto;
import com.codestates.server_001_withskey.domain.board.entity.Board;
import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class TagBoardDto {

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response{
        private long tagBoardId;
        private List<BoardDto.Response> board;
    }
}
