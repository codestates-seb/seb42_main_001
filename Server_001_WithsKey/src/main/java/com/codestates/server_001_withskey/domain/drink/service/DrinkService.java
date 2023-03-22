package com.codestates.server_001_withskey.domain.drink.service;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.drink.repository.DrinkRepository;

import com.codestates.server_001_withskey.domain.drink.dto.DrinkDto;
import com.codestates.server_001_withskey.domain.drink.repository.DrinkRepository;

import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import com.codestates.server_001_withskey.domain.tag.dto.TagDto;
import com.codestates.server_001_withskey.domain.tag.entity.Tag;
import com.codestates.server_001_withskey.domain.tag.entity.TagBoard;
import com.codestates.server_001_withskey.domain.tag.entity.TagDrink;
import com.codestates.server_001_withskey.domain.tag.repository.TagDrinkRepository;
import com.codestates.server_001_withskey.global.advice.BusinessLogicException;
import com.codestates.server_001_withskey.global.advice.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DrinkService {
    private final DrinkRepository drinkRepository;
    private final TagDrinkRepository tagDrinkRepository;


    public Drink findDrink(long drinkId) {
        Optional<Drink> optionalDrink = drinkRepository.findById(drinkId);
        Drink findDrink =
                optionalDrink.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.DRINK_NOT_FOUND));
        return findDrink;
    }

    public List<Drink> findAllDrink() {
        return drinkRepository.findAll();
    }
    public Drink findDrinkById(long drinkId) {
        Optional<Drink> optionalDrink = drinkRepository.findById(drinkId);
        Drink findDrink = optionalDrink.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.DRINK_NOT_FOUND));
        return findDrink;
    }

    public List<Drink> findRecommandDrinksByTag(Drink drink){
        List<Tag> tags = drink.getTagDrinkList().stream()
                .map(tagDrink -> {
                    return tagDrink.getTag();
                }).collect(Collectors.toList());

        List<TagDrink> tagDrinkList = new ArrayList<>();
        for(Tag tag : tags){
            if(tagDrinkList.size() >= 6){
                break;
            }
            tagDrinkList.addAll(tagDrinkRepository.findTagBoardsByTag(tag));
        }

        return tagDrinkList.stream()
                .map(tagDrink -> {
                    return tagDrink.getDrink();
                }).filter(drink1 -> {
                    return drink1 != drink;
                }).limit(10)
                .collect(Collectors.toList());
    }

//    public List<Board> findRecommandBoardsByTag(Board board){
//        //관련 태그 가져오기
//        List<Tag> tags = board.getTagBoardList().stream()
//                .map(tagBoard -> {
//                    return tagBoard.getTag();
//                }).collect(Collectors.toList());
//
//        //관련 태그 관련된 TagBoard 가져오기.
//        List<TagBoard> tagBoardList = new ArrayList<>();
//        for(Tag tag : tags){
//            if (tagBoardList.size() >= 6){
//                break;
//            }
//            tagBoardList.addAll(tagBoardRepository.findTagBoardsByTag(tag));
//        }
//
//        //TagBoard에서 게시글들 가져오기 + 중복제거 및 개수제한 설정
//        return tagBoardList.stream()
//                .map(tagBoard -> {
//                    return tagBoard.getBoard();
//                }).filter( board1 -> {
//                    return board1 != board;
//                }).distinct()
//                .limit(10)
//                .collect(Collectors.toList());
//    }
}
