package com.joma.TEdit.controller.advice;

import jakarta.persistence.EntityExistsException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class UserControllerAdvice {

    @ExceptionHandler(EntityExistsException.class)
    public ResponseEntity<?> userExistsExceptionHandler() {
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body("user with provided username already exists");
    }
}
