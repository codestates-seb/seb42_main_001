package com.codestates.server_001_withskey.domain.tag.entity;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import lombok.ToString;

@Entity
@Setter
@Getter
//@ToString(exclude = {"board","tag"}) // 원본
//@ToString(exclude = "board")
@ToString(exclude = "tag")
public class TagBoard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long tagBoardId;

    @ManyToOne
    @JoinColumn(name = "BOARD_ID")
    private Board board;

    @ManyToOne
    @JoinColumn(name = "TAG_ID")
    private Tag tag;

    public void setTag(Tag tag){
        this.tag = tag;
        if(!tag.getTagBoardList().contains(this)){
                tag.getTagBoardList().add(this);
        }
    }
}
