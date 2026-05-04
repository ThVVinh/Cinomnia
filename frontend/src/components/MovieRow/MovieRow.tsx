import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Movie } from "../../configs/Models";
type Props = {
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
};

export function MovieRow({ movies, onSelectMovie }: Props) {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={-100}
      pagination={{
        clickable: true,
        type: "progressbar",
      }}
      modules={[Pagination, Navigation]}
      navigation={true}
      className="mySwiper"
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <img
            className="movie-image"
            src={movie.posterUrl}
            alt={movie.title}
            onMouseEnter={() => onSelectMovie(movie)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
