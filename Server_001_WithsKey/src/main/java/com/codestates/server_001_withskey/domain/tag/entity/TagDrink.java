package com.codestates.server_001_withskey.domain.tag.entity;
import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class TagDrink {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long tagBoardId;

    @ManyToOne(fetch = FetchType.LAZY)
    private Drink drink;

    @ManyToOne(fetch = FetchType.LAZY)
    private Tag tag;
}
