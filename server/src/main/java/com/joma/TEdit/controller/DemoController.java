package com.joma.TEdit.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/demo")
public class DemoController {

    @GetMapping
    public ResponseEntity<?> demoController() {
        return ResponseEntity
                .status(HttpStatus.MULTI_STATUS)
                .body("mau");
    }
}
