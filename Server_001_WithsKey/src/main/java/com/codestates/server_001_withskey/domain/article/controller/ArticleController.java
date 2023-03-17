package com.codestates.server_001_withskey.domain.article.controller;


import com.codestates.server_001_withskey.domain.article.dto.ArticleDto;
import com.codestates.server_001_withskey.domain.article.entity.Article;
import com.codestates.server_001_withskey.domain.article.mapper.ArticleMapper;
import com.codestates.server_001_withskey.domain.article.service.ArticleService;
import com.codestates.server_001_withskey.global.advice.BusinessLogicException;
import com.codestates.server_001_withskey.global.advice.ExceptionCode;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;
import java.util.List;

@RequestMapping("/articles")
@RestController
@Slf4j
@RequiredArgsConstructor
public class ArticleController {
    private final ArticleService articleService;
    private final ArticleMapper articleMapper;

    @Transactional
    @GetMapping("/{article-id}")
    public ResponseEntity getArticle(@PathVariable("article-id") long articleId){
        Article article = articleService.findArticleById(articleId);
        ArticleDto.Detail detail = articleMapper.articleToDetail(article);

        return new ResponseEntity(detail, HttpStatus.OK);
    }

    @GetMapping
    @Transactional
    public ResponseEntity getArticles(){
        List<Article> articles = articleService.findAllArticles();
        List<ArticleDto.Response> responses = articleMapper.articlesToResponses(articles);

        return new ResponseEntity(responses, HttpStatus.OK);
    }

}
