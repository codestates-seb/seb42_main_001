package com.codestates.server_001_withskey.domain.member.snack.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;

public class SnackDto {

    @Getter
    @Setter
    public static class Response{
        private String snackKcal;
        private String snackInfo;
        private String snackImageUrl; //초기 데이터 대상이기 때문에 url 살릴 듯 합니다.
        private String snackName;
    }
}
