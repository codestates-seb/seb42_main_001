package com.codestates.server_001_withskey.domain.board.service;

import com.codestates.server_001_withskey.domain.board.dto.BoardDto;
import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.board.repository.BoardRepository;
import com.codestates.server_001_withskey.domain.image.service.ImageService;
import com.codestates.server_001_withskey.domain.tag.dto.TagDto;
import com.codestates.server_001_withskey.domain.tag.entity.Tag;
import com.codestates.server_001_withskey.domain.tag.entity.TagBoard;
import com.codestates.server_001_withskey.domain.tag.repository.TagBoardRepository;
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
    private final TagBoardRepository tagBoardRepository;

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
        Optional.ofNullable(patchBoard.getBoardImageUrl())
                .ifPresent(image -> imageService.updateImage(findBoard, image));
        Optional.ofNullable(patchBoard.getTags())
                .ifPresent(tags -> updateBoardTag(tags, findBoard));

        return boardRepository.save(findBoard);
    }

    // 제거
    public void deleteBoard(long boardId) {
        boardRepository.deleteById(boardId);
    }

    // 조회
    // 전체 질문 조회(최신순)
    @Transactional(readOnly = true)
    public List<Board> findBoards() {
        return boardRepository.findAll();
    }

    // 게시글 찾기 기능 + 유효성 검사
    public Board findVerifiedBoard(long boardId){
    Optional<Board> optionalBoard = boardRepository.findById(boardId);
    Board findBoard =
        optionalBoard.orElseThrow(() ->
            new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND));
        return findBoard;
    }


    //보드가 가진 태그를 기준으로 추천 보드 조회
    public List<Board> findBoardsByTag(Board board){

        List<Board> boardList = board.getTagBoardList()
                .stream()
                .filter(tagBoard -> {
                    return tagBoard.getBoard() != board;
                })
                .map(tagBoard -> {
                    return tagBoard.getBoard();
                })
                .limit(15)
                .collect(Collectors.toList());

        return boardList;
    }


    public List<TagBoard> updateBoardTag(List<TagDto.Post> tagInfo, Board board){
        List<TagBoard> tagBoardList = tagInfo
                .stream().map(tags -> {
                    TagBoard tagBoard = new TagBoard();

                    Tag tag = new Tag();
                    tag.setTagId(tags.getTagId());
                    tagBoard.setBoard(board);
                    tagBoard.setTag(tag);

                    return tagBoard;
                }).collect(Collectors.toList());

        List<TagBoard> origin = tagBoardRepository.findTagBoardsByBoard(board);
        tagBoardRepository.deleteAll(origin);

        board.setTagBoardList(tagBoardList);

        return tagBoardList;
    }
}