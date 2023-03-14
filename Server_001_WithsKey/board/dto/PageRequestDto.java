package com.codestates.server_001_withskey.commondto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

@Builder
@AllArgsConstructor
@Data
public class PageRequestDto {
    // 페이지 요청 처리(Pageable 타입 객체 생성)
    private int page;
    private int size;

    public PageRequestDto(){
        this.page=1;
        this.size=30;
    }

    public Pageable getPageable(Sort sort){
        return PageRequest.of(page-1, size, sort);
    }
}
