package com.codestates.server_001_withskey.domain.image.mapper;

import com.codestates.server_001_withskey.domain.image.dto.ImageDto;
import com.codestates.server_001_withskey.domain.image.entity.Image;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class ImageMapper {
    public ImageDto.Response imageToResponse(Image image){
        ImageDto.Response response = new ImageDto.Response();
        response.setImageId(image.getImageId());
        response.setImageUrl(image.getImgUrl());
        return response;
    }

    public ImageDto.Post imageToPost(Image image){
        ImageDto.Post response = new ImageDto.Post();
        response.setImageId(image.getImageId());
        response.setBoardImageUrl(image.getImgUrl());
        return response;
    }

    public Image fileToImage(MultipartFile file, String fullPath) throws IOException {
        return Image.builder()
                .imgUrl(fullPath)
                .fileName(file.getOriginalFilename())
                .build();
    }

    public List<ImageDto.Post> imagesToPosts(List<Image> images){
        return images.stream()
                .map(image -> imageToPost(image))
                .collect(Collectors.toList());
    }

    public List<ImageDto.Response> imagesToResponses(List<Image> images){
        return images.stream()
                .map(image -> imageToResponse(image))
                .collect(Collectors.toList());
    }
}
