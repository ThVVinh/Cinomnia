package com.netflixclone.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.netflixclone.backend.entity.User;
import com.netflixclone.backend.repository.UserRepo;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public Optional<User> getUserById(Integer id) {
        return userRepo.findById(id);
    }

    public User getUserByEmail(String email) {
        return userRepo.findByEmail(email);
    }

    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    public Optional<User> updatePassword(Integer userId, String newPassword) {
        return userRepo.findById(userId).map(user -> {
            user.setPwd(newPassword);
            return userRepo.save(user);
        });
    }

    public User verifyUser(String email, String password) {

        User user = userRepo.findByEmail(email);

        if (!user.getPwd().equals(password)) {
            throw new RuntimeException("Invalid password");
        }

        return user;
    }
}
