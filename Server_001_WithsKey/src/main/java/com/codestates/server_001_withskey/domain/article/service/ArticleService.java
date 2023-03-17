package com.codestates.server_001_withskey.domain.article.service;


import com.codestates.server_001_withskey.domain.article.entity.Article;
import com.codestates.server_001_withskey.domain.article.repository.ArticleRepository;
import com.codestates.server_001_withskey.global.advice.BusinessLogicException;
import com.codestates.server_001_withskey.global.advice.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ArticleService {
    private final ArticleRepository repository;

    public List<Article> findAllArticles(){
       return repository.findAll();
    }

    public Article findArticleById(long articleId){
        return repository.findById(articleId).orElseThrow(()-> new BusinessLogicException(ExceptionCode.ARTICLE_NOT_EXISTS));
    }


}
