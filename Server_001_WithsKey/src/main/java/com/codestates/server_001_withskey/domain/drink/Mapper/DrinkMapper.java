package com.codestates.server_001_withskey.domain.drink.Mapper;

import com.codestates.server_001_withskey.domain.comment.Dto.CommentDrinkDto;
import com.codestates.server_001_withskey.domain.comment.entity.CommentDrink;
import com.codestates.server_001_withskey.domain.drink.Dto.DrinkDto;
import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import lombok.Getter;
import lombok.Setter;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;


@Getter
@Setter
@Component
public class DrinkMapper {

    //        TODO List<TastingNote>
//        TODO List<tag>
//        TODO  List<Snacks>

    public DrinkDto.Response drinkToDrinkResponse (Drink drink) {
        List<CommentDrink> commentDrinkList = drink.getCommentDrinkList();

        DrinkDto.Response response = DrinkDto.Response
                .builder()
                .drinkId(drink.getDrinkId())
                .drinkName(drink.getDrinkName())
                .priceRank(drink.getPriceRank())
                .drinkAbv(drink.getDrinkAbv())
                .drinkImageUrl(drink.getDrinkImageUrl())
                .commentDrinks(commentsToCommentDrinkDtoResponse(commentDrinkList))
                .build();

        return response;
    }
    public List<DrinkDto.Response> drinksToDrinkResponse(List<Drink> drinks) {

        return drinks
                .stream()
                .map(drink -> {
                    List<CommentDrinkDto.Response> commentDrinkDtoResponses
                            = commentsToCommentDrinkDtoResponse(drink.getCommentDrinkList());
                    return DrinkDto.Response
                            .builder()
                            .drinkId(drink.getDrinkId())
                            .drinkImageUrl(drink.getDrinkImageUrl())
                            .priceRank(drink.getPriceRank())
                            .commentDrinks(commentDrinkDtoResponses)
                            .build();
                }).collect(Collectors.toList());
    }

//         List<TastingNote>
//         List<tag>
//         List<Snacks>

//    }
       public List<CommentDrinkDto.Response> commentsToCommentDrinkDtoResponse(List<CommentDrink> commentDrinkList) {

            return commentDrinkList
                    .stream()
                    .map(commentDrink -> CommentDrinkDto.Response
                            .builder()
                            .createdAt(commentDrink.getCreateAt())
                            .commentId(commentDrink.getCommentId())
                            .memberId(commentDrink.getMemberId())
                            .displayName(commentDrink.getDisplayName())
                            .profileImageUrl(commentDrink.getProfileImageUrl())
                            .build())
                    .collect(Collectors.toList());
        }


}