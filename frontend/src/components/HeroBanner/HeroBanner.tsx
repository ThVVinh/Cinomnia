// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/swiper.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Check, PlayFill, Plus, StarFill } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import "./swiper-styles.css";
import type { Movie } from "../../configs/Models";
import { useCart } from "../../contexts/useCart";
import { useNavigate } from "react-router-dom";

export function HeroBanner({
  selectedMovie,
  ownedMovies,
}: {
  selectedMovie: Movie | null;
  ownedMovies: number[];
}) {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const isInCart = selectedMovie
    ? cartItems.some((m) => m.id === selectedMovie.id)
    : false;

  const handleClick = () => {
    if (!selectedMovie) return;

    if (isInCart) {
      removeFromCart(selectedMovie.id);
    } else {
      addToCart(selectedMovie);
    }
  };

  const handlePlayClick = () => {
    if (!selectedMovie) return;
    navigate(`/movie/${selectedMovie.id}`);
  };

  console.log("Owned Movies:", ownedMovies);

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="position-relative w-100">
          <img
            src={selectedMovie?.posterUrl}
            className="img-fluid w-100"
            style={{ height: "70vh", objectFit: "cover" }}
          />
          <div className="banner-gradient"></div>
          <div className="movie-caption">
            <h5>{selectedMovie?.title || "Default Title"}</h5>
            <p>{selectedMovie?.description || "Default description"}</p>

            <p>
              <StarFill />{" "}
              <b>{selectedMovie?.averageRating || "Default Rating"}</b>
            </p>

            {selectedMovie && ownedMovies.includes(selectedMovie.id) ? (
              <div className="d-flex gap-3 mt-2">
                <Button variant="danger" onClick={handlePlayClick}>
                  <PlayFill /> Play
                </Button>
                <Button
                  onClick={handleClick}
                  variant={isInCart ? "outline-light" : "success"}
                >
                  {isInCart ? <Check /> : <Plus />}
                  <span>{isInCart ? "Added" : "My List"}</span>
                </Button>
              </div>
            ) : (
              <div className="d-flex gap-3 mt-2">
                <Button variant="outline-light" onClick={handlePlayClick}>
                  {selectedMovie?.price ? `$${selectedMovie.price}` : "Rent"}
                </Button>
                <Button
                  onClick={handleClick}
                  variant={isInCart ? "outline-light" : "success"}
                >
                  {isInCart ? <Check /> : <Plus />}
                  <span>{isInCart ? "Added" : "My List"}</span>
                </Button>
              </div>
            )}
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
