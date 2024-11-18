package com.joma.TEdit.service;

import com.joma.TEdit.dto.AppMapper;
import com.joma.TEdit.response.user.UsersListResponse;
import com.joma.TEdit.dto.user.UserDTO;
import com.joma.TEdit.response.user.UserResponse;
import com.joma.TEdit.entity.User;
import com.joma.TEdit.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserResponse createUser(UserDTO dto) {
        final User userToSave = AppMapper.getUserFromDTO(dto);
        final User savedUser = userRepository.save(userToSave);
        return AppMapper.getUserResponseFromUser(savedUser);
    }

    public UserResponse getUserByID(int id) {
        final User user = userRepository.findById(id)
                .orElseThrow();
        return AppMapper.getUserResponseFromUser(user);
    }

    public UsersListResponse getAllUsers() {
        final List<User> usersRaw = userRepository.findAll();
        final List<UserResponse> users = usersRaw.stream()
                .map(AppMapper::getUserResponseFromUser)
                .collect(Collectors.toList());
        return new UsersListResponse(users);
    }

    public UserResponse updateUser(int id, UserDTO dto) {
        final User user = userRepository.findById(id)
                .orElseThrow();
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        user.setPassword(dto.getPassword());
        userRepository.save(user);
        return AppMapper.getUserResponseFromUser(user);
    }

    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }
}
