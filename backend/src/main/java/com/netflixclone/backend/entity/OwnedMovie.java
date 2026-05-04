package com.netflixclone.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import com.netflixclone.backend.entity.MultiAttributeKey.OwnedMovieKey;

@Entity
@IdClass(OwnedMovieKey.class)
@Table(name = "owned_movie") 
public class OwnedMovie {
    @Id
    @Column(name = "user_id")
    private Integer userId;
    
    @Id
    @Column(name = "movie_id")
    private Integer movieId;
    
    public Integer getUserId() {
        return userId;
    }
    public void setUserId(Integer userId) {
        this.userId = userId;
    }
    public Integer getMovieId() {
        return movieId;
    }
    public void setMovieId(Integer movieId) {
        this.movieId = movieId;
    }
}
