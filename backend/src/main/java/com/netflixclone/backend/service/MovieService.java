package com.netflixclone.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.netflixclone.backend.entity.Movie;
import com.netflixclone.backend.repository.MovieRepo;

@Service
public class MovieService {
    private final MovieRepo movieRepo;

    public MovieService(MovieRepo movieRepo) {
        this.movieRepo = movieRepo;
    }

    public List<Movie> getAllMovies() {
        return movieRepo.findAll();
    }

    public List<Movie> getTop10RatedMovies() {
        return movieRepo.findTop10ByOrderByRatingDesc();
    }

    public List<Movie> getTop10NewestMovies() {
        return movieRepo.findTop10ByOrderByReleaseDateDesc();
    }

    public Movie getMovieById(Integer id) {
        return movieRepo.findById(id).orElse(null);
    }

    public List<Movie> getMoviesByGenre(Integer genre) {
        return movieRepo.findByGenresId(genre);
    }

    public List<Movie> getMoviesByIds(List<Integer> ids) {
        return movieRepo.findAllById(ids);
    }

    public List<Movie> searchMoviesByTitle(String title) {
        return movieRepo.findByTitleContainingIgnoreCase(title);
    }
}
