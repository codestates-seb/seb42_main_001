package com.codestates.server_001_withskey.domain.article.entity;

import lombok.Getter;
import lombok.Setter;

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
    private List<Section> sections;
}
