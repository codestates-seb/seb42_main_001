package com.codestates.server_001_withskey.domain.board.controller;

import com.codestates.server_001_withskey.domain.board.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Validated
@RequestMapping("/board")
public class BoardController {
    private final BoardService service;

//    @PostMapping
//    public ResponseEntity postBoard(@Validated @RequestBody)
}
