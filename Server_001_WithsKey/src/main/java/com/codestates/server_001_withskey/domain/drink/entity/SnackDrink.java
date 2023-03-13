package com.codestates.server_001_withskey.domain.drink.entity;

import com.codestates.server_001_withskey.domain.snack.entity.Snack;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class SnackDrink {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long snackDrinkId;

    @ManyToOne(fetch = FetchType.LAZY)
    private Drink drink;

    @ManyToOne(fetch = FetchType.LAZY)
    private Snack snack;



}
