package com.codestates.server_001_withskey.domain.tag.mapper;

import com.codestates.server_001_withskey.domain.tag.dto.TagDto;
import com.codestates.server_001_withskey.domain.tag.dto.TagDto.Response;
import com.codestates.server_001_withskey.domain.tag.entity.Tag;
import java.util.List;

public interface TagMapper {
    TagDto.Response tagBoardToDto(Tag tag);

    List<Response> tagsToDtos(List<Tag> tag);
}
