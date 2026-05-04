package com.netflixclone.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.netflixclone.backend.entity.Movie;

@Repository
public interface MovieRepo extends JpaRepository<Movie, Integer> {
    List<Movie> findTop10ByOrderByRatingDesc();
    List<Movie> findByGenresId(Integer genreId);
    List<Movie> findTop10ByOrderByReleaseDateDesc();
}
