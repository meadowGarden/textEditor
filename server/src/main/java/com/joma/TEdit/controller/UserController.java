package com.joma.TEdit.controller;

import com.joma.TEdit.dto.user.UserDTO;
import com.joma.TEdit.request.UserListRequest;
import com.joma.TEdit.response.user.UserResponse;
import com.joma.TEdit.response.user.UsersListResponse;
import com.joma.TEdit.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/users")
@CrossOrigin(origins = "http://localhost:5173")
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
    public ResponseEntity<?> getAllUsers(
            @RequestParam(defaultValue = "1") int pageNumber,
            @RequestParam(defaultValue = "5") int pageSize,
            @RequestParam(required = false) String firstNameContains,
            @RequestParam(required = false) String lastNameContains,
            @RequestParam(defaultValue = "lastName") String sortBy,
            @RequestParam(defaultValue = "true") boolean sortAsc
            ) {
        final UserListRequest request = new UserListRequest(
                pageNumber, pageSize,firstNameContains, lastNameContains, sortBy, sortAsc);
        final UsersListResponse response = userService.getAllUsers(request);
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
