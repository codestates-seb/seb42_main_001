package com.codestates.server_001_withskey.domain.tag.mapper;

import com.codestates.server_001_withskey.domain.tag.dto.TagDto;
import com.codestates.server_001_withskey.domain.tag.dto.TagDto.Post;
import com.codestates.server_001_withskey.domain.tag.dto.TagDto.Response;
import com.codestates.server_001_withskey.domain.tag.entity.Tag;
import com.codestates.server_001_withskey.global.advice.BusinessLogicException;
import com.codestates.server_001_withskey.global.advice.ExceptionCode;
import java.util.List;
import java.util.stream.Collectors;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@NoArgsConstructor
public class TagMapperImpl implements TagMapper{


    @Override
    public Response tagToDto(Tag tag) {
        if(tag == null){
            throw new BusinessLogicException(ExceptionCode.TAG_NOT_FOUND);
        }else{
            TagDto.Response response = new TagDto.Response();

            response.setTagId(tag.getTagId());
            response.setTagName(tag.getTag_name());
            response.setTagInfo(tag.getTagInfo());

            return response;
        }
    }

    @Override
    public List<Response> tagsToDtos(List<Tag> tag) {
        return tag.stream()
            .map(tags -> {return tagToDto(tags);})
            .collect(Collectors.toList());
    }
}
