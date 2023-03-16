package com.codestates.server_001_withskey.domain.tag.entity;
import com.codestates.server_001_withskey.domain.drink.entity.Drink;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class TagDrink {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long tagDrinkId;

    @ManyToOne
    @JoinColumn(name = "DRINK_ID")
    private Drink drink;

    @ManyToOne
    @JoinColumn(name = "TAG_ID")
    private Tag tag;

    public void setTag(Tag tag) {
        this.tag = tag;
        if (!tag.getTagDrinkList().contains(this)) {
            tag.getTagDrinkList().add(this);
        }
    }
}
