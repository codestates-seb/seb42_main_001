package com.codestates.server_001_withskey.domain.drink.entity;

import com.codestates.server_001_withskey.domain.comment.entity.CommentDrink;
import com.codestates.server_001_withskey.domain.like.entity.LikeDrink;
import com.codestates.server_001_withskey.global.auditable.Auditable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Drink extends Auditable {
    @Id
    @GeneratedValue
    private long drinkId;

    @Column(nullable = false)
    private String drinkName;

    @Column(unique = true, nullable = false)
    private String drinkCode;

    @Column(unique = true, nullable = false)
    private String priceRank;

    @Column(nullable = false)
    private int drinkAbv;

    @Column(nullable = false)
    private String testingNote;

    @Column(nullable = false)
    private String drinkImageUrl; //얘는 보드랑 다르게 살릴 수도 있읍니다.

    // Like 1:N
    @OneToMany(mappedBy = "drink", fetch = FetchType.LAZY)
    private List<LikeDrink> likeDrinksList = new ArrayList<>();

    // Comment 1:N
    @OneToMany(mappedBy = "drink", fetch = FetchType.LAZY)
    private List<CommentDrink> commentDrinkList = new ArrayList<>();
}
