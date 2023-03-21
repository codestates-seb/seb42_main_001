package com.codestates.server_001_withskey.domain.drink.mapper;

import com.codestates.server_001_withskey.domain.drink.dto.DrinkDto;
import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import com.codestates.server_001_withskey.domain.member.snack.dto.SnackDto;
import com.codestates.server_001_withskey.domain.member.snack.entity.Snack;
import com.codestates.server_001_withskey.domain.member.snack.mapper.SnackMapper;
import com.codestates.server_001_withskey.domain.tag.dto.TagDto;
import com.codestates.server_001_withskey.domain.tag.entity.Tag;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@Component
@RequiredArgsConstructor
public class DrinkMapper {
    private final SnackMapper snackMapper;

    public DrinkDto.ResponseDetail drinkToDrinkResponseDetail(Drink drink) {

        DrinkDto.ResponseDetail responseDetail = new DrinkDto.ResponseDetail();

        responseDetail.setDrinkId(drink.getDrinkId());
        responseDetail.setDrinkAbv(drink.getDrinkAbv());
        responseDetail.setDrinkName(drink.getDrinkName());
        responseDetail.setLikeCount(drink.getLikeDrinksList().size());
        responseDetail.setDrinkImageUrl(drink.getDrinkImageUrl());
        responseDetail.setPriceRank(drink.getPriceRank());

        responseDetail.setTags(drink.getTagDrinkList().stream()
                .map(tagDrink -> {
                    TagDto.Info tagInfo = new TagDto.Info();
                    tagInfo.setTagId(tagDrink.getTag().getTagId());
                    tagInfo.setTagName(tagDrink.getTag().getTag_name());
                    return tagInfo;
                }).collect(Collectors.toList()));

        List<Snack> snacks = drink.getSnackDrinks().stream()
                .map(snackDrink -> {
                    return snackDrink.getSnack();
                }).collect(Collectors.toList());
        List<SnackDto.Response> snackResponse = snackMapper.snacksToResponses(snacks);
        responseDetail.setSnacks(snackResponse);




        return responseDetail;
    }
    public List<DrinkDto.Response> drinksToResponses(List<Drink> drinks) {

        return drinks.stream()
                .map(drink -> {
                    return drinkToResponse(drink);
                }).collect(Collectors.toList());
    }

    public DrinkDto.Response drinkToResponse(Drink drink){
        return DrinkDto.Response.builder()
                .drinkName(drink.getDrinkName())
                .drinkImageUrl(drink.getDrinkImageUrl())
                .drinkAbv(drink.getDrinkAbv())
                .drinkId(drink.getDrinkId())
                .priceRank(drink.getPriceRank())
                .tags(drink.getTagDrinkList().stream()
                        .map(tagDrink -> {
                            TagDto.Info tagInfo = new TagDto.Info();

                            Tag tag = tagDrink.getTag();
                            tagInfo.setTagId(tag.getTagId());
                            tagInfo.setTagName(tag.getTag_name());

                            return tagInfo;
                        })
                        .collect(Collectors.toList()))
                .build();
    }

    public DrinkDto.Short drinkToShort(Drink drink){
        DrinkDto.Short drinkShort = new DrinkDto.Short();
        drinkShort.setDrinkName(drink.getDrinkName());
        drinkShort.setDrinkId(drink.getDrinkId());
        return drinkShort;
    }

    public List<DrinkDto.Short> drinksToShorts(List<Drink> drinks){
        return drinks.stream()
                .map(drink -> {
                    return drinkToShort(drink);
                }).collect(Collectors.toList());
    }


    // Todo
//     List<TastingNote>
//     List<tag>
//     List<Snacks>

}
