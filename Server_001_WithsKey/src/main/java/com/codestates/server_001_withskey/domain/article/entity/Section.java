package com.codestates.server_001_withskey.domain.article.entity;

import javax.persistence.*;

@Entity
public class Section {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long sectionId;
    @ManyToOne
    @JoinColumn(name = "ARTICLE_ID")
    private Article article;
    @Column
    private String sectionTitle;
    @Column(length = 5000)
    private String sectionContent;
}
