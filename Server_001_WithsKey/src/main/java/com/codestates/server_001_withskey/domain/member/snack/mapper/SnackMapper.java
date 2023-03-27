package com.codestates.server_001_withskey.domain.member.snack.mapper;

import com.codestates.server_001_withskey.domain.member.snack.dto.SnackDto.Response;
import com.codestates.server_001_withskey.domain.member.snack.entity.Snack;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class SnackMapper {

    public Response snackToResponse(Snack snack){
        Response response = new Response();
        response.setSnackImageUrl(snack.getSnackImageUrl());
        response.setSnackKcal(snack.getSnackKcal());
        response.setSnackInfo(snack.getSnackInfo());
        response.setSnackName(snack.getSnackName());
        return response;
    }

    public List<Response> snacksToResponses(List<Snack> snackList){
        return snackList.stream()
                .map(snack -> {
                   return snackToResponse(snack);
                }).collect(Collectors.toList());
    }
}
