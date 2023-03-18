package com.codestates.server_001_withskey.domain.like.service;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.board.service.BoardService;
import com.codestates.server_001_withskey.domain.like.entity.LikeBoard;
import com.codestates.server_001_withskey.domain.like.repository.LikeBoardRepository;
import com.codestates.server_001_withskey.global.advice.BusinessLogicException;
import com.codestates.server_001_withskey.global.advice.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class LikeBoardService {
    private final LikeBoardRepository likeBoardRepository;
    private final BoardService boardService;

    public List<Board> getLikeBoardsByMemberId(long memberId){
        List<LikeBoard> likeBoards = likeBoardRepository.findAllByMemberId(memberId);

        List<Board> boards = likeBoards.stream()
                .map(likeBoard -> {
                    return likeBoard.getBoard();
                }).collect(Collectors.toList());
        return boards;
    }

    public void updateLike(long memberId, long boardId){
        Board findBoard = boardService.findVerifiedBoard(boardId);
        verifyCanLike(memberId, findBoard);

        LikeBoard likeBoard = new LikeBoard(findBoard, memberId);
        likeBoardRepository.save(likeBoard);
    }

    public void verifyCanLike(long memberId, Board board){
        Optional<LikeBoard> findLikeBoard =
                likeBoardRepository.findLikeBoardByMemberIdAndBoard(memberId, board);

        if(findLikeBoard.isPresent()){
            throw new BusinessLogicException(ExceptionCode.LIKE_ALREADY_EXISTS);
        }
    }

    public void deleteLike(long memberId, long boardId){
        Board findBoard = boardService.findVerifiedBoard(boardId);
        LikeBoard likeBoard = findVerifyCanLike(memberId, findBoard);
        likeBoardRepository.delete(likeBoard);
    }

    public LikeBoard findVerifyCanLike(long memberId, Board board){
        Optional<LikeBoard> findLikeBoard =
                likeBoardRepository.findLikeBoardByMemberIdAndBoard(memberId, board);
        return findLikeBoard.orElseThrow(()-> new BusinessLogicException(ExceptionCode.LIKE_ALREADY_EXISTS));
    }
}
