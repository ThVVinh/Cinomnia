import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import type { JSX } from "react";

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return user ? children : <Navigate to="/" />;
}