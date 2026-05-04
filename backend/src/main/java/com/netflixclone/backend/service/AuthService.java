package com.netflixclone.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.netflixclone.backend.entity.User;
import com.netflixclone.backend.repository.UserRepo;

@Service
public class AuthService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User register(String email, String password, String name, String gender, java.util.Date dob) {
        User usr = new User();
        usr.setEmail(email);
        usr.setPwd(passwordEncoder.encode(password));
        usr.setName(name);
        usr.setGender(gender);
        usr.setDob(dob);

        return userRepo.save(usr);
    }

    public User login(String email, String password) {
        User user = userRepo.findByEmail(email);

        if (user == null || !passwordEncoder.matches(password, user.getPwd())) {
            throw new RuntimeException("Invalid email or password");
        }

        return user;
    } 
}
