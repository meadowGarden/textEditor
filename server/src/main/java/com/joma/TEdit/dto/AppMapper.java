package com.joma.TEdit.dto;

import com.joma.TEdit.dto.user.UserDTO;
import com.joma.TEdit.entity.Document;
import com.joma.TEdit.entity.User;
import com.joma.TEdit.response.document.DocumentResponse;
import com.joma.TEdit.response.user.UserResponse;

public class AppMapper {

    public static User getUserFromDTO(UserDTO dto) {
        return new User(dto.getUsername(),dto.getFirstName(), dto.getLastName(), dto.getPassword());
    }

    public static UserResponse getUserResponseFromUser(User user) {
        return new UserResponse(user.getId(), user.getUsername(), user.getFirstName(), user.getLastName());
    }

    public static Document getDocument(String title, String body, User user) {
        return new Document(title, body, user);
    }

    public static DocumentResponse getDocumentResponseFromDocument(Document document) {
        return new DocumentResponse(
                document.getId(),
                document.getTitle(),
                document.getBody(),
                document.getUser().getId(),
                document.getCreatedAt(),
                document.getModifiedAt());
    }
}
