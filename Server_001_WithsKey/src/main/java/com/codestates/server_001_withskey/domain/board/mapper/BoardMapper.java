package com.codestates.server_001_withskey.domain.board.mapper;

import com.codestates.server_001_withskey.domain.board.dto.BoardDto;
import com.codestates.server_001_withskey.domain.board.dto.BoardDto.Response;
import com.codestates.server_001_withskey.domain.board.entity.Board;
import java.util.List;

//@Mapper(
//    componentModel = "spring",
//    unmappedTargetPolicy = ReportingPolicy.IGNORE
//)
public interface BoardMapper {

    Board PostDtoToBoard(BoardDto.Post requestBody);

    Board PatchDtoToBoard(BoardDto.Patch requestBody);

    BoardDto.Response BoardToDto(Board board);

    List<Response> BoardsToDtos(List<Board> board);


}
