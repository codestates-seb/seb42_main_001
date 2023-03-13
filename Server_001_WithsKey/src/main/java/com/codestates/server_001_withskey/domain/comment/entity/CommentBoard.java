package com.codestates.server_001_withskey.domain.comment.entity;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import com.codestates.server_001_withskey.domain.member.entity.Member;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class CommentBoard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentBoardId;

    @ManyToOne(fetch = FetchType.LAZY)
    private Board board;

    @ManyToOne
    private Member member;
}
