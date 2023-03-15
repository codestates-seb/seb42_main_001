package com.codestates.server_001_withskey.domain.image.entity;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.member.entity.Member;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long imageId;
    @Column
    private String fileName;
    @Column
    private String imgUrl;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "BOARD_ID")
    private Board board;

    @Builder
    public Image(String fileName, String imgUrl, Board board) {
        this.fileName = fileName;
        this.imgUrl = imgUrl;
//        this.board = board;
    }
}
