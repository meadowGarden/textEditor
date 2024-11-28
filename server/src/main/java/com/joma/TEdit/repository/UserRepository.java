package com.joma.TEdit.repository;

import com.joma.TEdit.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    Page<User> findAll(Pageable pageable);

    Page<User> findByFirstNameContainingIgnoreCaseAndLastNameContainingIgnoreCase(
            Pageable pageable, String firstNameContains, String lastNameContains);

}
