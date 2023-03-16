package com.codestates.server_001_withskey.domain.article.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

public class ArticleDto {

    @Getter
    @Setter
    public static class Response{
        private long articleId;
        private String aricleTitle;
    }

    @Getter
    @Setter
    public static class Detail extends Response{
        private List<SectionDto.Response> sectionList;
    }
}
