package com.codestates.server_001_withskey.domain.tag.controller;

import com.codestates.server_001_withskey.domain.board.dto.BoardDto;
import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.board.mapper.BoardMapper;
import com.codestates.server_001_withskey.domain.tag.dto.TagDto;
import com.codestates.server_001_withskey.domain.tag.dto.TagDto.Response;
import com.codestates.server_001_withskey.domain.tag.entity.Tag;
import com.codestates.server_001_withskey.domain.tag.entity.TagBoard;
import com.codestates.server_001_withskey.domain.tag.mapper.TagMapper;
import com.codestates.server_001_withskey.domain.tag.mapper.TagMapperImpl;
import com.codestates.server_001_withskey.domain.tag.repository.TagBoardRepository;
import com.codestates.server_001_withskey.domain.tag.service.TagService;
import java.util.List;
import java.util.stream.Collectors;

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
    private final TagMapperImpl mapper;
    private final TagBoardRepository tagBoardRepository;
    private final BoardMapper boardMapper;


    @GetMapping("/{tag-id}")
    public ResponseEntity getTag(@PathVariable("tag-id") long tagId){
        Tag tag = tagService.findVerifiedTag(tagId);
        // TagBoard List 찾기
        List<TagBoard> tagBoardList = tagService.findTag(tag.getTagId());

        //TagBoard에서 BoardList 추출 후 Response로 변환
        List<BoardDto.Response> boardResponse = tagBoardList.stream()
                .map(tagBoard -> {
                    return boardMapper.BoardToDto(tagBoard.getBoard());
                }).collect(Collectors.toList());

        //BoardList를 제외한 태그 정보를 TagResponseDTO로 변환
        TagDto.Response response = mapper.tagToDto(tag);

        //TagResponse에 BoardResponseList 할당
        response.setBoard(boardResponse);

        //+ Drink 가져오는 로직을 구현
        //List<Drink> -> List<DrinkDto> -> response.set()

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // 전체 return
    @GetMapping
    public ResponseEntity getTag(){
        List<Tag> tags = tagService.findAllTags();
        List<TagDto.Info> response = mapper.tagsToInfos(tags);
        return new ResponseEntity<>(response, HttpStatus.OK);
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


