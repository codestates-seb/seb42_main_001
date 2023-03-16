package com.codestates.server_001_withskey.domain.drink.tastingNote;

import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Entity
@Setter
@NoArgsConstructor
public class TastingNote {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    long tastingNoteId;
    @Column
    long Sweet;
    @Column
    long Smoky;
    @Column
    long Citrus;
    @Column
    long Herbal;
    @Column
    long Tropical;

    // Drink 랑 1:1,
    @OneToOne
    @JoinColumn(name="DRINK_ID")
    // 1:1 관계에서 @JoinColumn은 주가 되는 쪽에 붙인다.
    private Drink drink;
}
