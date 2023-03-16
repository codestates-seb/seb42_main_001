package com.codestates.server_001_withskey.domain.snack.mapper;

import com.codestates.server_001_withskey.domain.drink.entity.SnackDrink;
import com.codestates.server_001_withskey.domain.snack.dto.SnackDto;
import com.codestates.server_001_withskey.domain.snack.entity.Snack;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class SnackMapper {

    public SnackDto.Response snackToResponse(Snack snack){
        SnackDto.Response response = new SnackDto.Response();
        response.setSnackImageUrl(snack.getSnackImageUrl());
        response.setSnackKcal(snack.getSnackKcal());
        response.setSnackInfo(snack.getSnackInfo());
        response.setSnackName(snack.getSnackName());
        return response;
    }

    public List<SnackDto.Response> snacksToResponses(List<Snack> snackList){
        return snackList.stream()
                .map(snack -> {
                   return snackToResponse(snack);
                }).collect(Collectors.toList());
    }
}
