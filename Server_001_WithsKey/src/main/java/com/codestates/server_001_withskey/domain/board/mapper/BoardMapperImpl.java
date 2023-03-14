package com.codestates.server_001_withskey.domain.board.mapper;

import com.codestates.server_001_withskey.domain.board.dto.BoardDto;
import com.codestates.server_001_withskey.domain.board.dto.BoardDto.Patch;
import com.codestates.server_001_withskey.domain.board.dto.BoardDto.Response;
import com.codestates.server_001_withskey.domain.board.entity.Board;
import java.util.List;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@NoArgsConstructor
public class BoardMapperImpl implements BoardMapper{

    @Override
    public Board PostDtoToBoard(BoardDto.Post requestBody) {
        if(requestBody==null){
            return null;
        }else{
            Board board = new Board();
            board.setBoardTitle(requestBody.getBoardTitle());
            board.setContent(requestBody.getContent());
            return board;
        }
    }

    @Override
    public Board PatchDtoToBoard(BoardDto.Patch requestBody) {
        if (requestBody == null) {
            return null;
        } else {
            Board board = Board.builder()
                .boardId(requestBody.getBoardId())
                .boardTitle(requestBody.getBoardTitle())
                .content(requestBody.getContent())
                .build();

            return board;
        }
    }

    @Override
    public Response BoardToDto(Board board) {
        return null;
    }

    @Override
    public List<Response> BoardsToDto(List<Board> board) {
        return null;
    }
}
/*
// DTO To Entity
    default Board boardDtoToEntity(BoardDto.Post postDto){

        if(postDto==null){return null;}
        Board boardPost = Board.builder()
            .boardId(postDto.getBoardId())
            .boardTitle(postDto.getBoardTitle())
            .content(postDto.getContent())
            //.board(Board.builder().boardId(postDto.getBoardId).build()) // 멤버 빌딩
            .build();
        return boardPost;
    }


    default Board boardPatchDtoToBoards(BoardDto.Patch patch) {
        if(patch==null){
            return null;
        }

        Board boardPatch = Board.builder()
            .boardTitle(patch.getBoardTitle())
            .content(patch.getContent())
            .build();

        return boardPatch;
    }


    // Entity To DTO
    default BoardDto.Response entityToBoardDto(Board board){
        BoardDto.Response responseDto = BoardDto.Response.builder()
            .boardId(board.getBoardId())
            .boardTitle(board.getBoardTitle())
            .content(board.getContent())
            .build();

        return responseDto;
    }



* */