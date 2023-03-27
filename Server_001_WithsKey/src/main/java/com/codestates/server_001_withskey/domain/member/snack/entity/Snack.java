package com.codestates.server_001_withskey.domain.member.snack.entity;

import com.codestates.server_001_withskey.domain.drink.entity.SnackDrink;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
@Getter
@Setter
public class Snack {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long snackId;

    private String snackKcal;

    private String snackInfo;

    private String snackImageUrl; //초기 데이터 대상이기 때문에 url 살릴 듯 합니다.

    @Column(nullable = false, unique = true)
    private String snackName;

    // SnackDrink 1:N
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "snackDrinkId")
    private List<SnackDrink> snackDrinkList = new ArrayList<>();

}
