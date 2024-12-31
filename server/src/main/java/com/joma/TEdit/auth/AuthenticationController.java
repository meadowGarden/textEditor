package com.joma.TEdit.auth;

import com.joma.TEdit.request.auth.AuthenticationRequest;
import com.joma.TEdit.request.user.UserCreateRequest;
import com.joma.TEdit.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/auth")
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
