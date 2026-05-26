import { useEffect, useState } from "react";
import { MoviesByGenreView } from "./MoviesByGenreView";
import { genreService } from "../../services/genreService";
import type { Genre, Movie } from "../../configs/Models";
import { ownedMoviesService } from "../../services/ownedMoviesServices";

export function MoviesByGenre() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [activeGenre, setActiveGenre] = useState<Genre | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [ownedMovies, setOwnedMovies] = useState<number[]>([]);

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const genresData = await genreService.getGenres();
        setGenres(genresData);
        setActiveGenre(genresData[0] || null);

        const ownedMoviesData = await ownedMoviesService.getOwnedMovies();
        setOwnedMovies(ownedMoviesData);
      } finally {
        setLoading(false);
      }
    };

    loadGenres();
  }, []);

  useEffect(() => {
    if (!activeGenre) return;

    const loadMovies = async () => {
      const moviesData = await genreService.getMoviesByGenre(activeGenre.id);
      setMovies(moviesData);
      setSelectedMovie(moviesData[0] || null);
    };

    loadMovies();
  }, [activeGenre]);

  if (loading) return <div>Loading...</div>;

  return (
    <MoviesByGenreView
      genres={genres}
      movies={movies}
      activeGenre={activeGenre}
      onSelectGenre={setActiveGenre}
      selectedMovie={selectedMovie}
      onSelectMovie={setSelectedMovie}
      ownedMovies={ownedMovies}
    />
  );
}
