import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import type { AuthContextType } from "../../../types/auth";
import type { User } from "../../../types/user";
import { getCurrentUser } from "../../user/services/userService";
import { login, logout, register } from "../services/authService";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  //Check trạng thái đăng nhập khi app load
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const me = await getCurrentUser();
        setUser(me);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  //Login
  const handleLogin: AuthContextType["login"] = async (data) => {
    await login(data);
    const me = await getCurrentUser();
    setUser(me);
  };

  //Register
  const handleRegister: AuthContextType["register"] = async (data) => {
    await register(data);
  };

  //Logout
  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        login: handleLogin,
        register: handleRegister,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
}
