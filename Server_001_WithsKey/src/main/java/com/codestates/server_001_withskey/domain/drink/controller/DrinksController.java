package com.codestates.server_001_withskey.domain.drink.controller;



import com.codestates.server_001_withskey.commondto.DuoResponseDto;
import com.codestates.server_001_withskey.commondto.MultiResponseDto;
import com.codestates.server_001_withskey.domain.board.dto.BoardDto;
import com.codestates.server_001_withskey.domain.comment.entity.CommentDrink;
import com.codestates.server_001_withskey.domain.comment.mapper.CommentDrinkMapper;
import com.codestates.server_001_withskey.domain.comment.service.CommentDrinkService;
import com.codestates.server_001_withskey.domain.drink.service.DrinkService;

import com.codestates.server_001_withskey.domain.drink.mapper.DrinkMapper;

import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import com.codestates.server_001_withskey.domain.drink.dto.DrinkDto;
import com.codestates.server_001_withskey.domain.drink.tastingNote.dto.TastingNoteDto;
import com.codestates.server_001_withskey.domain.drink.tastingNote.mapper.TastingNoteMapper;
import com.codestates.server_001_withskey.domain.like.service.LikeDrinkService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.constraints.Positive;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@Validated
@Slf4j
@RequestMapping("/drinks")
@RequiredArgsConstructor
public class DrinksController {

    private final DrinkService drinkService;
    private final DrinkMapper mapper;
    private final CommentDrinkService commentDrinkService;
    private final CommentDrinkMapper commentDrinkMapper;
    private final TastingNoteMapper tastingNoteMapper;
    private final LikeDrinkService likeDrinkService;



    @GetMapping("/{drink-id}")
    @Transactional
    public ResponseEntity getDrink(@PathVariable("drink-id")@Positive long drinkId) {
        Drink drink = drinkService.findDrink(drinkId);

        DrinkDto.ResponseDetail response = mapper.drinkToDrinkResponseDetail(drink);

        //Set Comments
        List<CommentDrink> commentDrinks = commentDrinkService.getCommentByDrink(drink);
        response.setCommentDrinks(commentDrinkMapper.commentsToResponses(commentDrinks));

        //Set TastingNote
        TastingNoteDto.Response tastingNote = tastingNoteMapper.tastingNoteToResponse(drink.getTastingNote());
        response.setTastingNote(tastingNote);


        return new ResponseEntity(response, HttpStatus.OK);
    }

    @GetMapping
    @Transactional
    public ResponseEntity getDrinks() {
        List<Drink> drinks = drinkService.findAllDrink();
        List<DrinkDto.Response> responses = mapper.drinksToResponses(drinks);
        List<DrinkDto.Short> likeList = new ArrayList<>();
        // 멤버가 로그인한 상태라면
        try {
            Long memberId = Long.valueOf(String.valueOf(SecurityContextHolder.getContext().getAuthentication().getPrincipal()));
            likeList = likeDrinkService.getLikeDrinksByMemberId(memberId)
                    .stream()
                    .map(drink -> {
                        DrinkDto.Short drinkShort = new DrinkDto.Short();
                        drinkShort.setDrinkId(drink.getDrinkId());
                        drinkShort.setDrinkName(drink.getDrinkName());
                        return drinkShort;
                    }).collect(Collectors.toList());
        } catch (Exception e){}

        return new ResponseEntity(new DuoResponseDto<>(responses, likeList), HttpStatus.OK);
    }
}
