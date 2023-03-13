package com.codestates.server_001_withskey.domain.snack.entity;

import com.codestates.server_001_withskey.domain.drink.entity.SnackDrink;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class Snack {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long snackId;

    private String snackKcal;

    private String snackInfo;

    private String snackImageUrl;

    @Column(nullable = false, unique = true)
    private String snackName;

    // SnackDrink 1:N
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "snackDrinkId")
    private List<SnackDrink> snackDrinkList = new ArrayList<>();

}
