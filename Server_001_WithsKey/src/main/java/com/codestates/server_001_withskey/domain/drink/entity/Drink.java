package com.codestates.server_001_withskey.domain.drink.entity;

import com.codestates.server_001_withskey.domain.comment.entity.CommentDrink;
import com.codestates.server_001_withskey.domain.drink.tastingNote.TastingNote;
import com.codestates.server_001_withskey.domain.like.entity.LikeDrink;
import com.codestates.server_001_withskey.domain.tag.entity.TagDrink;
import com.codestates.server_001_withskey.global.auditable.Auditable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

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

    @Column(nullable = false)
    private String priceRank;

    @Column(nullable = false)
    private int drinkAbv;

    @Column(nullable = false, length = 100000)
    private String drinkImageUrl; //얘는 보드랑 다르게 살릴 수도 있읍니다.

    // Like 1:N
    @OneToMany(mappedBy = "drink", fetch = FetchType.LAZY)
    private List<LikeDrink> likeDrinksList = new ArrayList<>();

    @OneToMany(mappedBy = "drink", fetch = FetchType.EAGER)
    private List<TagDrink> tagDrinkList = new ArrayList<>();

    // Comment 1:N
    @OneToMany(mappedBy = "drink")
    private List<CommentDrink> commentDrinkList = new ArrayList<>();

    // TastingNote 1:1
    @OneToOne(mappedBy = "drink")
    private TastingNote tastingNote;

    @OneToMany(mappedBy = "drink")
    private List<SnackDrink> snackDrinks;
}
//1:1에서는 주 테이블에 @JoinColum(name="부 테이블의 PK명")을 붙인다.
