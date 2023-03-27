package com.codestates.server_001_withskey.domain.article.dto;

import lombok.Getter;
import lombok.Setter;

public class SectionDto {

    @Getter
    @Setter
    public static class Response{
        private String sectionTitle;
        private String sectionContent;
    }
}
