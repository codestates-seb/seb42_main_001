package com.codestates.server_001_withskey.domain.member.Dto;

//        @Email
//        @NotBlank(message = "email must be not blank")
//        private String email;
//
//        @NotBlank(message = "Name must be not blank")
//        private String name;
//
//        @Pattern(regexp = "^010-\\d{3,4}-\\d{4}$")
//        private String phone;

import lombok.Getter;
import lombok.Setter;

public class MemberDto {

    @Getter
    @Setter
    public static class Patch {
        private long memberId;
        private String phoneNumber;
        private String displayName;
        private String profilePicture;
    }
    @Getter
    @Setter
    public static class Response {
        long memberId;
        private String phoneNumber;
        private String displayName;
        private String profilePicture;
        private String url;
    }
}
