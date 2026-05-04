package com.netflixclone.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.netflixclone.backend.entity.OwnedMovie;
import com.netflixclone.backend.entity.MultiAttributeKey.OwnedMovieKey;
import com.netflixclone.backend.repository.OwnedMovieRepo;

@Service
public class OwnedMovieService {
    private final OwnedMovieRepo ownedMovieRepo;

    public OwnedMovieService(OwnedMovieRepo ownedMovieRepo) {
        this.ownedMovieRepo = ownedMovieRepo;
    }

    public List<OwnedMovie> getAllOwnedMovies() {
        return ownedMovieRepo.findAll();
    }

    public List<Integer> getOwnedMoviesByUserId(Integer userId) {
        List<OwnedMovie> ownedMovies = ownedMovieRepo.findByUserId(userId);
        return ownedMovies.stream().map(OwnedMovie::getMovieId).toList();
    }

    public OwnedMovie getOwnedMovieById(Integer userId, Integer movieId) {
        OwnedMovieKey key = new OwnedMovieKey(userId, movieId);
        return ownedMovieRepo.findById(key).orElse(null);
    }

    public void deleteOwnedMovie(Integer userId, Integer movieId) {
        OwnedMovieKey key = new OwnedMovieKey(userId, movieId);
        ownedMovieRepo.deleteById(key);
    }
}
