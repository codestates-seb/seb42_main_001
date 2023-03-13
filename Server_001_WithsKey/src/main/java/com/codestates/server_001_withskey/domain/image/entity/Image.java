package com.codestates.server_001_withskey.domain.image.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long imageId;
    @Column
    private String fileName;
    @Column
    private String imgUrl;
}
