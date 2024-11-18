package com.joma.TEdit.response.user;

import java.util.List;

public class UsersListResponse {
    private final List<UserResponse> users;

    public UsersListResponse(List<UserResponse> users) {
        this.users = users;
    }

    public List<UserResponse> getUsers() {
        return users;
    }
}
