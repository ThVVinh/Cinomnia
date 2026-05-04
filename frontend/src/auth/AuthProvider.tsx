import { useEffect, useState } from "react";
import { AuthContext, type User } from "./AuthContext";
import api from "../utils/api";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    console.log("Checking auth with token:", `Bearer ${token}`);

    if (!token) {
      setLoading(false);
      return;
    }

    api
      .get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => {
        logout();
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const res = await api.post("/auth/login", { email, password });

      console.log("LOGIN RESPONSE:", res.data);

      const token = res.data.token;

      localStorage.setItem("token", token);

      const meRes = await api.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("ME RESPONSE:", meRes.data);

      setUser(meRes.data);

      return true;
    } catch (err) {
      console.error("LOGIN ERROR:", err);
      logout();
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
