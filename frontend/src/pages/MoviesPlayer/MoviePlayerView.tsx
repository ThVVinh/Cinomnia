import ReactPlayer from "react-player";
import { Col, Container, Row } from "react-bootstrap";
import type { Movie } from "../../configs/Models";

export default function MoviePlayerView({
  movie,
  videoUrl,
  loading,
}: {
  movie?: Movie | null;
  videoUrl?: string | null;
  loading?: boolean;
}) {
  return (
    <div style={{ minHeight: "100vh", color: "white" }}>
      <div
        style={{
          position: "relative",
          height: "75vh",
          overflow: "hidden",
          backgroundColor: "black",
        }}
      >
        {videoUrl && (
          <ReactPlayer
            src={videoUrl}
            playing={true}
            controls
            width="100%"
            height="100%"
          />
        )}

        {!videoUrl && (
          <>
            <img
              src={movie?.posterUrl}
              alt={movie?.title}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                top: 0,
                left: 0,
              }}
            />

            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4), transparent)",
              }}
            />

            {loading && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h4>Loading video...</h4>
              </div>
            )}
          </>
        )}
      </div>

      <Container style={{ paddingTop: 20 }}>
        <Row>
          <Col md={8} className="text-start">
            <h2>{movie?.title}</h2>
            <p>{movie?.description}</p>
          </Col>

          <Col md={4} className="text-start">
            <p>⭐ Rating: {movie?.averageRating?.toFixed(1)}</p>
            <p>📅 Year: {movie?.releaseDate?.split("-")[0]}</p>
            <p>🎬 Genre: Action, Drama</p>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: 30 }}>
        <h4>More Like This</h4>

        <div style={{ display: "flex", gap: 10, overflowX: "auto" }}>
          {[1, 2, 3, 4].map((i) => (
            <img
              key={i}
              src={`https://image.tmdb.org/t/p/w300/sample${i}.jpg`}
              style={{
                width: 150,
                borderRadius: 8,
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
