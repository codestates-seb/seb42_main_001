package com.codestates.server_001_withskey.domain.image.service;

import com.codestates.server_001_withskey.domain.image.entity.Image;
import com.codestates.server_001_withskey.domain.image.repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;


@Service
@Slf4j
@RequiredArgsConstructor
public class SimpleImageService {
    private final ImageRepository imageRepository;

    @Value("${file.root.dir}")
    String rootPath;

    public Image uploadImage(MultipartFile file) throws IOException {
        if(file.isEmpty()){
            return null; //TODO Exception Throws
        }

        String fullPath = rootPath + UUID.randomUUID().toString() +"."+ getExt(file);

        log.info(fullPath);

        file.transferTo(new File(fullPath));
        return saveImageToRepository(file, fullPath);
    }

    public List<Image> uploadImage(List<MultipartFile> files) throws IOException {
        List<Image> images = new ArrayList<>();

        for(MultipartFile file : files){
            images.add(uploadImage(file));
        }

        return images;
    }

    private String getExt(MultipartFile file) {
        int idx = file.getOriginalFilename().lastIndexOf(".");
        String ext = file.getOriginalFilename().substring(idx + 1);

        return ext;
    }

    private Image saveImageToRepository(MultipartFile file, String fullPath) {
        Image image = new Image();

        image.setFileName(file.getOriginalFilename());
        image.setImgUrl(fullPath);

        return imageRepository.save(image);
    }


}
