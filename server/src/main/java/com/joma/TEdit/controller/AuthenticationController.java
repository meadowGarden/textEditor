package com.joma.TEdit.controller;

import com.joma.TEdit.request.auth.AuthenticationRequest;
import com.joma.TEdit.request.user.UserCreateRequest;
import com.joma.TEdit.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @Autowired
    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping(path = "/register")
    public ResponseEntity<?> register(
            @RequestBody UserCreateRequest registerRequest
    ) {
        System.out.println(registerRequest);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(authenticationService.register(registerRequest));
    }

    @PostMapping(path = "/authenticate")
    public ResponseEntity<?> login(
            @RequestBody AuthenticationRequest authenticationRequest
    ) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(authenticationService.authenticate(authenticationRequest));
    }
}
