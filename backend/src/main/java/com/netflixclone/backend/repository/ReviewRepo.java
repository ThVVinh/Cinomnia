package com.netflixclone.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.netflixclone.backend.entity.Review;

@Repository
public interface ReviewRepo extends JpaRepository<Review, Integer> {

    public List<Review> findByMovieIdOrderByCreatedAtDesc(Integer movieId);
}
