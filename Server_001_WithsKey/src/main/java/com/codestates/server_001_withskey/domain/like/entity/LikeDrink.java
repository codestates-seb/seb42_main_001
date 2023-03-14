package com.codestates.server_001_withskey.domain.like.entity;

import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class LikeDrink {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long likeDrinkId;

    @ManyToOne(fetch = FetchType.LAZY)
    private Drink drink;
}
