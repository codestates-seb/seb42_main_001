package com.codestates.server_001_withskey.domain.comment.entity;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.global.auditable.Auditable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class CommentBoard extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentBoardId;

    @ManyToOne(fetch = FetchType.LAZY)
    private Board board;

    @Column
    private long memberId;

    @Column
    private String displayName;

    @Column
    private String commentContent;
}
