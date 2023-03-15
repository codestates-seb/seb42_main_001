package com.codestates.server_001_withskey.domain.drink.service;

import com.codestates.server_001_withskey.domain.drink.repository.DrinkRepository;
import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import com.codestates.server_001_withskey.global.advice.BusinessLogicException;
import com.codestates.server_001_withskey.global.advice.ExceptionCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DrinkService {
    private DrinkRepository drinkRepository;

    public DrinkService(DrinkRepository drinkRepository) {
        this.drinkRepository = drinkRepository;
    }

    public Drink findDrink(long drinkId) {
        return findDrinkById(drinkId);
    }

    public Page<Drink> findAllDrink(int page, int size) {
        return drinkRepository.findAll(PageRequest.of(
                page, size,
                Sort.by("id").descending()
        ));
    }
    public Drink findDrinkById(long drinkId) {
        Optional<Drink> optionalDrink = drinkRepository.findById(drinkId);
        Drink findDrink = optionalDrink.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.DRINK_NOT_FOUND));
        return findDrink;
    }
}
