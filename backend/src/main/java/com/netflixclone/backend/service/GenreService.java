package com.netflixclone.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.netflixclone.backend.entity.Genre;
import com.netflixclone.backend.repository.GenreRepo;

@Service
public class GenreService {
    private final GenreRepo genreRepo;

    public GenreService(GenreRepo genreRepo) {
        this.genreRepo = genreRepo;
    }

    public List<Genre> getAllGenres() {
        return genreRepo.findAll();
    }

    public Genre getGenreById(Integer id) {
        return genreRepo.findById(id).orElse(null);
    }

    public Genre saveGenre(Genre genre) {
        return genreRepo.save(genre);
    }

    public void deleteGenre(Integer id) {
        genreRepo.deleteById(id);
    }
    
}
