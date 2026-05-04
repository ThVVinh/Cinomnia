import { useEffect, useState } from "react";
import { HomeView } from "./HomeView";
import type { Movie } from "../../configs/Models";
import { movieService } from "../../services/movieService";

export function Home() {
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [topNewestMovies, setTopNewestMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [rated, newest] = await Promise.all([
          movieService.getTopRatingMovies(),
          movieService.getTopNewestMovies(),
        ]);

        setTopRatedMovies(rated);
        setTopNewestMovies(newest);
        setSelectedMovie(rated[0] || null);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <HomeView
      ratedMovies={topRatedMovies}
      newestMovies={topNewestMovies}
      selectedMovie={selectedMovie}
      onSelectedMovie={setSelectedMovie}
    />
  );
}
