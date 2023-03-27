package com.codestates.server_001_withskey.domain.comment.mapper;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.comment.dto.CommentBoardDto;
import com.codestates.server_001_withskey.domain.comment.entity.CommentBoard;
import com.codestates.server_001_withskey.domain.member.entity.Member;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CommentBoardMapper {

    public CommentBoard dtoToComment(CommentBoardDto.Post postComment, Member member){
        CommentBoard commentBoard = new CommentBoard();

        Board board = new Board();
        board.setBoardId(postComment.getBoardId());

        commentBoard.setBoard(board);
        commentBoard.setCommentContent(postComment.getCommentContent());
        commentBoard.setMemberId(member.getMemberId());
        commentBoard.setDisplayName(member.getDisplayName());

        return commentBoard;
    }


    public CommentBoardDto.Response commentToResponse(CommentBoard commentBoard){

        CommentBoardDto.Response response = new CommentBoardDto.Response();
        response.setCommentId(commentBoard.getCommentBoardId());
        response.setCreateAt(commentBoard.getCreateAt());
        response.setDisplayName(commentBoard.getDisplayName());
        response.setMemberId(commentBoard.getMemberId());
        response.setCommentContent(commentBoard.getCommentContent());

        return response;
    }

    public List<CommentBoardDto.Response> commentsToResponses(List<CommentBoard> commentBoards){
        return commentBoards.stream()
                .map(commentBoard -> {
                    return commentToResponse(commentBoard);
                }).collect(Collectors.toList());
    }


    public CommentBoardDto.MyPage commentToMyPageComment(CommentBoard commentBoard){
        CommentBoardDto.MyPage commentMyPage = new CommentBoardDto.MyPage();

        commentMyPage.setBoardTitle(commentBoard.getBoard().getBoardTitle());
        commentMyPage.setCommentContent(commentBoard.getCommentContent());
        commentMyPage.setBoardId(commentBoard.getBoard().getBoardId());
        commentMyPage.setCommentId(commentBoard.getCommentBoardId());

        return commentMyPage;
    }

    public List<CommentBoardDto.MyPage> commentsToMyPageComments(List<CommentBoard> commentBoards){
        return commentBoards.stream()
                .map(commentBoard -> {
                    return commentToMyPageComment(commentBoard);
                }).collect(Collectors.toList());
    }



}
