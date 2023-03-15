package com.codestates.server_001_withskey.domain.drink.Mapper;

import com.codestates.server_001_withskey.domain.comment.dto.CommentDrinkDto;
import com.codestates.server_001_withskey.domain.comment.entity.CommentDrink;
import com.codestates.server_001_withskey.domain.drink.Dto.DrinkDto;
import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import com.codestates.server_001_withskey.domain.tag.dto.TagDto;
import com.codestates.server_001_withskey.domain.tag.entity.Tag;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@Component
public class DrinkMapper {
    public DrinkDto.Response drinkToDrinkResponseDetail(Drink drink) {
        List<CommentDrink> commentDrinkList = drink.getCommentDrinkList();

        DrinkDto.Response response = DrinkDto.Response
                .builder()
                .drinkId(drink.getDrinkId())
                .drinkName(drink.getDrinkName())
                .priceRank(drink.getPriceRank())
                .drinkAbv(drink.getDrinkAbv())
                .drinkImageUrl(drink.getDrinkImageUrl())
                .build();

        return response;
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


    // Todo
//     List<TastingNote>
//     List<tag>
//     List<Snacks>

    List<CommentDrinkDto.Response> commentsToCommentDrinkDtoResponse(List<CommentDrink> commentDrinkList) {

        return commentDrinkList
                .stream()
                .map(commentDrink -> CommentDrinkDto.Response
                        .builder()
                        .createdAt(commentDrink.getCreateAt())
                        .commentId(commentDrink.getCommentId())
                        .memberId(commentDrink.getMemberId())
                        .displayName(commentDrink.getDisplayName())
                        .content(commentDrink.getContent())
                        .build())
                .collect(Collectors.toList());
    }
}
