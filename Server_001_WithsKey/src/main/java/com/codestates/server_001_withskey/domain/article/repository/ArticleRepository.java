package com.codestates.server_001_withskey.domain.article.repository;

import com.codestates.server_001_withskey.domain.article.controller.ArticleController;
import com.codestates.server_001_withskey.domain.article.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Article, Long> {
}
