package com.codestates.server_001_withskey.global.advice;

import lombok.Getter;

@Getter
public enum ExceptionCode {

    MEMBER_NOT_FOUND(402,"회원이 존재하지 않습니다."),
    BOARD_NOT_FOUND(402, "게시판이 존재하지 않습니다."),
    TAG_NOT_FOUND(402, "태그가 존재하지 않습니다."),
    EMAIL_ALREADY_EXIST(403,"이미 가입된 이메일 입니다"),
    DATA_IS_EMPTY(404,"저장된 데이터가 없습니다."),
    METHOD_NOT_ALLOWED(405,"요청에 적합한 메서드가 아닙니다"),
    INTERNAL_SERVER_ERROR(406,"Null Point Exception"),
    BUSINESS_LOGIC_NOT_IMPLEMENTED(404, "비즈니스 로직이 구현되지 않았습니다."),
    IMAGES_NOT_FOUND(404, "이미지를 찾을 수 없습니다."),
    DRINK_NOT_FOUND(404,"찾으시는 주류 정보가 없습니다."),
    COMMENT_NOT_FOUND(404, "찾으시는 댓글 정보가 없습니다."),
    LIKE_ALREADY_EXISTS(406, "좋아요는 한번만 누를 수 있습니다"),
    ARTICLE_NOT_EXISTS(404, "아티클 정보를 찾을 수 없습니다."),
    LIKE_NOT_EXIST(404, "좋아요가 없습니다."),
    IMAGE_UPLOAD_FAIL(406, "이미지 업로드 실패");

    @Getter
    int status;
    @Getter
    String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
