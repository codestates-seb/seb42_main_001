package com.codestates.server_001_withskey.commondto;


import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class MultiResponseDto <T, L, P>{
    // 3개 이상의 인자를 보낼 때 사용
    T data;
    L likeList;

    P pageInfo;


}
