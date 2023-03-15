package com.codestates.server_001_withskey.domain.article.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.parameters.P;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long articleId;

    @Column
    private String title;

    @OneToMany(mappedBy = "article")
    private List<Paragraph> paragraphs;
}
