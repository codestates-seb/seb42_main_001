package com.codestates.server_001_withskey.domain.tag.entity;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long tagId;

    @Column(nullable = false, unique = true)
    private String tag_name;

    @Column(nullable = false)
    private String tagInfo;

//    @OneToMany(mappedBy="tagId")
//    private List<Tag> tagList = new ArrayList<>();
    // tag-board 1:N
    @OneToMany(mappedBy = "tag")
    private List<TagBoard> tagBoardList = new ArrayList<>();

    @OneToMany(mappedBy = "tag")
    private List<TagDrink> tagDrinkList = new ArrayList<>();
}
