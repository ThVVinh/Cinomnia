package com.netflixclone.backend.dto;

import java.util.List;

public class PurchaseRequest {
    private List<Integer> movieIds;

    public List<Integer> getMovieIds() {
        return movieIds;
    }

    public void setMovieIds(List<Integer> movieIds) {
        this.movieIds = movieIds;
    }
}
