package com.codestates.server_001_withskey.domain.tag.entity;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class TagBoard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long tagBoardId;

    @ManyToOne(fetch = FetchType.LAZY)
    private Board board;

    @ManyToOne(fetch = FetchType.LAZY)
    private Tag tag;
}
