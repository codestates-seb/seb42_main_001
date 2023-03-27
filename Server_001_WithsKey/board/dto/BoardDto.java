package com.codestates.server_001_withskey.domain.board.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class BoardDto {
    private Long boardId;
    private String content;
    private String boardImageUrl;

}
