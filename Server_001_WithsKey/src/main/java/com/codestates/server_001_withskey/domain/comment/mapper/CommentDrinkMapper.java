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

}

