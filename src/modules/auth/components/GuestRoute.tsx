import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

type GuestRouteProps = {
  children: React.ReactNode;
};

export default function GuestRoute({ children }: GuestRouteProps) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
