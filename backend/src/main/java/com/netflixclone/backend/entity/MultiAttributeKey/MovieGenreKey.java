package com.netflixclone.backend.entity.MultiAttributeKey;

public class MovieGenreKey implements java.io.Serializable {
    private Integer movieId;
    private Integer genreId;

    public MovieGenreKey() {}

    public MovieGenreKey(Integer movieId, Integer genreId) {
        this.movieId = movieId;
        this.genreId = genreId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof MovieGenreKey)) return false;
        MovieGenreKey that = (MovieGenreKey) o;
        return movieId.equals(that.movieId) &&
               genreId.equals(that.genreId);
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(movieId, genreId);
    }
    
}
