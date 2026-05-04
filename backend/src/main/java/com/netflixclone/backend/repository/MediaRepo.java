package com.netflixclone.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.netflixclone.backend.entity.Media;

@Repository
public interface MediaRepo extends JpaRepository<Media, Integer> {
    public List<Media> findByMovieId(Integer movieId);
} 