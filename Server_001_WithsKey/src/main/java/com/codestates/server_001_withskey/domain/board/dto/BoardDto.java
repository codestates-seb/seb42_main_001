package com.codestates.server_001_withskey.domain.board.dto;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

import com.codestates.server_001_withskey.domain.comment.entity.CommentBoard;
import com.codestates.server_001_withskey.domain.image.dto.ImageDto;
import com.codestates.server_001_withskey.domain.tag.dto.TagDto;
import com.codestates.server_001_withskey.domain.tag.entity.Tag;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
public class BoardDto {
    @Getter
    @Setter
//    @Builder
    @NoArgsConstructor
    public static class Post{
        private String boardTitle;
        private String BoardContent;
        private List<ImageDto.Post> boardImageUrl;
        private List<TagDto.Post> tags;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Patch{
        private long boardId;
        private String boardTitle;
        private String content;
        private List<ImageDto.Patch> boardImageUrl;
        private List<TagDto.Post> tags;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response{
        private long boardId;
        private String boardTitle;
        private String content;
        private long memberId;
        private String memberName;

        private String profileImageUrl;

        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;

        private int likeCount;
        private int commentCount;

        //TODO Tags 추가
        private List<TagDto.Info> tags;
    }


    @Getter
    @Setter
    @NoArgsConstructor
    public static class Recommand{
        private long boardId;
        private String boardTitle;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class ResponseDetail extends Response{
        private List<ImageDto.Response> boardImages;
        private List<BoardDto.Recommand> recommandBoards;
        private List<CommentBoard> comments;
    }
}