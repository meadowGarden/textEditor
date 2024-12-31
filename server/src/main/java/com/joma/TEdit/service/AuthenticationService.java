package com.joma.TEdit.service;

import com.joma.TEdit.entity.User;
import com.joma.TEdit.repository.UserRepository;
import com.joma.TEdit.request.auth.AuthenticationRequest;
import com.joma.TEdit.request.user.UserCreateRequest;
import com.joma.TEdit.response.auth.AuthenticationResponse;
import com.joma.TEdit.security.Role;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Autowired
    public AuthenticationService(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            JwtService jwtService,
            AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    public AuthenticationResponse register(UserCreateRequest userCreateRequest) {
        final var username = userCreateRequest.getUsername();
        final var firstName = userCreateRequest.getFirstName();
        final var lastName = userCreateRequest.getLastName();
        final var password = passwordEncoder.encode(userCreateRequest.getPassword());
        final var role = Role.USER;
        var userToSave = new User(username, firstName, lastName, password, role);

        var savedUser = userRepository.save(userToSave);
        var jwtToken = jwtService.generateToken(savedUser);

        return new AuthenticationResponse(jwtToken);
    }

    public AuthenticationResponse authenticate(AuthenticationRequest authenticationRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticationRequest.getUsername(),
                        authenticationRequest.getPassword()
                )
        );

        var user = userRepository.findByUsername(authenticationRequest.getUsername())
                .orElseThrow(() -> new EntityNotFoundException("user not found"));

        var jwtToken = jwtService.generateToken(user);
        return new AuthenticationResponse(jwtToken);
    }
}
