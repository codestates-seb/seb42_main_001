package com.codestates.server_001_withskey.domain.tag.controller;

import com.codestates.server_001_withskey.domain.board.dto.BoardDto;
import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.board.mapper.BoardMapperImpl;
import com.codestates.server_001_withskey.domain.tag.dto.TagDto;
import com.codestates.server_001_withskey.domain.tag.entity.Tag;
import com.codestates.server_001_withskey.domain.tag.mapper.TagMapper;
import com.codestates.server_001_withskey.domain.tag.service.TagService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tags")
@RequiredArgsConstructor
public class TagController {

    private final TagService tagService;
    private final TagMapper tagMapper;
    private final BoardMapperImpl boardMapper;

    @GetMapping("/{tag-id}")
    public ResponseEntity getTag(@PathVariable("tag-id")long tagId){
        Tag tag = tagService.findVerifiedTag(tagId);
        TagDto.Response response = tagMapper.tagToDto(tag);

        // 하나의 태그와 관련된 Board를 가져오는 것.
        List<Board> boards = tagService.findBoardsByTag(tag);
        List<BoardDto.Response> boradResponses = boardMapper.BoardsToDtos(boards);
        response.setBoard(boradResponses);

        // 하나의 태그와 관련된 Drinks를 가져오는 것.

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 전체 return
    @GetMapping
    public List<Tag> getTags(){
        return tagService.findAllTags();
    }


}

// 전체 조회
//    public ResponseEntity getTags(@Positive @RequestParam int page,
//                                  @Positive @RequestParam int size){
//
//        Page<Tag> pageTags = tagService.findTags(page-1, size);
//        List<Tag> tags = pageTags.getContent();
//
//        return new ResponseEntity<>(
//            new MultiResponseDto<>(mapper.tagsToDtos(tags), pageTags), HttpStatus.OK);


