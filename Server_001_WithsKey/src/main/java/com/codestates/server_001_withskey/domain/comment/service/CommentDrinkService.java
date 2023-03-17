package com.codestates.server_001_withskey.domain.comment.service;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.comment.dto.CommentBoardDto;
import com.codestates.server_001_withskey.domain.comment.dto.CommentDrinkDto;
import com.codestates.server_001_withskey.domain.comment.entity.CommentBoard;
import com.codestates.server_001_withskey.domain.comment.entity.CommentDrink;
import com.codestates.server_001_withskey.domain.comment.repository.CommentBoardRepository;
import com.codestates.server_001_withskey.domain.comment.repository.CommentDrinkRepository;
import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import com.codestates.server_001_withskey.global.advice.BusinessLogicException;
import com.codestates.server_001_withskey.global.advice.ExceptionCode;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CommentDrinkService {
    private final CommentDrinkRepository repository;

    public CommentDrink saveCommentDrink(CommentDrink commentDrink){
        return repository.save(commentDrink);
    }

    public List<CommentDrink> getCommentByDrink(Drink drink){
        return repository.findAllByDrink(drink);
    }

    public CommentDrink updateComment(CommentDrinkDto.Patch patchComment){
        CommentDrink findDrink = findVerifiedCommentById(patchComment.getCommentDrinkId());

        Optional.ofNullable(patchComment.getCommentContent())
                .ifPresent(content -> findDrink.setCommentContent(content));

        return repository.save(findDrink);
    }

    public CommentDrink findVerifiedCommentById(long commentId){
        Optional<CommentDrink> findComment = repository.findById(commentId);

        CommentDrink result = findComment.orElseThrow(()-> new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));

        return result;
    }

    public void deleteComment(long commentId){
        findVerifiedCommentById(commentId);

        repository.deleteById(commentId);
    }

    public List<CommentDrink> findAllByMemberId(long memberId){
        return repository.findAllByMemberId(memberId);
    }
}
