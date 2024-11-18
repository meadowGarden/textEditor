package com.joma.TEdit.dto.document;

public class DocumentDTO {
    private final int id;
    private final String title;
    private final String body;
    private final int userID;

    public DocumentDTO(int id, String title, String body, int userID) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.userID = userID;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getBody() {
        return body;
    }

    public int getUserID() {
        return userID;
    }
}
