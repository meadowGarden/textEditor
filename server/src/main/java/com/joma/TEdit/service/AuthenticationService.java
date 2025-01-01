package com.joma.TEdit.service;

import com.joma.TEdit.entity.User;
import com.joma.TEdit.repository.TokenRepository;
import com.joma.TEdit.repository.UserRepository;
import com.joma.TEdit.request.auth.AuthenticationRequest;
import com.joma.TEdit.request.user.UserCreateRequest;
import com.joma.TEdit.response.auth.AuthenticationResponse;
import com.joma.TEdit.security.Role;
import com.joma.TEdit.token.Token;
import com.joma.TEdit.token.TokenType;
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
    private final TokenRepository tokenRepository;

    @Autowired
    public AuthenticationService(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            JwtService jwtService,
            AuthenticationManager authenticationManager,
            TokenRepository tokenRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
        this.tokenRepository = tokenRepository;
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
        saveUserToken(savedUser, jwtToken);

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

        revokeAllUserTokens(user);
        saveUserToken(user, jwtToken);

        return new AuthenticationResponse(jwtToken);
    }

    private void saveUserToken(User user, String jwtToken) {
        var tokenToSave = new Token(jwtToken, TokenType.BEARER, false, false, user);
        tokenRepository.save(tokenToSave);
    }

    private void revokeAllUserTokens(User user) {
        var validUserTokens = tokenRepository.findAllValidTokensByUser(user.getId());
        if (validUserTokens.isEmpty()) {
            return;
        }

        validUserTokens.forEach(token -> {
                    token.setExpired(true);
                    token.setRevoked(true);
                });

        tokenRepository.saveAll(validUserTokens);
    }
}
