import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./loginPageStyle.css";
import { useState } from "react";
import { SignUpForm } from "./SignUpForm";
import { LoginForm } from "./LoginForm";

type Props = {
  isSignup: boolean;
  setIsSignup: (val: boolean) => void;

  email: string;
  setEmail: (val: string) => void;
  pwd: string;
  setPwd: (val: string) => void;

  fname: string;
  setFname: (val: string) => void;
  lname: string;
  setLname: (val: string) => void;
  password: string;
  setPassword: (val: string) => void;

  loading: boolean;
  error: string;
  setError: (val: string) => void;

  handleLogin: () => Promise<void>;
  handleRegister: () => Promise<boolean | void>;
};

export function LoginView(props: Props) {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <Container fluid className="login-wrapper vh-100">
      <Row className="h-100">
        <Col
          md={5}
          className="login-left d-flex align-items-center justify-content-center text-start"
        >
          <div className="login-card w-100 px-5 py-4">
            {isSignup ? (
              <SignUpForm {...props} onSwitch={() => setIsSignup(false)} />
            ) : (
              <LoginForm {...props} onSwitch={() => setIsSignup(true)} />
            )}
          </div>
        </Col>

        <Col
          md={7}
          className="login-right position-relative p-0 d-none d-md-block"
        >
          <div className="brand position-absolute top-0 start-0 p-4 text-white">
            <Image
              src="/logo.png"
              width="48"
              height="48"
              className="me-2"
              alt="Cinomnia logo"
            />
            <b>Cinomnia</b>
          </div>

          <Image
            src="/login-bg.jpg"
            alt="Login background"
            fluid
            className="h-100 w-100 object-fit-cover"
          />
        </Col>
      </Row>
    </Container>
  );
}
