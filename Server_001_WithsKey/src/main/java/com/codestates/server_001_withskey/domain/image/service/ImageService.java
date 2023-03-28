package com.codestates.server_001_withskey.domain.image.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.codestates.server_001_withskey.domain.board.entity.Board;
import com.codestates.server_001_withskey.domain.board.service.BoardService;
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
import org.springframework.util.ObjectUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Paths;
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

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    private final AmazonS3 amazonS3;

    @Value("${file.root.dir}")
    private String rootPath;

    //단일 파일 서버에 업로드

    //TODO S3 연동
    public Image uploadFile(MultipartFile file) throws IOException {
        if (file.isEmpty()) {
            throw new BusinessLogicException(ExceptionCode.IMAGES_NOT_FOUND);
        }
//        File test =  new File("mymy").getAbsoluteFile(); //C:\Users\MEcmp\Desktop\Main_Proj\main\temp
//        test.mkdirs();
//        log.info("check here : {}", test);
//        test.createNewFile();
//        log.info("after check here : {}", test);

//        File: 경로를 다루는 객체, 그 경로가 존재하는지? 절대 경로 구해주기

        //TODO 로컬 루트 경로를 어떻게 설정할 것인가?

        //UUID 랜덤 아이디 생성 UUID + 캡처.jpg
        String fileName = UUID.randomUUID().toString() + "-" + file.getOriginalFilename();
        //로컬 저장 로직 - 로컬에 저장을 해놓은 경로를 기준으로 파일을 찾아 업로드를 실행함.
        String fullPathFileName = rootPath + fileName; // 파일 경로 + UUID

        //실제로 파일을 로컬에 "저장"하는 로직
        file.transferTo(new File(fullPathFileName));


        String contentType = file.getContentType();
        if (!ObjectUtils.isEmpty(contentType)) {
            // 버킷 이름, 버킷에 저장될 파일 이름, 파일이 존재하는 경로
            // ACL : 버킷에 대한 접근 권한을 설정하게 해줌.

            amazonS3.putObject(new PutObjectRequest(bucket, fileName, new File(fullPathFileName))
                    .withCannedAcl(CannedAccessControlList.PublicRead));

            // 파일 이름을 기준으로 접근할 수 있는 url을 얻어올 수 있음.
            String s3url = amazonS3.getUrl(bucket, fileName).toString();

            return imageRepository.save(imageMapper.fileToImage(file, s3url));
        } else {
            throw new BusinessLogicException(ExceptionCode.IMAGES_NOT_FOUND);
        }
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

        List<Image> imageList = images.stream()
                .map(image -> {
                    Optional<Image> findImage = imageRepository.findById(image.getImageId());

                    Image img = findImage.orElseThrow(
                            ()-> new BusinessLogicException(ExceptionCode.IMAGES_NOT_FOUND));

                    img.setBoard(saveBoard);

                    return img;
                }).collect(Collectors.toList());

        imageRepository.saveAll(imageList);
    }

    public void updateImage(Board updatedBoard, List<ImageDto.Patch> images){
        //원래 있던 이미지  매핑 null화
        List<Image> originImages = imageRepository.findAllByBoard(updatedBoard).get();
        originImages = originImages.stream()
                        .map(image -> {
                            image.setBoard(null);
                            return image;
                        })
                        .collect(Collectors.toList());
        imageRepository.saveAll(originImages);


        //새로 수정된 이미지 매핑
         images.stream()
                .map(image -> {
                    Optional<Image> findImage = imageRepository.findById(image.getImageId());

                    Image img = findImage.orElseThrow(
                            ()-> new BusinessLogicException(ExceptionCode.IMAGES_NOT_FOUND));

                    img.setBoard(updatedBoard);

                    return img;
                }).collect(Collectors.toList());
    }
}
