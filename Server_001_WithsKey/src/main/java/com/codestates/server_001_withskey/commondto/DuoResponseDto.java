package com.codestates.server_001_withskey.commondto;

import lombok.Getter;

@Getter
public class DuoResponseDto <T, P>{
    T data;
    P likeList;

    public DuoResponseDto(T data, P pageInfo) {
        this.data = data;
        this.likeList = pageInfo;
    }
}
