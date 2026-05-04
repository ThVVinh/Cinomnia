import { useParams } from "react-router-dom";
import MoviePlayerView from "./MoviePlayerView";
import { useEffect, useState } from "react";
import type { Movie } from "../../configs/Models";
import { movieService } from "../../services/movieService";

export function MoviePlayer() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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

        setVideoUrl(data.url);
      } catch (err) {
        console.error(err);
      }

      setLoading(false);
    };

    loadVideo();
  }, [movie]);

  return (
    <MoviePlayerView movie={movie} videoUrl={videoUrl} loading={loading} />
  );
}
