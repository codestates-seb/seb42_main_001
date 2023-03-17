package com.codestates.server_001_withskey.domain.like.entity;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class LikeBoard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long likeBoardId;

    @ManyToOne(fetch = FetchType.LAZY)
    private Board board;

    @Column
    private long memberId;

    public LikeBoard(Board board, long memberId) {
        this.board = board;
        this.memberId = memberId;
    }
}
