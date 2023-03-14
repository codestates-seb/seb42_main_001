package com.codestates.server_001_withskey.domain.board.service;

import com.codestates.server_001_withskey.domain.board.dto.BoardDto;
import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.board.repository.BoardRepository;
import com.codestates.server_001_withskey.domain.image.service.ImageService;
import com.codestates.server_001_withskey.domain.tag.entity.Tag;
import com.codestates.server_001_withskey.domain.tag.entity.TagBoard;
import com.codestates.server_001_withskey.global.advice.BusinessLogicException;
import com.codestates.server_001_withskey.global.advice.ExceptionCode;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
    private final ImageService imageService;

    /*CRUD*/
    // 생성
    public Board createBoard(Board board) {
        return boardRepository.save(board);
    }

    // 업데이트
    public Board updateBoard(BoardDto.Patch patchBoard){
        Board findBoard = findVerifiedBoard(patchBoard.getBoardId());

        Optional.ofNullable(patchBoard.getBoardTitle())
                        .ifPresent(title -> findBoard.setBoardTitle(title));
        Optional.ofNullable(patchBoard.getContent())
                        .ifPresent(content -> findBoard.setContent(content));
        Optional.ofNullable(patchBoard.getImages())
                .ifPresent(image -> imageService.updateImage(findBoard, image));

        //TODO tag 수정 기능
//        Optional.ofNullable(patchBoard.getImages())
//                .ifPresent(tag -> );

        return boardRepository.save(findBoard);
    }

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


    //TODO 태그를 기준으로 모든 보드 조회
    public List<Board> findBoardsByTag(Tag tag){

        List<Board> boardList = tag.getTagBoardList()
                .stream()
                .filter(tagBoard -> {
                    return tagBoard.getTag().getTagId()!=tag.getTagId();
                })
                .map(tagBoard -> {
                    return tagBoard.getBoard();
                })
                .collect(Collectors.toList());


        return boardList;
    }
}