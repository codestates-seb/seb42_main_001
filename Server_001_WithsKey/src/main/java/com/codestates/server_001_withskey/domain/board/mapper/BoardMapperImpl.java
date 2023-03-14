package com.codestates.server_001_withskey.domain.board.mapper;

import com.codestates.server_001_withskey.domain.board.dto.BoardDto;
import com.codestates.server_001_withskey.domain.board.dto.BoardDto.Response;
import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.member.entity.Member;
import com.codestates.server_001_withskey.domain.tag.entity.Tag;
import com.codestates.server_001_withskey.domain.tag.entity.TagBoard;
import com.codestates.server_001_withskey.global.advice.BusinessLogicException;
import com.codestates.server_001_withskey.global.advice.ExceptionCode;
import lombok.NoArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@NoArgsConstructor
public class BoardMapperImpl implements BoardMapper{

    @Override
    public Board PostDtoToBoard(BoardDto.Post requestBody) {
        if(requestBody==null){
            throw new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND);
        }else{

            Board board = new Board();

            board.setBoardTitle(requestBody.getBoardTitle());
            board.setContent(requestBody.getBoardContent());

            Object one = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

            //Member 매핑
            Long memberId = Long.valueOf(String.valueOf(SecurityContextHolder.getContext().getAuthentication().getPrincipal()));
            Member member = new Member();
            member.setMemberId(memberId);
            board.setMember(member);

            List<TagBoard> tagBoardList =
            //TagDto => tagId, tagName
            requestBody.getTags()
                    .stream()
                    .map( tagPost -> {
                        TagBoard tagBoard = new TagBoard();

                        tagBoard.setBoard(board);

                        Tag tag = new Tag();
                        tag.setTagId(tagPost.getTagId());
                        tagBoard.setTag(tag);

                        return tagBoard;
                    })
                    .collect(Collectors.toList());

            board.setTagBoardList(tagBoardList);

            return board;
        }
    }


    @Override
    public Board PatchDtoToBoard(BoardDto.Patch requestBody) {
        if (requestBody == null) {
            throw new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND);
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
        if(board == null){
            throw new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND);
        } else {
            BoardDto.Response response = new BoardDto.Response();

            response.setBoardId(board.getBoardId());
            response.setBoardTitle(board.getBoardTitle());
            response.setContent(board.getContent());
            response.setLikeCount(board.getLikeBoardsList().size());
            response.setCommentCount(board.getCommentBoardList().size());
            response.setMemberId(board.getMember().getMemberId());
            response.setMemberName(board.getMember().getDisplayName());
            response.setCreatedAt(board.getCreatedAt());
            response.setModifiedAt(board.getModifiedAt());
//            response.setProfileImageUrl(board.getMember().getProfilePicture()); 추가 예정

            return response;
        }
    }

    @Override
    public List<Response> BoardsToDtos(List<Board> board) {
        return board.stream()
                .map(board1 -> { return BoardToDto(board1); })
                .collect(Collectors.toList());
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