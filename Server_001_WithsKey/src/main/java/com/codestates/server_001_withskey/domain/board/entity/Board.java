package com.codestates.server_001_withskey.domain.board.entity;

import com.codestates.server_001_withskey.domain.comment.entity.CommentBoard;
import com.codestates.server_001_withskey.domain.like.entity.LikeBoard;
import com.codestates.server_001_withskey.domain.member.entity.Member;
import com.codestates.server_001_withskey.domain.tag.entity.TagBoard;
import com.codestates.server_001_withskey.global.auditable.Auditable;
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
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = {"member","commentBoardList","likeBoardsList", "tagBoardList"})
public class Board extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardId;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private String boardTitle;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="MEMBER_ID")
    private Member member;



    // Like 1:N
    @OneToMany(mappedBy = "board", fetch = FetchType.LAZY)
    private List<CommentBoard> commentBoardList = new ArrayList<>();

    // Comment 1:N
    @OneToMany(mappedBy="board")
    private List<LikeBoard> likeBoardsList = new ArrayList<>();

    @OneToMany(mappedBy = "board")
    private List<TagBoard> tagBoardList = new ArrayList<>();


    public void setMember(Member member){
        this.member = member;
        if(!member.getBoards().contains(this)){
            member.getBoards().add(this);
        }
    }



}
