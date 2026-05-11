package com.netflixclone.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.netflixclone.backend.dto.CreditDTO;
import com.netflixclone.backend.entity.CustomUserPrincipal;
import com.netflixclone.backend.entity.Media;
import com.netflixclone.backend.entity.Movie;
import com.netflixclone.backend.entity.Review;
import com.netflixclone.backend.repository.OwnedMovieRepo;
import com.netflixclone.backend.service.CreditService;
import com.netflixclone.backend.service.MediaService;
import com.netflixclone.backend.service.MovieService;
import com.netflixclone.backend.service.ReviewService;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;



@RestController
@RequestMapping("/movies")
public class MovieController {

    private final OwnedMovieRepo ownedMovieRepo;
    private final MovieService movieService;
    private final CreditService creditService;
    private final ReviewService reviewService;
    private final MediaService mediaService;

    public MovieController(OwnedMovieRepo ownedMovieRepo, MovieService movieService, CreditService creditService, ReviewService reviewService, MediaService mediaService) {
        this.ownedMovieRepo = ownedMovieRepo;
        this.movieService = movieService;
        this.creditService = creditService;
        this.reviewService = reviewService;
        this.mediaService = mediaService;
    }

    @GetMapping
    public List<Movie> getAllMovies() {
        return movieService.getAllMovies();
    }

    @GetMapping("/top-ratings")
    public List<Movie> getTopRatedMovies() {
        return movieService.getTop10RatedMovies();
    }

    @GetMapping("/top-newest")
    public List<Movie> getTopNewestMovies() {
        return movieService.getTop10NewestMovies();
    }

    @GetMapping("/{movieId}/media")
    public ResponseEntity<?> getMovieMedia(Authentication auth, @PathVariable Integer movieId) {
        Integer userId = ((CustomUserPrincipal) auth.getPrincipal()).getId();
        
        boolean isOwned = ownedMovieRepo.existsByUserIdAndMovieId(userId, movieId);

        if(!isOwned) {
            return ResponseEntity.status(403)
            .body("You have not purchased this movie");        
        }

        return ResponseEntity.ok(mediaService.getMediaById(movieId));
    }

    @GetMapping("/{id}")
    public Movie getMovie(@PathVariable Integer id) {
        return movieService.getMovieById(id);
    }

    @GetMapping("/genre/{genre}")
    public List<Movie> getMoviesByGenre(@PathVariable Integer genre) {
        return movieService.getMoviesByGenre(genre);
    }
    
    @GetMapping("/{movieId}/credits")
    public List<CreditDTO> getMovieCredits(@PathVariable Integer movieId) {
        return creditService.getCreditsByMovieId(movieId);
    }

    @GetMapping("/{movieId}/reviews")
    public List<Review> getMovieReviews(@PathVariable Integer movieId) {
        return reviewService.getReviewsByMovieId(movieId);
    }
}