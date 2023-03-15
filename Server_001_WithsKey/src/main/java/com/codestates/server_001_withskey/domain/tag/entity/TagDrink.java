package com.codestates.server_001_withskey.domain.tag.entity;
import com.codestates.server_001_withskey.domain.drink.entity.Drink;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class TagDrink {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long tagBoardId;

    @ManyToOne
    private Drink drink;

    @ManyToOne
    private Tag tag;
}
