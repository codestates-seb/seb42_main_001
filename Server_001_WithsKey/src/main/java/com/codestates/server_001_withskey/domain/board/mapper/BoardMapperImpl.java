package com.codestates.server_001_withskey.domain.board.mapper;

import com.codestates.server_001_withskey.domain.board.dto.BoardDto;
import com.codestates.server_001_withskey.domain.board.dto.BoardDto.Response;
import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.image.service.ImageService;
import com.codestates.server_001_withskey.domain.member.entity.Member;
import com.codestates.server_001_withskey.domain.tag.dto.TagDto;
import com.codestates.server_001_withskey.domain.tag.entity.Tag;
import com.codestates.server_001_withskey.domain.tag.entity.TagBoard;
import com.codestates.server_001_withskey.global.advice.BusinessLogicException;
import com.codestates.server_001_withskey.global.advice.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class BoardMapperImpl implements BoardMapper{
    private final ImageService imageService;

    @Override
    public Board PostDtoToBoard(BoardDto.Post requestBody) {
        if(requestBody==null){
            throw new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND);
        }else{

            Board board = new Board();

            board.setBoardTitle(requestBody.getBoardTitle());
            board.setContent(requestBody.getBoardContent());


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
                .content(requestBody.getBoardContent())
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
            response.setProfileImageUrl(board.getMember().getProfilePicture());

            response.setCreatedAt(board.getCreateAt());
            response.setModifiedAt(board.getModifiedAt());

            //TODO Tag
            List<TagDto.Info> tagList = board.getTagBoardList()
                                    .stream()
                                    .map(tagBoard -> {
                                        Tag tag = tagBoard.getTag();

                                        TagDto.Info info = new TagDto.Info();
                                        info.setTagId(tag.getTagId());
                                        info.setTagName(tag.getTag_name());

                                        return info;
                                    }).collect(Collectors.toList());

            response.setTags(tagList);

            return response;
        }
    }

    public BoardDto.ResponseDetail BoardToDetail(Board board){
        if(board == null){
            throw new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND);
        } else {
            BoardDto.ResponseDetail response = new BoardDto.ResponseDetail();

            response.setBoardId(board.getBoardId());
            response.setBoardTitle(board.getBoardTitle());
            response.setContent(board.getContent());
            response.setLikeCount(board.getLikeBoardsList().size());
            response.setCommentCount(board.getCommentBoardList().size());

            response.setMemberId(board.getMember().getMemberId());
            response.setMemberName(board.getMember().getDisplayName());
            response.setProfileImageUrl(board.getMember().getProfilePicture());

            response.setCreatedAt(board.getCreateAt());
            response.setModifiedAt(board.getModifiedAt());

            List<TagDto.Info> tagList = board.getTagBoardList()
                    .stream()
                    .map(tagBoard -> {
                        Tag tag = tagBoard.getTag();

                        TagDto.Info info = new TagDto.Info();
                        info.setTagId(tag.getTagId());
                        info.setTagName(tag.getTag_name());

                        return info;
                    }).collect(Collectors.toList());
            response.setTags(tagList);


            return response;
        }
    }

    @Override
    public List<BoardDto.Response> BoardsToDtos(List<Board> board) {
        return board.stream()
                .map(board1 -> { return BoardToDto(board1); })
                .collect(Collectors.toList());
    }

    public BoardDto.Short boardToRecommand(Board board){
        BoardDto.Short recommand = new BoardDto.Short();
        recommand.setBoardId(board.getBoardId());
        recommand.setBoardTitle(board.getBoardTitle());

        return recommand;
    }

    public List<BoardDto.Short> boardsToRecommands(List<Board> boards){
        return boards.stream()
                .map(board -> {
                    return boardToRecommand(board);
                }).collect(Collectors.toList());
    }
}