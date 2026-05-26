import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { Search, Cart } from "react-bootstrap-icons";
import { ListGroup, NavDropdown } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { NavLink } from "react-router-dom";
import "./styles.css";
import { useCartAnimation } from "../contexts/CartAnimation/CartAnimationContext";
import { useCart } from "../contexts/useCart";
import { useAuth } from "../auth/useAuth";
import { movieService } from "../services/movieService";
import type { Movie } from "../configs/Models";
export function AppNavbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const { user, logout } = useAuth();
  const isAuthenticated = !!user;
  const { cartRef } = useCartAnimation();
  const { cartItems } = useCart();

  useEffect(() => {
    if (!keyword.trim()) {
      setMovies([]);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        const data = await movieService.searchMoviesByTitle(keyword);

        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [keyword]);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="gap-5">
          <Navbar.Brand>
            <Image
              src="/logo.png"
              width="60"
              height="60"
              alt="Cinomnia logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto gap-4">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-active" : "nav-inactive"}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-active" : "nav-inactive"}`
              }
            >
              Movies
            </NavLink>
          </Nav>
          <div className="d-flex gap-3">
            <div className="position-relative">
              <Form className="d-flex">
                {showSearch && (
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                )}

                <Button
                  variant="outline-light"
                  onClick={() => setShowSearch(!showSearch)}
                >
                  <Search />
                </Button>
              </Form>

              {movies.length > 0 && showSearch && (
                <ListGroup
                  className="position-absolute mt-1"
                  style={{
                    top: "100%",
                    left: 0,
                    width: "300px",
                    zIndex: 1000,
                    maxHeight: "300px",
                    overflowY: "auto",
                  }}
                >
                  {movies.map((movie) => (
                    <ListGroup.Item
                      key={movie.id}
                      action
                      as={NavLink}
                      to={`/movie/${movie.id}`}
                    >
                      <div className="d-flex align-items-center gap-2">
                        <Image
                          src={movie.posterUrl}
                          width={50}
                          height={75}
                          className="me-2"
                          alt={movie.title}
                        />
                        {movie.title}
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </div>
            <Button variant="outline-light" href="/cart" ref={cartRef}>
              <Cart />{" "}
              {cartItems.length > 0 && (
                <span className="cart-count">{cartItems.length}</span>
              )}
            </Button>

            <NavDropdown
              title={
                <Image
                  src="/vite.svg"
                  width={36}
                  height={36}
                  roundedCircle
                  alt="Account"
                />
              }
              id="account-dropdown"
              align="end"
            >
              {isAuthenticated ? (
                <>
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>

                  <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>

                  <NavDropdown.Item href="/billing">
                    Billing History
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                </>
              ) : (
                <NavDropdown.Item href="/signin">Login</NavDropdown.Item>
              )}
            </NavDropdown>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
