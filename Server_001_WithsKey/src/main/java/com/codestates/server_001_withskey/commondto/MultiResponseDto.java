package com.codestates.server_001_withskey.commondto;


import lombok.AllArgsConstructor;

@AllArgsConstructor
public class MultiResponseDto <T, P>{
    T data;
    P pageInfo;
}
