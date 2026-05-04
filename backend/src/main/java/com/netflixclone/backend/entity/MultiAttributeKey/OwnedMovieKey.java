package com.netflixclone.backend.entity.MultiAttributeKey;

public class OwnedMovieKey implements java.io.Serializable {
    private Integer userId;
    private Integer movieId;

    public OwnedMovieKey() {}

    public OwnedMovieKey(Integer userId, Integer movieId) {
        this.userId = userId;
        this.movieId = movieId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof OwnedMovieKey)) return false;
        OwnedMovieKey that = (OwnedMovieKey) o;
        return userId.equals(that.userId) &&
               movieId.equals(that.movieId);
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(userId, movieId);
    }
}