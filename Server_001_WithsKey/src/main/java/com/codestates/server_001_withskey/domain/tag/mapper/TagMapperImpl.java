package com.codestates.server_001_withskey.domain.tag.mapper;

import com.codestates.server_001_withskey.domain.board.dto.BoardDto;
import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.tag.dto.TagBoardDto;
import com.codestates.server_001_withskey.domain.tag.dto.TagDto;
import com.codestates.server_001_withskey.domain.tag.dto.TagDto.Post;
import com.codestates.server_001_withskey.domain.tag.dto.TagDto.Response;
import com.codestates.server_001_withskey.domain.tag.entity.Tag;
import com.codestates.server_001_withskey.domain.tag.entity.TagBoard;
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
        // tag 없으면 error

        if(tag == null){
            throw new BusinessLogicException(ExceptionCode.TAG_NOT_FOUND);
        }else{
            // tag 정보 response 에 add
            TagDto.Response response = new TagDto.Response();

            response.setTagId(tag.getTagId());
            response.setTagName(tag.getTag_name());
            response.setTagInfo(tag.getTagInfo());

            /// response 에 tagBoard add

            // TODO Board
//            List<TagBoardDto.Response> tagBoard = tag.getTagBoardList()
//                .stream()
//                .map(tagBoard1 -> {
//                    Board board = tagBoard1.getBoard();
//
//                    TagBoardDto.Response result = new TagBoardDto.Response();
//                    result.setBoard((List<BoardDto.Response>) tagBoard1.getBoard());
//                    return result;
//
//                }).collect(Collectors.toList());
//            response.setBoard(tagBoard);
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
