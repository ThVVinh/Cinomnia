package com.netflixclone.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.netflixclone.backend.dto.CreditDTO;
import com.netflixclone.backend.entity.Media;
import com.netflixclone.backend.entity.Movie;
import com.netflixclone.backend.entity.Review;
import com.netflixclone.backend.service.CreditService;
import com.netflixclone.backend.service.MediaService;
import com.netflixclone.backend.service.MovieService;
import com.netflixclone.backend.service.ReviewService;



@RestController
@RequestMapping("/movies")
public class MovieController {

    private final MovieService movieService;
    private final CreditService creditService;
    private final ReviewService reviewService;
    private final MediaService mediaService;

    public MovieController(MovieService movieService, CreditService creditService, ReviewService reviewService, MediaService mediaService) {
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

    @GetMapping("/{movieId}/media")
    public List<Media> getMovieMedia(@PathVariable Integer movieId) {
        return mediaService.getMediaById(movieId);
    }
}