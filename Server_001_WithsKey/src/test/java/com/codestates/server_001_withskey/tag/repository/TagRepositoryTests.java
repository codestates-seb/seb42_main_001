package com.codestates.server_001_withskey.tag.repository;

import com.codestates.server_001_withskey.domain.tag.entity.Tag;
import com.codestates.server_001_withskey.domain.tag.entity.TagBoard;
import com.codestates.server_001_withskey.domain.tag.entity.TagDrink;
import com.codestates.server_001_withskey.domain.tag.repository.TagBoardRepository;
import com.codestates.server_001_withskey.domain.tag.repository.TagDrinkRepository;
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
    private TagBoardRepository tagBoardRepository;

    @Autowired
    private TagDrinkRepository tagDrinkRepository;

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
        List<TagBoard> result = tagBoardRepository.findBoardByTagBoard(1L);

        for(TagBoard arr:result){
            System.out.println(Arrays.toString(new TagBoard[]{arr}));
        }
    }

    @Test
    @Transactional
    public void testTagWithDrinkAndBoard(){

        List<TagDrink> drinkResult = tagDrinkRepository.findDrinkByTagDrink(1L);
        List<TagBoard> boardResult = tagBoardRepository.findBoardByTagBoard(1L);


        for(TagDrink arr:drinkResult){
            System.out.println(Arrays.toString(new TagDrink[]{arr}));
        }
        for(TagBoard arr:boardResult){
            System.out.println(Arrays.toString(new TagBoard[]{arr}));
        }
    }

    @Test
    @Transactional
    public void testTagDrink(){
        List<TagDrink> drinkResult = tagDrinkRepository.findDrinkByTagDrink(1L);

        for(TagDrink arr:drinkResult){
            System.out.println(Arrays.toString(new TagDrink[]{arr}));
        }
    }
}





    //    @Test
//    public void testBoards(){
//        List<Tag> response = repository.getTagWithBoards(1L);
//        for(Object arr : response){
//            System.out.println(Arrays.toString((Object[]) arr));
//        }
//    }

