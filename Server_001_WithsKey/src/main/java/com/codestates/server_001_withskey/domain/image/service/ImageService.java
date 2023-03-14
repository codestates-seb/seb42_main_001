package com.codestates.server_001_withskey.domain.image.service;

import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.image.dto.ImageDto;
import com.codestates.server_001_withskey.domain.image.entity.Image;
import com.codestates.server_001_withskey.domain.image.mapper.ImageMapper;
import com.codestates.server_001_withskey.domain.image.repository.ImageRepository;
import com.codestates.server_001_withskey.global.advice.BusinessLogicException;
import com.codestates.server_001_withskey.global.advice.ExceptionCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;


@Service
@Slf4j
@RequiredArgsConstructor
public class ImageService {
    private final ImageRepository imageRepository;
    private final ImageMapper imageMapper;

    @Value("${file.root.dir}")
    private String rootPath;

    //단일 파일 서버에 업로드
    public Image uploadFile(MultipartFile file) throws IOException {
        if(file.isEmpty()){ throw new BusinessLogicException(ExceptionCode.IMAGES_NOT_FOUND); }

        String fullPath = rootPath + UUID.randomUUID().toString() +"."+ getExt(file);

        file.transferTo(new File(fullPath));

        return imageRepository.save(imageMapper.fileToImage(file, fullPath));
    }

    //복수 파일 서버에 업로드
    public List<ImageDto.Post> uploadFiles(List<MultipartFile> files) throws IOException {
        List<Image> images = new ArrayList<>();
        for(MultipartFile file : files){
            images.add(uploadFile(file));
        }

        return imageMapper.imagesToPosts(images);
    }
    
    
    //파일의 확장자 구하는 메서드
    private String getExt(MultipartFile file) {
        int idx = file.getOriginalFilename().lastIndexOf(".");
        String ext = file.getOriginalFilename().substring(idx + 1);
        return ext;
    }

    //Board 객체를 기준으로 images 찾기
    public List<ImageDto.Response> findByBoard(Board board){
        //TODO board가 존재하는지 확인하는 로직 필요

        Optional<List<Image>> findImages = imageRepository.findAllByBoard(board);
        findImages.orElseThrow(()
                -> new BusinessLogicException(ExceptionCode.IMAGES_NOT_FOUND));

        return imageMapper.imagesToResponses(findImages.get());
    }


    // ImageId를 기준으로 찾는 메서드
    public Image getImageByID(long imageId){
        return imageRepository.findById(imageId).get();
    }


    // Id로 찾은 Image에 Board를 매핑해주는 메서드
    public void saveImage(Board saveBoard, List<ImageDto.Post> images){
        images.stream()
                .map(image -> {
                    Optional<Image> findImage = imageRepository.findById(image.getImageId());

                    Image img = findImage.orElseThrow(
                            ()-> new BusinessLogicException(ExceptionCode.IMAGES_NOT_FOUND));

                    img.setBoard(saveBoard);

                    return img;
                }).collect(Collectors.toList());
    }




}
