package com.codestates.server_001_withskey.domain.like.entity;

import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class LikeDrink {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long likeDrinkId;

    @ManyToOne(fetch = FetchType.LAZY)
    private Drink drink;

    @Column
    private long memberId;

    public LikeDrink(Drink drink, long memberId) {
        this.drink = drink;
        this.memberId = memberId;
    }
}
