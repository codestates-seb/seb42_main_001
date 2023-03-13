package com.codestates.server_001_withskey.domain.drink.entity;

import com.codestates.server_001_withskey.domain.comment.entity.CommentDrink;
import com.codestates.server_001_withskey.domain.like.entity.LikeDrink;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Drink {
    @Id
    @GeneratedValue
    private long drinkId;

    @Column(nullable = false)
    private String drinkName;

    @Column(unique = true, nullable = false)
    private String drinkCode;

    @Column(nullable = false)
    private int drinkAbv;

    @Column(nullable = false)
    private String testingNote;

    @Column(nullable = false)
    private String drinkImageUrl;

    // Like 1:N
    @OneToMany(mappedBy = "drink", fetch = FetchType.LAZY)
    private List<LikeDrink> likeDrinksList = new ArrayList<>();

    // Comment 1:N
    @OneToMany(mappedBy = "drink", fetch = FetchType.LAZY)
    private List<CommentDrink> commentDrinkList = new ArrayList<>();

}
