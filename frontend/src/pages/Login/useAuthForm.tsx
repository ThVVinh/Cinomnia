import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userService } from "../../services/userService";
import { useAuth } from "../../auth/useAuth";

export const useAuthForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, pwd);
      navigate("/");
    } catch {
      setError("Login failed. Please check your credentials.");
    }
  };

  const handleRegister = async () => {
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      setLoading(true);
      await userService.register(fname, lname, email, password);
      return true;
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("An unknown error occurred");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    pwd,
    setPwd,
    fname,
    setFname,
    lname,
    setLname,
    password,
    setPassword,
    loading,
    error,
    setError,

    handleLogin,
    handleRegister,
  };
};
