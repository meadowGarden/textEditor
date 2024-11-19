package com.joma.TEdit.repository;

import com.joma.TEdit.entity.Document;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentRepository extends JpaRepository<Document, Integer> {
    Page<Document> findByUserIdAndTitleContainingIgnoreCase(Pageable pageable, int id, String titleContains);

    Page<Document> findByTitleContainingIgnoreCase(Pageable pageable, String titleContains);
}
