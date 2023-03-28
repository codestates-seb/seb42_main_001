package com.codestates.server_001_withskey.domain.member.entity;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Service;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Member {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    long memberId;

    @Column
    @Email
    private String email;

    @Column
    private String displayName;

    @Column
    private String phoneNumber;

    @Column
    private String aboutMe;

    @Column
    private String profilePicture;

    @Column
    private String oauthType;

    @ElementCollection
    private List<String> roles = new ArrayList<>();

    @OneToMany(mappedBy = "member",cascade = CascadeType.ALL)
    List<Board> boards = new ArrayList<>();

    public Member (String email) {
        this.email = email;
    }
    public Member (String email, String displayName) {
        this.email = email;
        this.displayName = displayName;
    }
}
