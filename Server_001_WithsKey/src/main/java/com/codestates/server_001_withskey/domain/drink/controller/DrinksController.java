package com.codestates.server_001_withskey.domain.drink.controller;


import com.codestates.server_001_withskey.commondto.MultiResponseDto;
import com.codestates.server_001_withskey.commondto.PageInfo;
import com.codestates.server_001_withskey.domain.drink.mapper.DMapper;
import com.codestates.server_001_withskey.domain.drink.service.DrinkService;
import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import com.codestates.server_001_withskey.domain.drink.dto.DrinkDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@Validated
@Slf4j
@RequestMapping("/drinks")
public class DrinksController {

    private final DrinkService drinkService;
    private final DMapper mapper;

    public DrinksController(DrinkService drinkService,
                            DMapper mapper) {
        this.drinkService = drinkService;
        this.mapper = mapper;
    }

    @GetMapping("/{drink-id}")
    public ResponseEntity getDrink(@PathVariable("drink-id")@Positive long drinkId) {
        Drink drink = drinkService.findDrink(drinkId);
        DrinkDto.Response response = mapper.drinkToDrinkResponse(drink);
        return new ResponseEntity(response, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getDrinks(@Positive @RequestParam int page,
                                    @Positive @RequestParam int size) {
        Page<Drink> DrinkPage = drinkService.findAllDrink(page-1, size);
        PageInfo pageInfo = new PageInfo(DrinkPage.getNumber(), DrinkPage.getSize(), (int) DrinkPage.getTotalElements(), DrinkPage.getTotalPages());
        List<Drink> drinks = DrinkPage.getContent();
        List<DrinkDto.Response> responses = mapper.drinksToDrinkResponse(drinks);
        return new ResponseEntity(new MultiResponseDto<>(responses, pageInfo), HttpStatus.OK);
    }
}
