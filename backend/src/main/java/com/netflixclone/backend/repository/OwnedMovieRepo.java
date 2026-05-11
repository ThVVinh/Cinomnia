package com.netflixclone.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.netflixclone.backend.entity.OwnedMovie;
import com.netflixclone.backend.entity.MultiAttributeKey.OwnedMovieKey;

@Repository
public interface OwnedMovieRepo extends JpaRepository<OwnedMovie, OwnedMovieKey> {
    public List<OwnedMovie> findByUserId(Integer userId);
    public boolean existsByUserIdAndMovieId(Integer userId, Integer movieId);
}