package com.codestates.server_001_withskey.domain.board.entity;
import com.codestates.server_001_withskey.domain.comment.entity.CommentBoard;
import com.codestates.server_001_withskey.domain.like.entity.LikeBoard;
import com.codestates.server_001_withskey.domain.tag.entity.TagBoard;
import com.codestates.server_001_withskey.global.auditable.Auditable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
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
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Board extends Auditable {
    @Id
    @GeneratedValue
    private long boardId;

    @Column(nullable = false)
    private String content;

    @Column
    private String boardImageUrl;

//    @ManyToOne
//    private Member member;

    // Like 1:N
    @OneToMany(mappedBy = "board", fetch = FetchType.LAZY)
    private List<CommentBoard> commentBoardList = new ArrayList<>();

    // Comment 1:N
    @OneToMany(mappedBy="board")
    private List<LikeBoard> likeBoardsList = new ArrayList<>();

    @OneToMany(mappedBy = "board")
    private List<TagBoard> tagBoardList = new ArrayList<>();

}
