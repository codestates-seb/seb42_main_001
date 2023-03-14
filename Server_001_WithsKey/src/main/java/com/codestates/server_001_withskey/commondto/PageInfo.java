package com.codestates.server_001_withskey.commondto;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class PageInfo {
    private int page;
    private int size;
    private int totalPage;
    private int totalElements;
}
