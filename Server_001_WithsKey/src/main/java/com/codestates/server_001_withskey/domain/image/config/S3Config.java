package com.codestates.server_001_withskey.domain.image.config;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class S3Config {
//    // EC2 실행용
//    @Value("${/main001/cloud.aws.s3.credentials.accesskey}")
//     로컬 실행용
    @Value("${AWS.ACCESS-KEY}")
    private String accessKey;

//    // EC2 실행용
//    @Value("${/main001/cloud.aws.s3.credentials.secretkey}")
    // 로컬 실행용
    @Value("${AWS.SECRET-KEY}")
    private String secretKey;

//    // EC2 실행용
//    @Value("${/main001/cloud.aws.region.static}")
    // 로컬 실행용
    @Value("{AWS-REGION}")
    private String region;

    @Bean
    public AmazonS3 amazonS3() {
        AWSCredentials awsCredentials = new BasicAWSCredentials(accessKey, secretKey);

        return AmazonS3ClientBuilder.standard()
                .withRegion(region)
                .withCredentials(new AWSStaticCredentialsProvider(awsCredentials))
                .build();
    }
}