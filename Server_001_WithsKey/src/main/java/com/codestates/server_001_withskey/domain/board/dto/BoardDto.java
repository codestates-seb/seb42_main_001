package com.codestates.server_001_withskey.domain.board.dto;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

import com.codestates.server_001_withskey.domain.image.dto.ImageDto;
import com.codestates.server_001_withskey.domain.tag.dto.TagDto;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
public class BoardDto {
    @Data
//    @Builder
    @NoArgsConstructor
    public static class Post{
        private String boardTitle;
        private String BoardContent;
        // ImageService에서 처리
        private List<ImageDto.Post> images;

        // TagService에서 처리
        private List<TagDto.Post> tags;
    }

    @Data
    @NoArgsConstructor
    public static class Patch{
        private long boardId;
        private String boardTitle;
        private String content;
        private List<ImageDto.Patch> images;
        private List<TagDto.Post> tags;
    }

    @Data
    @NoArgsConstructor
    public static class Response{
        private long boardId;
        private String boardTitle;
        private String content;
//        private String boardImageUrl;
        private long memberId;
        private String memberName;

        private String profileImageUrl;

        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;

        private int likeCount;
        private int commentCount;

        //TODO
        private List<ImageDto.Response> images;

    }
}
