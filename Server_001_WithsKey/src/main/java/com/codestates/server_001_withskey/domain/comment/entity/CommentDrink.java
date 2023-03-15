package com.codestates.server_001_withskey.domain.comment.entity;

import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import com.codestates.server_001_withskey.global.auditable.Auditable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class CommentDrink extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentDrinkId;

    @ManyToOne(fetch = FetchType.LAZY)
    private Drink drink;

    @Column
    private long commentId;

    @Column
    private long memberId;

    @Column
    private String displayName;

    @Column
    private String profileImageUrl;

    @Column
    private String Content;

//    @ManyToOne
//    private Member member;

}
