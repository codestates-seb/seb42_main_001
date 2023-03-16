package com.codestates.server_001_withskey.domain.tag.service;

import com.codestates.server_001_withskey.domain.tag.entity.Tag;
import com.codestates.server_001_withskey.domain.tag.entity.TagBoard;
import com.codestates.server_001_withskey.domain.tag.entity.TagDrink;
import com.codestates.server_001_withskey.domain.tag.repository.TagBoardRepository;
import com.codestates.server_001_withskey.domain.tag.repository.TagDrinkRepository;
import com.codestates.server_001_withskey.domain.tag.repository.TagRepository;
import com.codestates.server_001_withskey.global.advice.BusinessLogicException;
import com.codestates.server_001_withskey.global.advice.ExceptionCode;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TagService {
    private final TagRepository tagRepository;

    private final TagBoardRepository tagBoardRepository;
    private final TagDrinkRepository tagDrinkRepository;


    // 태그 Id로 BoardList 불러오기
    @Transactional
    public List<TagBoard> findTag(Long tagId){
        Tag tag = findVerifiedTag(tagId);

        List<TagBoard> response = tagBoardRepository.findBoardByTagBoard(tag.getTagId());
        return response;

        // 리스트 두 개 묶는 방법
    }

    // 태그 Id로 DrinkList 불러오기
    @Transactional
    public List<TagDrink> findDrinkTag(Long tagId){
        Tag tag = findVerifiedTag(tagId);

        List<TagDrink> response = tagDrinkRepository.findDrinkByTagDrink(tag.getTagId());

        return response;
    }

    // 전체 tag 조회
    public List<Tag> findAllTags(){
        return tagRepository.findAll();
    }


    // 태그 유무 확인
    public Tag findVerifiedTag(long tagId) {
        Optional<Tag> optionalTag = tagRepository.findById(tagId);
        Tag findTag = optionalTag.orElseThrow(() ->
            new BusinessLogicException(ExceptionCode.TAG_NOT_FOUND));
        return findTag;
    }

    //

}
//    // 전체 조회(실패)
//    public List<Response> getTags(Long tagId){
//        Board board = Board.builder().boardId(tagId).build();
//        List<Tag> result = tagRepository.findByBoard(board);
//
//        return result.stream()
//            .map(boarTag -> mapper.tagToDto(boarTag))
//            .collect(Collectors.toList());
//    }
