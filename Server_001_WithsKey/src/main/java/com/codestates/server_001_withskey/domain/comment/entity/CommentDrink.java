package com.codestates.server_001_withskey.domain.comment.entity;

import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class CommentDrink {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentDrinkId;

    @ManyToOne(fetch = FetchType.LAZY)
    private Drink drink;

//    @ManyToOne
//    private Member member;

}
