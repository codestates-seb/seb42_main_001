package com.codestates.server_001_withskey.domain.drink.service;

import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import com.codestates.server_001_withskey.domain.drink.repository.DrinkRepository;
import com.codestates.server_001_withskey.domain.tag.entity.Tag;
import com.codestates.server_001_withskey.domain.tag.entity.TagDrink;
import com.codestates.server_001_withskey.domain.tag.repository.TagDrinkRepository;
import com.codestates.server_001_withskey.global.advice.BusinessLogicException;
import com.codestates.server_001_withskey.global.advice.ExceptionCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
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

    public List<Drink> getBestDrinks(){
        List<Drink> drinks = drinkRepository.findAll();

        Collections.sort(drinks);



        return drinks.subList(0, 9);
    }
}
