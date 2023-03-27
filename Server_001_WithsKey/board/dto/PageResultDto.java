package com.codestates.server_001_withskey.commondto;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import lombok.Data;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


@Data
public class PageResultDto<DTO, EN>{
    // repository에서 반환하는 Page<Entity> 처리

    // DTO 리스트
    private List<DTO> dtoList;

    //총 페이지 번호
    private int totalPage;

    //현재 페이지 번호
    private int page;
    //목록 사이즈
    private int size;

    //시작 페이지 번호, 끝 페이지 번호
    private int start, end;

    //이전, 다음
    private boolean prev, next;

    //페이지 번호  목록
    private List<Integer> pageList;

    // 화면 출력에 필요한 페이지 정보 구성
    public PageResultDto(Page<EN> result, Function<EN, DTO> fn){
        dtoList = result.stream()
            .map(fn).collect(Collectors.toList());
    }

    private void makePageList(Pageable pageable){

        this.page = pageable.getPageNumber() + 1; // 0부터 시작하므로 1을 추가
        this.size = pageable.getPageSize();

        //temp end page: 마지막 페이지 return
        int tempEnd = (int)(Math.ceil(page/10.0)) * 10;

        start = tempEnd - 9;

        prev = start > 1;

        end = totalPage > tempEnd ? tempEnd: totalPage;

        next = totalPage > tempEnd;

        pageList = IntStream.rangeClosed(start, end).boxed().collect(Collectors.toList());

    }


}
