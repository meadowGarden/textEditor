package com.joma.TEdit.response.document;

import java.time.ZonedDateTime;

public class DocumentResponse {
    private int id;
    private String title;
    private String body;
    private int userID;
    private ZonedDateTime createdAt;
    private ZonedDateTime modifiedAt;

    public DocumentResponse(int id, String title, String body, int userID, ZonedDateTime createdAt, ZonedDateTime modifiedAt) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.userID = userID;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
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

    public ZonedDateTime getCreatedAt() {
        return createdAt;
    }

    public ZonedDateTime getModifiedAt() {
        return modifiedAt;
    }
}
