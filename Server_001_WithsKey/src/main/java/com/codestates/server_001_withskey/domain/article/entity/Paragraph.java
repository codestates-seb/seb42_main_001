package com.codestates.server_001_withskey.domain.article.entity;

import javax.persistence.*;

@Entity
public class Paragraph {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long paragraphId;
    @ManyToOne
    @JoinColumn(name = "ARTICLE_ID")
    private Article article;
    @Column
    private String sectionTitle;
    @Column
    private String sectionContent;
}
