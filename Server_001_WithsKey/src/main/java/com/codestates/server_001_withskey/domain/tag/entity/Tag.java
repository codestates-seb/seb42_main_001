package com.codestates.server_001_withskey.domain.tag.entity;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString(exclude = {"board","tagBoardList","tagDrinkList"})
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long tagId;

    @Column(nullable = false, unique = true)
    private String tag_name;

    @Column(nullable = false)
    private String tagInfo;


    @OneToMany(mappedBy = "tag")
    private List<TagBoard> tagBoardList = new ArrayList<>();

    @OneToMany(mappedBy = "tag")
    private List<TagDrink> tagDrinkList = new ArrayList<>();
}
