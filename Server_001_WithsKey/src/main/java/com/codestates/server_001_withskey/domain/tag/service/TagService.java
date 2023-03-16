package com.codestates.server_001_withskey.domain.tag.service;

import com.codestates.server_001_withskey.domain.tag.entity.Tag;
import com.codestates.server_001_withskey.domain.tag.entity.TagBoard;
import com.codestates.server_001_withskey.domain.tag.entity.TagDrink;
import com.codestates.server_001_withskey.domain.tag.repository.TagBoardRepository;
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

    // 단일 tag 조회
//    public Tag findTag(long tagId){return findVerifiedTag(tagId);}

    // tag - board / drink 출력
//    public List<Object> findByTag(long tagId){
//        Tag tag = findVerifiedTag(tagId);
//        return tagRepository.getTagWithBoard(tag.getTagId());
//    }
    @Transactional
    public List<TagBoard> findTagBoard(Long tagId) {
        Tag tag = findVerifiedTag(tagId);

        List<TagBoard> response = tagBoardRepository.findBoardByTagBoard(tag.getTagId());

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
