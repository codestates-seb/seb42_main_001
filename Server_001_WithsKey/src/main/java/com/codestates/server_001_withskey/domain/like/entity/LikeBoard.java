package com.codestates.server_001_withskey.domain.like.entity;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.member.entity.Member;

import javax.persistence.*;

@Entity
public class LikeBoard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long likeBoardId;

    @ManyToOne(fetch = FetchType.LAZY)
    private Board board;

    @Column
    private long memberId;
}
