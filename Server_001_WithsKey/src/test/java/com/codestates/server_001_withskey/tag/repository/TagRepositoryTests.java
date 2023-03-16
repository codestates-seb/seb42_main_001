package com.codestates.server_001_withskey.tag.repository;

import com.codestates.server_001_withskey.domain.tag.entity.Tag;
import com.codestates.server_001_withskey.domain.tag.entity.TagBoard;
import com.codestates.server_001_withskey.domain.tag.repository.TagBoardRepository;
import com.codestates.server_001_withskey.domain.tag.repository.TagRepository;
import java.util.Arrays;
import java.util.List;
import javax.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class TagRepositoryTests {

//    @Autowired
//    private TagRepository repository;

    @Autowired
    private TagBoardRepository tbRepository;

//    @Test
//    public void testTagWithBoard(){
//        List<Object> result = repository.getTagWithBoard(1L);
//
//        for(Object arr:result){
//            System.out.println(Arrays.toString((Object[]) arr));
//        }
//    }

//    @Test
//    public void testFindTestBoard(){
//        List<Tag> result = repository.findTagWithBoard(1L);
//
//        for(Tag arr:result){
//            System.out.println(Arrays.toString(new Tag[]{arr}));
//        }
//    }

    @Test
    @Transactional
    public void testTagBoard(){
        /*
        1.List <TagBoard> 타입의 result를 선언해서
        2.레파지토리에 선언된 findBoardsByTag 메서드 선언하고
        3.tagId는 1을 준다
        4.향상된 for문에서
        5.arr에 result에 담긴 값을 프린트
        * */
        List<TagBoard> result = tbRepository.findBoardByTagBoard(1L);
        // 태그보드에서 태그 id가 1인 board 가져오기

        for(TagBoard arr:result){
            System.out.println(Arrays.toString(new TagBoard[]{arr}));
        }

        /*
    [TagBoard(tagBoardId=1, board=Board(boardId=1, content=내용, boardTitle=제목, imageList=[]))]
    [TagBoard(tagBoardId=2, board=Board(boardId=1, content=내용, boardTitle=제목, imageList=[]))]

    -----
    [TagBoard(tagBoardId=1, board=Board(boardId=1, content=내용, boardTitle=제목, imageList=[]))]
    [TagBoard(tagBoardId=2, board=Board(boardId=1, content=내용, boardTitle=제목, imageList=[]))]

        */


//        result = [1,2,3,4,5];
//        for(int arr: result){
//            System.out.println(arr+2);
        }
    }





    //    @Test
//    public void testBoards(){
//        List<Tag> response = repository.getTagWithBoards(1L);
//        for(Object arr : response){
//            System.out.println(Arrays.toString((Object[]) arr));
//        }
//    }

