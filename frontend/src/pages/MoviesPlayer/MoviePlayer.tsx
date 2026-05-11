import { useParams } from "react-router-dom";
import MoviePlayerView from "./MoviePlayerView";
import {  useEffect, useState } from "react";
import type { Movie } from "../../configs/Models";
import { movieService } from "../../services/movieService";

export function MoviePlayer() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [topRatingMovies, setTopRatingMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const loadTopRatingMovies = async () => {
      const movies = await movieService.getTopRatingMovies();
      setTopRatingMovies(movies);
    }

    loadTopRatingMovies();
  }, []);

  useEffect(() => {
    if (!id) return;

    const loadMovieDetails = async () => {
      const movieDetails = await movieService.getMovieDetails(Number(id));
      setMovie(movieDetails);
    };

    loadMovieDetails();
  }, [id]);

  useEffect(() => {
    if (!movie?.id) return;

    const loadVideo = async () => {
      setLoading(true);

      try {
        const data = await movieService.getMovieVideoUrl(movie.id);
        const firstMedia = data[0]?.url;

        setVideoUrl(firstMedia);
      } catch (err) {
        console.error(err);
      }

      setLoading(false);
    };

    loadVideo();
  }, [movie]);

  return (
    <MoviePlayerView topRatedMovies={topRatingMovies} movie={movie} videoUrl={videoUrl} loading={loading} />
  );
}
