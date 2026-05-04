import { Form, Button, InputGroup } from "react-bootstrap";
import "./loginPageStyle.css";

type Props = {
  fname: string;
  setFname: (val: string) => void;
  lname: string;
  setLname: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
  password: string;
  setPassword: (val: string) => void;

  loading: boolean;
  error: string;
  setError: (val: string) => void;

  handleRegister: () => Promise<boolean | void>;
  onSwitch: () => void;
};

export function SignUpForm({
  fname,
  setFname,
  lname,
  setLname,
  email,
  setEmail,
  password,
  setPassword,
  loading,
  error,
  setError,
  handleRegister,
  onSwitch,
}: Props) {
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const success = await handleRegister();
    if (success) onSwitch();
  };

  return (
    <>
      <h2 className="fw-bold mb-2">Create an account</h2>

      <p className="text-muted mb-3">
        Already have an account?{" "}
        <button type="button" className="switch-link" onClick={onSwitch}>
          Sign In
        </button>
      </p>

      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <InputGroup>
            <Form.Control
              size="lg"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <InputGroup>
            <Form.Control
              size="lg"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <InputGroup>
            <Form.Control
              size="lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            size="lg"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {error && <p className="text-danger mt-2">{error}</p>}

        <Button
          size="lg"
          className="w-100 mt-4"
          disabled={loading}
          type="submit"
        >
          {loading ? "Creating..." : "Create account"}
        </Button>
      </Form>
    </>
  );
}
