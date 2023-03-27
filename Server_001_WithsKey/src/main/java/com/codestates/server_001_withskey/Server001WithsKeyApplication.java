package com.codestates.server_001_withskey;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories;

@SpringBootApplication
@EnableJpaAuditing
public class Server001WithsKeyApplication {

    public static void main(String[] args) {
        SpringApplication.run(Server001WithsKeyApplication.class, args);
    }

}
