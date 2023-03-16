package com.codestates.server_001_withskey.commondto;

public class DuoResponseDto <T, P>{
    T data;
    P pageInfo;

    public DuoResponseDto(T data, P pageInfo) {
        this.data = data;
        this.pageInfo = pageInfo;
    }
}
