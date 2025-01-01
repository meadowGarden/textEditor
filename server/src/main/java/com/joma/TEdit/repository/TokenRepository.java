package com.joma.TEdit.repository;

import com.joma.TEdit.token.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TokenRepository extends JpaRepository<Token, Integer> {

    @Query("""
            SELECT t
            FROM Token t
            INNER JOIN User u ON t.user.id = u.id
            WHERE u.id = :userID
            AND (t.isExpired = false OR t.isRevoked = false)
            """)
    List<Token> findAllValidTokensByUser(int userID);

    Optional<Token> findByToken(String token);
}
