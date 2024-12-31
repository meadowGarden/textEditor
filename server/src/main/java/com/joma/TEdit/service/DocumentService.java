package com.joma.TEdit.service;

import com.joma.TEdit.dto.AppMapper;
import com.joma.TEdit.dto.document.DocumentDTO;
import com.joma.TEdit.entity.Document;
import com.joma.TEdit.entity.User;
import com.joma.TEdit.repository.DocumentRepository;
import com.joma.TEdit.repository.UserRepository;
import com.joma.TEdit.request.document.DocumentListRequest;
import com.joma.TEdit.response.document.DocumentResponse;
import com.joma.TEdit.response.document.DocumentsListResponse;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class DocumentService {
    private final UserRepository userRepository;
    private final DocumentRepository documentRepository;

    @Autowired
    public DocumentService(UserRepository userRepository, DocumentRepository documentRepository) {
        this.userRepository = userRepository;
        this.documentRepository = documentRepository;
    }

    public DocumentResponse createDocument(DocumentDTO dto) {
        final String title = dto.getTitle();
        final String body = dto.getBody();
        final User user = userRepository.findById(dto.getUserID())
                .orElseThrow(EntityNotFoundException::new);

        final Document documentToSave = AppMapper.getDocument(title, body, user);
        final Document savedDocument = documentRepository.save(documentToSave);
        return AppMapper.getDocumentResponseFromDocument(savedDocument);
    }

    public DocumentsListResponse getAllDocuments(DocumentListRequest request) {
        final Sort.Direction direction = request.isSortAsc() ? Sort.Direction.ASC : Sort.Direction.DESC;
        final Sort sort = Sort.by(direction, request.getSortBy());

        final int pageNumber = request.getPageNumber() - 1;
        final int pageSize = request.getPageSize();
        final String titleContains = request.getTitleContains();

        final Pageable pageable = PageRequest.of(pageNumber, pageSize, sort);
        if (titleContains == null || titleContains.isEmpty()) {
            final Page<Document> pageRaw = documentRepository.findAll(pageable);
            final Page<DocumentResponse> page = pageRaw.map(AppMapper::getDocumentResponseFromDocument);
            return new DocumentsListResponse(page, HttpStatus.OK);
        }

        final Page<Document> pageRaw = documentRepository
                .findByTitleContainingIgnoreCase(pageable, titleContains);
        final Page<DocumentResponse> page = pageRaw.map(AppMapper::getDocumentResponseFromDocument);
        return new DocumentsListResponse(page, HttpStatus.OK);
    }

    public DocumentsListResponse getAllDocumentsByUser(int id, DocumentListRequest request) {
        final Sort.Direction direction = request.isSortAsc() ? Sort.Direction.ASC : Sort.Direction.DESC;
        final Sort sort = Sort.by(direction, request.getSortBy());

        final int pageNumber = request.getPageNumber() - 1;
        final int pageSize = request.getPageSize();
        final String titleContains = request.getTitleContains();

        final Pageable pageable = PageRequest.of(pageNumber, pageSize, sort);
        if (titleContains == null) {
            final Page<Document> pageRaw = documentRepository.findAll(pageable);
            final Page<DocumentResponse> page = pageRaw.map(AppMapper::getDocumentResponseFromDocument);
            return new DocumentsListResponse(page, HttpStatus.OK);
        }
        final Page<Document> pageRaw = documentRepository
                .findByUserIdAndTitleContainingIgnoreCase(pageable, id, titleContains);

        final Page<DocumentResponse> page = pageRaw.map(AppMapper::getDocumentResponseFromDocument);
        return new DocumentsListResponse(page, HttpStatus.OK);
    }

    public DocumentResponse getDocumentByID(int id) {
        final Document document = documentRepository.findById(id)
                .orElseThrow(EntityNotFoundException::new);
        return AppMapper.getDocumentResponseFromDocument(document);
    }

    public DocumentResponse updateDocument(int id, DocumentDTO dto) {
        final Document documentToUpdate = documentRepository.findById(id)
                .orElseThrow(EntityNotFoundException::new);
        documentToUpdate.setTitle(dto.getTitle());
        documentToUpdate.setBody(dto.getBody());

        final Document updateDocument = documentRepository.save(documentToUpdate);
        return AppMapper.getDocumentResponseFromDocument(updateDocument);
    }

    @Transactional
    public void deleteDocument(int id) {
        Document documentToDelete = documentRepository.findById(id)
                .orElseThrow(EntityNotFoundException::new);

        User owner = userRepository.findById(documentToDelete.getUser().getId())
                .orElseThrow(() -> new EntityNotFoundException("document's owner was not found"));

        owner.removeDocument(documentToDelete);
        documentRepository.delete(documentToDelete);
    }
}
