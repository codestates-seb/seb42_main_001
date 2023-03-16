package com.codestates.server_001_withskey.domain.tag.mapper;

import com.codestates.server_001_withskey.domain.board.dto.BoardDto;
import com.codestates.server_001_withskey.domain.board.dto.BoardDto.Patch;
import com.codestates.server_001_withskey.domain.board.dto.BoardDto.Response;
import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.tag.dto.TagDto;
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
    public TagDto.Response tagToDto(Tag tag) {
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

            // TODO Board - TagBoard 하위 Board 가져오기
            List<BoardDto.Response> boardList = tag.getTagBoardList()
                .stream()
                    .map(tagBoard -> {
                        Board board = tagBoard.getBoard();

                        BoardDto.Response response1 = new BoardDto.Response();
                        response1.setBoardId(board.getBoardId());
                        response1.setBoardTitle(board.getBoardTitle());
                        response1.setContent(board.getContent());

                        return response1;
                    }).collect(Collectors.toList());

            response.setBoard(boardList);
            return response;
        }
    }

    @Override
    public List<TagDto.Response> tagsToDtos(List<Tag> tag) {
        return tag.stream()
            .map(tags -> {return tagToDto(tags);})
            .collect(Collectors.toList());
    }
}
