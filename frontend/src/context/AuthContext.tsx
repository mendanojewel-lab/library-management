import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type User = {
  _id?: string;
  name?: string;
  email: string;
  role?: "ADMIN" | "USER";
};

type AuthState = {
  user: User | null;
  token: string | null;
};

type AuthContextType = AuthState & {
  loading: boolean;
  error: string | null;
  login: (payload: { email: string; password: string }) => Promise<void>;
  register: (payload: {
    name: string;
    email: string;
    password: string;
    role: string;
  }) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = "auth";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        // console.log(parsed.user)
        setUser(parsed.user || null);
        setToken(parsed.token || null);

        if (parsed.user?.role === "ADMIN") navigate("/admin");
        else navigate("/user");
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const save = (u: User | null, t: string | null) => {
    setUser(u);
    setToken(t);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ user: u, token: t }));
  };

  const login = async (payload: { email: string; password: string }) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/auth/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      console.log(data);
      if (!res.ok) throw new Error(data.message || "Signin failed");
      // Expect server returns { token, user }
      save(data.data.user || null, data.data.token || null);
      setLoading(false);
      // redirect based on role
      if (data.data.user?.role === "ADMIN") navigate("/admin");
      else navigate("/user");
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
      throw err;
    }
  };

  const register = async (payload: {
    name: string;
    email: string;
    password: string;
    role: string;
  }) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      console.log(data);
      if (!res.ok) throw new Error(data.message || "Signup failed");
      save(data.data.user || null, data.data.token || null);
      setLoading(false);
      if (data.data.user?.role === "ADMIN") navigate("/admin");
      else navigate("/user");
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
      throw err;
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem(STORAGE_KEY);
    navigate("/signin");
  };

  return (
    <AuthContext.Provider
      value={{ user, token, loading, error, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

export default AuthContext;
