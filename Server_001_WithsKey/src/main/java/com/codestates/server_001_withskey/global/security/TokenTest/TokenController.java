package com.codestates.server_001_withskey.global.security.TokenTest;

import com.codestates.server_001_withskey.global.security.Redis.TokenRedisRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.swing.text.html.Option;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class TokenController {

    private final TokenRedisRepository tokenRedisRepository;

    public TokenController(TokenRedisRepository tokenRedisRepository) {
        this.tokenRedisRepository = tokenRedisRepository;
    }
    @GetMapping("/token/access/{token}")
    public ResponseEntity<String> checkAccessToken(@PathVariable String token){
        boolean isAccessTokenUsed = tokenRedisRepository.isAccessTokenUsed(token);
        if (isAccessTokenUsed) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("AccessToken has been used");
        } else {
            return ResponseEntity.ok("AccessToken has not been used");
        }
    }
    @GetMapping("/token/refresh/{token}")
    public ResponseEntity<String> checkRefreshToken(@PathVariable String token) {
        boolean isRefreshTokenUsed = tokenRedisRepository.isRefreshTokenUsed(token);
        if (isRefreshTokenUsed) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Refresh Token has been used");
        } else {
            return ResponseEntity.ok("RefreshToken has not been used");
        }
    }
}
