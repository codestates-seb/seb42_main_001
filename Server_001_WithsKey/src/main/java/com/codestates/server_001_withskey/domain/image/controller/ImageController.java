package com.codestates.server_001_withskey.domain.image.controller;


import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/v1/image")
public class ImageController {
    @PostMapping("/upload")
    public ResponseEntity uploadImage(){





        return ResponseEntity.ok().build();
    }
}
