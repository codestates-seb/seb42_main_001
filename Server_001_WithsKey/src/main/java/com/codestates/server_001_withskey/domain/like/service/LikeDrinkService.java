package com.codestates.server_001_withskey.domain.like.service;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.drink.entity.Drink;
import com.codestates.server_001_withskey.domain.drink.repository.DrinkRepository;
import com.codestates.server_001_withskey.domain.drink.service.DrinkService;
import com.codestates.server_001_withskey.domain.like.entity.LikeBoard;
import com.codestates.server_001_withskey.domain.like.entity.LikeDrink;
import com.codestates.server_001_withskey.domain.like.repository.LikeDrinkRepository;
import com.codestates.server_001_withskey.global.advice.BusinessLogicException;
import com.codestates.server_001_withskey.global.advice.ExceptionCode;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class LikeDrinkService {
    private final LikeDrinkRepository likeDrinkRepository;
    private final DrinkService drinkService;
    private final DrinkRepository drinkRepository;

    public LikeDrinkService(LikeDrinkRepository likeDrinkRepository, DrinkService drinkService,
                            DrinkRepository drinkRepository) {
        this.likeDrinkRepository = likeDrinkRepository;
        this.drinkService = drinkService;
        this.drinkRepository = drinkRepository;
    }

    public void postLike (long memberId, long drinkId) {
        Drink findDrink = drinkService.findDrink(drinkId);
        verifyDrinkHasLike(memberId, findDrink);

        LikeDrink likeDrink = new LikeDrink(findDrink, memberId);
        likeDrinkRepository.save(likeDrink);
    }

    public void verifyDrinkHasLike (long memberId, Drink drink) {
        Optional<LikeDrink> findLikeDrink =
                likeDrinkRepository.findLikeDrinkByMemberIdAndDrink(memberId,drink);
        if (findLikeDrink.isPresent()){
            throw new BusinessLogicException(ExceptionCode.LIKE_ALREADY_EXISTS);
        }
    }

    public void deleteLike (long memberId, long drinkId) {
        Drink findDrink = drinkService.findDrink(drinkId);
        LikeDrink likeDrink = findExistingLikeOnDrink (drinkId, findDrink);
        likeDrinkRepository.delete(likeDrink);
    }

    public LikeDrink findExistingLikeOnDrink (long drinkId, Drink drink) {
        Optional<LikeDrink> findLikeDrink =
                likeDrinkRepository.findLikeDrinkByMemberIdAndDrink(drinkId, drink);
        return findLikeDrink.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.LIKE_NOT_EXIST));
    }

    public List<Drink> getLikeDrinksByMemberId(long memberId){
        List<LikeDrink> likeBoards = likeDrinkRepository.findAllByMemberId(memberId);

        List<Drink> drinks = likeBoards.stream()
                .map(likeBoard -> {
                    return likeBoard.getDrink();
                }).collect(Collectors.toList());

        return drinks;
    }

}
