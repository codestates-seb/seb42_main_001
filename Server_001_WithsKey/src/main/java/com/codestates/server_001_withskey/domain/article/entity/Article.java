package com.codestates.server_001_withskey.domain.article.entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import org.springframework.data.annotation.Id;
import org.springframework.security.core.Transient;

@Transient
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
