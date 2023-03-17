package com.codestates.server_001_withskey.domain.article.mapper;


import com.codestates.server_001_withskey.domain.article.dto.ArticleDto;
import com.codestates.server_001_withskey.domain.article.dto.SectionDto;
import com.codestates.server_001_withskey.domain.article.entity.Article;
import com.codestates.server_001_withskey.domain.article.entity.Section;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ArticleMapper {

    public List<ArticleDto.Response> articlesToResponses(List<Article> articles){
        return articles.stream()
                .map(article -> {
                    return articleToResponse(article);
                }).collect(Collectors.toList());
    }

    public ArticleDto.Response articleToResponse(Article article){
        ArticleDto.Response response = new ArticleDto.Response();

        response.setArticleId(article.getArticleId());
        response.setAricleTitle(article.getTitle());

        return response;
    }

    public ArticleDto.Detail articleToDetail(Article article){
        ArticleDto.Detail detail = new ArticleDto.Detail();

        detail.setArticleId(article.getArticleId());
        detail.setAricleTitle(article.getTitle());

        List<SectionDto.Response> sectionList = article.getSections()
                        .stream().map(section -> {
                            SectionDto.Response response = new SectionDto.Response();
                            response.setSectionTitle(section.getSectionTitle());
                            response.setSectionContent(section.getSectionContent());

                            return response;
                }).collect(Collectors.toList());

        detail.setSectionList(sectionList);

        return detail;
    }

    public List<ArticleDto.Detail> articlesToDetails(List<Article> articles){
        return articles.stream()
                .map(article -> {
                    return articleToDetail(article);
                }).collect(Collectors.toList());
    }
}
