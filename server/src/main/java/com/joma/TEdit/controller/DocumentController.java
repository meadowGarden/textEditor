package com.joma.TEdit.controller;

import com.joma.TEdit.dto.document.DocumentDTO;
import com.joma.TEdit.request.DocumentListRequest;
import com.joma.TEdit.response.document.DocumentResponse;
import com.joma.TEdit.response.document.DocumentsListResponse;
import com.joma.TEdit.service.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/documents")
@CrossOrigin(origins = "http://localhost:5173")
public class DocumentController {
    private final DocumentService documentService;

    @Autowired
    public DocumentController(DocumentService documentService) {
        this.documentService = documentService;
    }

    @PostMapping
    public ResponseEntity<?> createDocument(@RequestBody DocumentDTO dto) {
        final DocumentResponse createdDocument = documentService.createDocument(dto);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(createdDocument);
    }

    @GetMapping
    public ResponseEntity<?> getAllDocuments(
            @RequestParam(defaultValue = "1") int pageNumber,
            @RequestParam(defaultValue = "10") int pageSize,
            @RequestParam(required = false) String titleContains,
            @RequestParam(defaultValue = "title") String sortBy,
            @RequestParam(defaultValue = "true") boolean sortAsc
    ) {
        final DocumentListRequest request = new DocumentListRequest(pageNumber, pageSize, titleContains, sortBy, sortAsc);
        final DocumentsListResponse response = documentService.getAllDocuments(request);
        return ResponseEntity
                .status(response.getHttpStatus())
                .body(response.getDocuments());
    }

    @GetMapping(path = "/user/{id}")
    public ResponseEntity<?> getAllDocumentsByUser(
            @PathVariable int id,
            @RequestParam(defaultValue = "1") int pageNumber,
            @RequestParam(defaultValue = "10") int pageSize,
            @RequestParam(required = false) String titleContains,
            @RequestParam(defaultValue = "title") String sortBy,
            @RequestParam(defaultValue = "true") boolean sortAsc
    ) {
        final DocumentListRequest request = new DocumentListRequest(pageNumber, pageSize, titleContains, sortBy, sortAsc);
        final DocumentsListResponse response = documentService.getAllDocumentsByUser(id, request);
        return ResponseEntity
                .status(response.getHttpStatus())
                .body(response.getDocuments());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<?> getDocumentByID(@PathVariable int id) {
        final DocumentResponse response = documentService.getDocumentByID(id);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(response);
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<?> updateDocument(@PathVariable int id, @RequestBody DocumentDTO dto) {
        final DocumentResponse response = documentService.updateDocument(id, dto);

        return ResponseEntity
                .status(HttpStatus.ACCEPTED)
                .body(response);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> deleteDocument(@PathVariable int id) {
        documentService.deleteDocument(id);
        return ResponseEntity.noContent().build();
    }
}
