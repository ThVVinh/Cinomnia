package com.netflixclone.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.netflixclone.backend.dto.AuthResponse;
import com.netflixclone.backend.dto.RegisterRequest;
import com.netflixclone.backend.entity.CustomUserPrincipal;
import com.netflixclone.backend.entity.LoginRequest;
import com.netflixclone.backend.entity.User;
import com.netflixclone.backend.security.JwtUtil;
import com.netflixclone.backend.service.AuthService;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest req) {
        return ResponseEntity.ok(
                authService.register(req.getEmail(), req.getPassword(), req.getName(), req.getGender(), req.getDateOfBirth())
        );
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {

        User user = authService.login(req.getEmail(), req.getPassword());
        CustomUserPrincipal principal = new CustomUserPrincipal(user.getId(), user.getEmail());
        String token = jwtUtil.generateToken(principal);

        return ResponseEntity.ok(new AuthResponse(token));
    }

    @GetMapping("/me") 
    public ResponseEntity<?> getMe(Authentication authentication) {

        CustomUserPrincipal user =
            (CustomUserPrincipal) authentication.getPrincipal();

        return ResponseEntity.ok(user);
    }
}