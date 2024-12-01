package com.joma.TEdit.controller.advice;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class DocumentControllerAdvice {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<?> documentNotFoundExceptionHandler() {
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body("document you are searching was not found");
    }
}
