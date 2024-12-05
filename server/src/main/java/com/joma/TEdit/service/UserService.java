package com.joma.TEdit.service;

import com.joma.TEdit.dto.AppMapper;
import com.joma.TEdit.dto.user.UserDTO;
import com.joma.TEdit.entity.User;
import com.joma.TEdit.repository.UserRepository;
import com.joma.TEdit.request.UserListRequest;
import com.joma.TEdit.response.user.UserResponse;
import com.joma.TEdit.response.user.UsersListResponse;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserResponse createUser(UserDTO dto) {
        final Optional<User> userInDB = userRepository.findByUsername(dto.getUsername());
        if (userInDB.isPresent()) {
            throw new EntityExistsException();
        }

        final User userToSave = AppMapper.getUserFromDTO(dto);
        final User savedUser = userRepository.save(userToSave);
        return AppMapper.getUserResponseFromUser(savedUser);
    }

    public UserResponse getUserByID(int id) {
        final User user = userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("user with id " + id + " was not found"));
        return AppMapper.getUserResponseFromUser(user);
    }

    public UsersListResponse getAllUsers(UserListRequest request) {
        final Sort.Direction direction = request.isSortAsc() ? Sort.Direction.ASC : Sort.Direction.DESC;
        final Sort sort = Sort.by(direction, request.getSortBy());

        final int pageNumber = request.getPageNumber() - 1;
        final int pageSize = request.getPageSize();
        final String firstNameContains = request.getFirstNameContains();
        final String lastNameContains = request.getLastNameContains();

        final Pageable pageable = PageRequest.of(pageNumber, pageSize, sort);
        if ((firstNameContains == null || firstNameContains.isEmpty()) &&
                (lastNameContains == null || lastNameContains.isEmpty())) {
            final Page<User> usersRaw = userRepository.findAll(pageable);
            final Page<UserResponse> users = usersRaw.map(AppMapper::getUserResponseFromUser);
            return new UsersListResponse(users);
        }
        final Page<User> usersRaw = userRepository
                .findByFirstNameContainingIgnoreCaseAndLastNameContainingIgnoreCase(
                        pageable, firstNameContains, lastNameContains);
        final Page<UserResponse> users = usersRaw.map(AppMapper::getUserResponseFromUser);
        return new UsersListResponse(users);
    }

    public UserResponse updateUser(int id, UserDTO dto) {
        final User user = userRepository.findById(id)
                .orElseThrow();
        user.setUsername(dto.getUsername());
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        userRepository.save(user);
        return AppMapper.getUserResponseFromUser(user);
    }

    @Transactional
    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }
}
