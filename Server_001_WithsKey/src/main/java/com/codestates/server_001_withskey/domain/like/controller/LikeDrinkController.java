package com.codestates.server_001_withskey.domain.like.controller;

import com.codestates.server_001_withskey.domain.like.service.LikeDrinkService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@Slf4j
@RestController
@RequestMapping("/likes/drinks")
public class LikeDrinkController {

    private final LikeDrinkService likeDrinkService;

    @PostMapping("/{drink-id}")
    public ResponseEntity postLikeDrinks (@PathVariable(name = "drink-id") long drinkId) {
        long memberId = Long.valueOf(String.valueOf(SecurityContextHolder.getContext().getAuthentication().getPrincipal()));
        likeDrinkService.postLike(memberId, drinkId);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{drink-id}")
    public ResponseEntity deleteLikeDrinks (@PathVariable(name = "drink-id") long drinkId) {
        long memberId = Long.valueOf(String.valueOf(SecurityContextHolder.getContext().getAuthentication().getPrincipal()));
        likeDrinkService.deleteLike(memberId, drinkId);
        return ResponseEntity.noContent().build();
    }
}
