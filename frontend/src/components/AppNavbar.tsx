import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Search, Cart } from "react-bootstrap-icons";
import { NavDropdown } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { NavLink } from "react-router-dom";
import "./styles.css";
import { useCartAnimation } from "../contexts/CartAnimation/CartAnimationContext";
import { useCart } from "../contexts/useCart";
import { useAuth } from "../auth/useAuth";
export function AppNavbar() {
  const [showSearch, setShowSearch] = useState(false);
  const {user, logout} = useAuth();
  const isAuthenticated = !!user; 
  const { cartRef } = useCartAnimation();
  const {cartItems} = useCart();

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid className="gap-5">
          <Navbar.Brand>
            <Image
              src="/logo.png"
              width="60"
              height="60"
              className="d-inline-block align-top"
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
            <Form className="d-flex">
              {showSearch && (
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              )}
              <Button
                variant="outline-light"
                onClick={() => setShowSearch(!showSearch)}
              >
                <Search />
              </Button>
            </Form>
            <Button variant="outline-light" href="/cart" ref={cartRef}>
              <Cart /> {cartItems.length > 0 && (
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

                  <NavDropdown.Item href="/billing">Billing History</NavDropdown.Item>

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
