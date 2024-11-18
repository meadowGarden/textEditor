package com.joma.TEdit.controller;

import com.joma.TEdit.dto.user.UserDTO;
import com.joma.TEdit.response.user.UserResponse;
import com.joma.TEdit.response.user.UsersListResponse;
import com.joma.TEdit.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/users")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping()
    public ResponseEntity<?> createUser(@RequestBody UserDTO dto) {
        final UserResponse createdUser = userService.createUser(dto);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(createdUser);
    }

    @GetMapping
    public ResponseEntity<?> getAllUsers() {
        final UsersListResponse response = userService.getAllUsers();
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response.getUsers());
    }

    @PutMapping
    public ResponseEntity<?> updateUser() {
        return ResponseEntity
                .status(HttpStatus.ACCEPTED)
                .body(String.format("%s", "no implementation yet"));
    }

    @DeleteMapping
    public ResponseEntity<?> deleteUser() {
        return ResponseEntity
                .status(HttpStatus.NO_CONTENT)
                .body(String.format("%s", "no implementation yet"));
    }
}
