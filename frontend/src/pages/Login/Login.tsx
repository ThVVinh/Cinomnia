import { LoginView } from "./LoginView";
import { useState } from "react";
import { useAuthForm } from "./useAuthForm";

export function Login() {
  const auth = useAuthForm();
  const [isSignup, setIsSignup] = useState(false);

  return <LoginView {...auth} isSignup={isSignup} setIsSignup={setIsSignup} />;
}
