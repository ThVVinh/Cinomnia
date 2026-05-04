import { Form, Button, InputGroup } from "react-bootstrap";
import "./loginPageStyle.css";


type Props = {
  email: string;
  setEmail: (val: string) => void;
  pwd: string;
  setPwd: (val: string) => void;

  error: string;
  setError: (val: string) => void;

  handleLogin: () => Promise<void>;
  onSwitch: () => void;
};

export function LoginForm({
  email,
  setEmail,
  pwd,
  setPwd,
  error,
  setError,
  handleLogin,
  onSwitch,
}: Props) {
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    await handleLogin();
  };

  return (
    <>
      <h2 className="fw-bold mb-2">Welcome Back!</h2>
      <p className="text-muted mb-4">Sign in to continue</p>

      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <InputGroup>
            <Form.Control
              size="lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            size="lg"
            type="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            placeholder="Enter password"
          />
        </Form.Group>

        {error && <p className="text-danger mt-2">{error}</p>}

        <Button size="lg" className="w-100 mt-3" type="submit">
          Sign In
        </Button>
      </Form>

      <p className="text-center mt-4 text-muted">
        Don’t have an account?{" "}
        <button type="button" className="switch-link" onClick={onSwitch}>
          Sign Up
        </button>
      </p>
    </>
  );
}
