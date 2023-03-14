package com.codestates.server_001_withskey.domain.board.service;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.board.repository.BoardRepository;
import com.codestates.server_001_withskey.global.advice.BusinessLogicException;
import com.codestates.server_001_withskey.global.advice.ExceptionCode;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;

    /*CRUD*/
    // 생성
    public Board createBoard(Board board) {
        return boardRepository.save(board);
    }

    // 업데이트
    public Board updateBoard(Board board){
        Board findBoard = findVerifiedBoard(board.getBoardId());

        Optional.ofNullable(board.getBoardTitle())
            .ifPresent(title->findBoard.setBoardTitle(title));
        Optional.ofNullable(board.getContent())
            .ifPresent(content->findBoard.setContent(content));

        return boardRepository.save(findBoard);
    }
//    public void updateBoard(Patch patchDto) {
//
//        Optional<Board> result =
//            boardRepository.findById(patchDto.getBoardId());
//
//        if (result.isPresent()) {
//            Board board = result.get();
//            board.setContent(patchDto.getContent());
//            board.setBoardTitle(patchDto.getBoardTitle());
//
//            boardRepository.save(board);
//        }
//    }

    // 제거
    public void deleteBoard(long boardId) {
        boardRepository.deleteById(boardId);
    }

    // 조회
    // 전체 질문 조회(최신순)
    @Transactional(readOnly = true)
    public Page<Board> findBoards(int page, int size) {
        return boardRepository.findAll(PageRequest.of(page, size, Sort.by("boardId").descending()));
    }


//    // 질문 검색
//    public Page<Board> searchQuestion(String keyword, int page, int size) {
//
//        Pageable pageable = PageRequest.of(page, size);
//        Page<Board> searchQuestion = boardRepository.findByKeyword(keyword,pageable);
//
//        return searchQuestion;
//    }



    // 게시글 찾기 기능 + 유효성 검사
    public Board findVerifiedBoard(long boardId){
    Optional<Board> optionalBoard = boardRepository.findById(boardId);
    Board findBoard =
        optionalBoard.orElseThrow(() ->
            new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND));
        return findBoard;
    }

}