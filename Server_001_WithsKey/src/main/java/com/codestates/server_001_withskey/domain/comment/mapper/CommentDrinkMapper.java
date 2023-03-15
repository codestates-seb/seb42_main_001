package com.codestates.server_001_withskey.domain.comment.mapper;

import com.codestates.server_001_withskey.domain.comment.dto.CommentDrinkDto;
import com.codestates.server_001_withskey.domain.comment.entity.CommentDrink;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CommentDrinkMapper {

    default List<CommentDrinkDto.Response> commentsToCommentDrinkDtoResponse(List<CommentDrink> commentDrinkList) {

        return commentDrinkList
                .stream()
                .map(commentDrink -> CommentDrinkDto.Response
                        .builder()
                        .createdAt(commentDrink.getCreateAt())
                        .commentId(commentDrink.getCommentId())
                        .memberId(commentDrink.getMemberId())
                        .displayName(commentDrink.getDisplayName())
                        .content(commentDrink.getContent())
                        .build())
                .collect(Collectors.toList());
    }
}

