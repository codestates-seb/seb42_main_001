package com.codestates.server_001_withskey.domain.drink.entity;

import com.codestates.server_001_withskey.domain.member.snack.entity.Snack;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class SnackDrink {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long snackDrinkId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "DRINK_ID")
    private Drink drink;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SNACK_ID")
    private Snack snack;

}
