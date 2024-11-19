package com.joma.TEdit.response.user;

import org.springframework.data.domain.Page;

public class UsersListResponse {
    private final Page<UserResponse> users;

    public UsersListResponse(Page<UserResponse> users) {
        this.users = users;
    }

    public Page<UserResponse> getUsers() {
        return users;
    }
}
