package com.codestates.server_001_withskey.commondto;

import lombok.Getter;

@Getter
public class DuoResponseDto <T, P>{
    //2개 이상 데이터를 Response하는 경우 사용함
    T data;
    P likeList;

    public DuoResponseDto(T data, P pageInfo) {
        this.data = data;
        this.likeList = pageInfo;
    }
}
