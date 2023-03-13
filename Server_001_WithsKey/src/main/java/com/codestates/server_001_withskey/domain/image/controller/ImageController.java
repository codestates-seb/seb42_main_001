package com.codestates.server_001_withskey.domain.image.controller;


import com.codestates.server_001_withskey.domain.image.entity.Image;
import com.codestates.server_001_withskey.domain.image.service.SimpleImageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Controller
@Slf4j
@RequestMapping("/spring")
@RequiredArgsConstructor
public class ImageController {
    private final SimpleImageService imageService;

    @GetMapping("/upload")
    public String newFile() {
        return "upload-form";
    }

    @PostMapping("/upload")
    public ResponseEntity uploadImage(@RequestParam(value = "file") List<MultipartFile> files) throws IOException {
        List<Image> image = imageService.uploadImage(files);
        return ResponseEntity.ok(image);
    }
}
