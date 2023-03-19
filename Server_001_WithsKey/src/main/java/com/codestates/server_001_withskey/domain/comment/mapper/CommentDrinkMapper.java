package com.codestates.server_001_withskey.domain.comment.mapper;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.comment.dto.CommentBoardDto;
import com.codestates.server_001_withskey.domain.comment.dto.CommentDrinkDto;
import com.codestates.server_001_withskey.domain.comment.entity.CommentBoard;
import com.codestates.server_001_withskey.domain.comment.entity.CommentDrink;
import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import com.codestates.server_001_withskey.domain.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class CommentDrinkMapper {

    public CommentDrink dtoToComment(CommentDrinkDto.Post postComment, Member member){
        CommentDrink commentDrink = new CommentDrink();

        Drink drink = new Drink();
        drink.setDrinkId(postComment.getDrinkId());

        commentDrink.setDrink(drink);
        commentDrink.setCommentContent(postComment.getCommentContent());
        commentDrink.setMemberId(member.getMemberId());
        commentDrink.setDisplayName(member.getDisplayName());

        return commentDrink;
    }

    public CommentDrinkDto.Response commentToResponse(CommentDrink commentDrink){
        CommentDrinkDto.Response response = new CommentDrinkDto.Response();
        response.setCommentId(commentDrink.getCommentDrinkId());
        response.setCreateAt(commentDrink.getCreateAt());
        response.setDisplayName(commentDrink.getDisplayName());
        response.setMemberId(commentDrink.getMemberId());
        response.setCommentContent(commentDrink.getCommentContent());
        return response;
    }

    public List<CommentDrinkDto.Response> commentsToResponses(List<CommentDrink> commentDrinks){
        return commentDrinks.stream()
                .map(commentDrink -> {
                    return commentToResponse(commentDrink);
                }).collect(Collectors.toList());
    }

    public CommentDrinkDto.MyPage commentToMyPage(CommentDrink commentDrink){
        CommentDrinkDto.MyPage myPage = new CommentDrinkDto.MyPage();

        myPage.setCommentContent(commentDrink.getCommentContent());
        myPage.setDrinkName(commentDrink.getDrink().getDrinkName());
        myPage.setDrinkId(commentDrink.getDrink().getDrinkId());
        myPage.setCommentId(commentDrink.getCommentDrinkId());

        return myPage;
    }

    public List<CommentDrinkDto.MyPage> commentsToMyPages(List<CommentDrink> commentDrinks){
        return commentDrinks.stream()
                .map(commentDrink -> {
                    return commentToMyPage(commentDrink);
                }).collect(Collectors.toList());
    }

}

