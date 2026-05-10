import { Container } from "react-bootstrap";
import { HeroBanner } from "../../components/HeroBanner/HeroBanner";
import { MovieRow } from "../../components/MovieRow/MovieRow";
import type { Movie } from "../../configs/Models";

export function HomeView({
  ratedMovies,
  newestMovies,
  selectedMovie,
  ownedMovies,
  onSelectedMovie,
}: {
  ratedMovies: Movie[];
  newestMovies: Movie[];
  selectedMovie: Movie | null;
  ownedMovies: number[];
  onSelectedMovie: (movie: Movie) => void;
}) {

  return (
    <Container fluid className="p-0 m-0" style={{ overflow: "hidden" }}>
      <HeroBanner selectedMovie={selectedMovie} ownedMovies={ownedMovies} />

      <h5 className="text-start mt-4">Trending now</h5>
      <MovieRow movies={ratedMovies} onSelectMovie={onSelectedMovie}/>

      <h5 className="text-start mt-4">New arrival</h5>
      <MovieRow movies={newestMovies} onSelectMovie={onSelectedMovie}/>
    </Container>
  );
}
