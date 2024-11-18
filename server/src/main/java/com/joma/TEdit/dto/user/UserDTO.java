package com.joma.TEdit.dto.user;

public class UserDTO {
    private final int id;
    private final String firstName;
    private final String lastName;
    private final String password;

    public UserDTO(int id, String firstName, String lastName, String password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPassword() {
        return password;
    }
}
