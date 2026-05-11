package com.netflixclone.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.netflixclone.backend.entity.OwnedMovie;
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

    public void addOwnedMovie(Integer userId, List<Integer> movieIds) {
        List<OwnedMovie> ownedMovies = movieIds.stream()
            .map(movieId -> {
                OwnedMovie movie = new OwnedMovie();
                movie.setUserId(userId);
                movie.setMovieId(movieId);
                return movie;
            })
            .toList();

        ownedMovieRepo.saveAll(ownedMovies);
    }

    public boolean isMovieOwnedByUser(Integer userId, Integer movieId) {
            return ownedMovieRepo.existsByUserIdAndMovieId(userId, movieId);
    }
}
