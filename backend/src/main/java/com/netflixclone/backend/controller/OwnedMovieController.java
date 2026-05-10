package com.netflixclone.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.core.Authentication;
import com.netflixclone.backend.entity.CustomUserPrincipal;
import com.netflixclone.backend.service.OwnedMovieService;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/owned-movies")
public class OwnedMovieController {
    final OwnedMovieService ownedMovieService;

    public OwnedMovieController(OwnedMovieService ownedMovieService) {
        this.ownedMovieService = ownedMovieService;
    }

    @GetMapping
    public List<Integer> getOwnedMovies(Authentication auth) {
        Integer userId = ((CustomUserPrincipal) auth.getPrincipal()).getId();
        return ownedMovieService.getOwnedMoviesByUserId(userId);
    }
    
    @PostMapping
    public void addOwnedMovie(Authentication auth, @RequestBody Integer movieId) {
        Integer userId = ((CustomUserPrincipal) auth.getPrincipal()).getId();
        ownedMovieService.addOwnedMovie(userId, movieId);
    }
    
}
