package com.codestates.server_001_withskey.commondto;


import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class MultiResponseDto <T, P>{
    T data;
    P likeList;
}
