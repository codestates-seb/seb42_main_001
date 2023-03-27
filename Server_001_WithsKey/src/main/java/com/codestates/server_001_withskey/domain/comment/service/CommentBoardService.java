package com.codestates.server_001_withskey.domain.comment.service;


import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.comment.dto.CommentBoardDto;
import com.codestates.server_001_withskey.domain.comment.entity.CommentBoard;
import com.codestates.server_001_withskey.domain.comment.repository.CommentBoardRepository;
import com.codestates.server_001_withskey.global.advice.BusinessLogicException;
import com.codestates.server_001_withskey.global.advice.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CommentBoardService {
    private final CommentBoardRepository repository;

    public CommentBoard saveCommentBoard(CommentBoard commentBoard){
        return repository.save(commentBoard);
    }

    public List<CommentBoard> getCommentByBoard(Board board){
        return repository.findAllByBoard(board);
    }

    public CommentBoard updateComment(CommentBoardDto.Patch patchComment){
        CommentBoard findBoard = findVerifiedCommentById(patchComment.getCommentBoardId());

        Optional.ofNullable(patchComment.getCommentContent())
                .ifPresent(content -> findBoard.setCommentContent(content));

        return repository.save(findBoard);
    }

    public CommentBoard findVerifiedCommentById(long commentId){
        Optional<CommentBoard> findComment = repository.findById(commentId);

        CommentBoard result = findComment.orElseThrow(()-> new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));

        return result;
    }

    public void deleteComment(long commentId){
        findVerifiedCommentById(commentId);

        repository.deleteById(commentId);
    }

    public List<CommentBoard> findAllByMemberId(long memberId){
        return repository.findAllByMemberId(memberId);
    }
}
