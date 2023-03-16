package com.codestates.server_001_withskey.domain.drink.service;

import com.codestates.server_001_withskey.domain.drink.repository.DrinkRepository;

import com.codestates.server_001_withskey.domain.drink.dto.DrinkDto;
import com.codestates.server_001_withskey.domain.drink.repository.DrinkRepository;

import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import com.codestates.server_001_withskey.domain.tag.dto.TagDto;
import com.codestates.server_001_withskey.domain.tag.entity.Tag;
import com.codestates.server_001_withskey.domain.tag.entity.TagDrink;
import com.codestates.server_001_withskey.global.advice.BusinessLogicException;
import com.codestates.server_001_withskey.global.advice.ExceptionCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DrinkService {
    private DrinkRepository drinkRepository;

    public DrinkService(DrinkRepository drinkRepository) {
        this.drinkRepository = drinkRepository;
    }

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
}
