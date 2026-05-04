import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-bootstrap";
import "./categoryNav.css";
import { Navigation, Pagination } from "swiper/modules";
import type { Genre, Movie } from "../../configs/Models";
import { HeroBanner } from "../../components/HeroBanner/HeroBanner";
import { MovieRow } from "../../components/MovieRow/MovieRow";

function GenreTab({
  genres,
  onSelectGenre,
  activeGenre,
}: {
  genres: Genre[];
  onSelectGenre: (genre: Genre) => void;
  activeGenre: Genre | null;
}) {
  return (
    <Swiper
      spaceBetween={100}
      slidesPerView="auto"
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[Pagination, Navigation]}
      grabCursor={true}
      loop={true}
      className="genre-tabs"
    >
      {genres.map((genre) => (
        <SwiperSlide key={genre.id} style={{ width: "auto" }}>
          <span
            onClick={() => onSelectGenre(genre)}
            className={`genre-tab ${
              genre.id === activeGenre?.id ? "active" : ""
            }`}
          >
            {genre.name}
          </span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export function MoviesByGenreView({
  genres,
  movies,
  activeGenre,
  onSelectGenre,
  selectedMovie,
  onSelectMovie,
}: {
  genres: Genre[];
  movies: Movie[];
  activeGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
  selectedMovie: Movie | null;
  onSelectMovie: (movie: Movie) => void;
}) {
  return (
    <Container fluid className="p-0 m-0" style={{ overflow: "hidden" }}>
      <HeroBanner selectedMovie={selectedMovie} />

      <GenreTab
        genres={genres}
        onSelectGenre={onSelectGenre}
        activeGenre={activeGenre}
      />

      <br />

      <MovieRow movies={movies} onSelectMovie={onSelectMovie} />
    </Container>
  );
}
