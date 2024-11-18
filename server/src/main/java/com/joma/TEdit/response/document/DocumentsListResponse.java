package com.joma.TEdit.response.document;


import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;

public class DocumentsListResponse {
    private final Page<DocumentResponse> documents;
    private final HttpStatus httpStatus;

    public DocumentsListResponse(Page<DocumentResponse> documents, HttpStatus httpStatus) {
        this.documents = documents;
        this.httpStatus = httpStatus;
    }

    public Page<DocumentResponse> getDocuments() {
        return documents;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }
}
