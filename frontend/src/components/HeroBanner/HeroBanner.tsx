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
              <div className="d-flex mt-2 gap-3 align-items-center">
                <Button
                  variant="danger"
                  onClick={handlePlayClick}
                  className="d-flex align-items-center gap-2 px-4 fs-5 fw-semibold"
                >
                  <PlayFill /> Play
                </Button>
              </div>
            ) : (
              <div className="d-flex mt-2 gap-3 align-items-center">
                <div className="bg-secondary border border-dark rounded px-3 py-2 text-center">
                  {/* {selectedMovie?.oldPrice && (
                    <div
                      className="text-light text-decoration-line-through small"
                      style={{ opacity: 0.7 }}
                    >
                      ${selectedMovie.oldPrice}
                    </div>
                  )} */}

                  <div className="fw-bold text-warning gap-2 px-4 fs-5">
                    ${selectedMovie?.price ?? "0"}
                  </div>
                </div>

                <Button
                  onClick={handleClick}
                  variant={isInCart ? "outline-light" : "success"}
                  className="d-flex align-items-center gap-2 px-4 fs-5 fw-semibold"
                >
                  {isInCart ? <Check size={20} /> : <Plus size={20} />}
                  <span>{isInCart ? "Added" : "Add to Cart"}</span>
                </Button>
              </div>
            )}
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
