package com.joma.TEdit.entity;

import jakarta.persistence.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.ZonedDateTime;

@Entity
@Table(name = "document")
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "title")
    private String title;

    @Column(name = "body")
    private String body;

    @ManyToOne()
    @JoinColumn(name = "user_id", foreignKey = @ForeignKey(name = "FK_USER_ID"))
    private User user;

    @CreatedDate
    @Column(name = "created_at")
    private ZonedDateTime createdAt;

    @LastModifiedDate
    @Column(name = "modified_at")
    private ZonedDateTime modifiedAt;

    public Document(){
    }

    public Document(String title, String body) {
        this.title = title;
        this.body = body;
    }

    public Document(String title, String body, User user) {
        this.title = title;
        this.body = body;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public User getUser() {
        return user;
    }

    public ZonedDateTime getCreatedAt() {
        return createdAt;
    }

    public ZonedDateTime getModifiedAt() {
        return modifiedAt;
    }

    @PrePersist
    private void onCreate() {
        this.createdAt = ZonedDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        this.modifiedAt = ZonedDateTime.now();
    }

    @Override
    public String toString() {
        return String.format("""
                id -> %d,
                title -> %s,
                created at -> %s,
                modified at -> %s
                """, id, title, createdAt, modifiedAt);
    }
}
