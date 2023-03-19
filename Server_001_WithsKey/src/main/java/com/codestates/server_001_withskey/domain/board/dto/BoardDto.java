package com.codestates.server_001_withskey.domain.board.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.codestates.server_001_withskey.domain.comment.dto.CommentBoardDto;
import com.codestates.server_001_withskey.domain.image.dto.ImageDto;
import com.codestates.server_001_withskey.domain.tag.dto.TagDto;
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
    public static class Patch {
        private long boardId;
        private String boardTitle;
        private String boardContent;
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

        private List<TagDto.Info> tags;

    }


    @Getter
    @Setter
    @NoArgsConstructor
    public static class Short {
        private long boardId;
        private String boardTitle;
    }


    @Getter
    @Setter
    @NoArgsConstructor
    public static class ResponseDetail extends Response{
        private List<ImageDto.Response> boardImages;
        private List<Short> recommandBoards;
        private List<CommentBoardDto.Response> comments;
    }
}
