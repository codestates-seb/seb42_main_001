package com.codestates.server_001_withskey.domain.tag.entity;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class TagBoard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long tagBoardId;

    @ManyToOne(fetch = FetchType.LAZY)
    private Board board;

    @ManyToOne(fetch = FetchType.LAZY)
    private Tag tag;

    public void setTag(Tag tag){
        this.tag = tag;
        if(!tag.getTagBoardList().contains(this)){
                tag.getTagBoardList().add(this);
        }
    }
}
