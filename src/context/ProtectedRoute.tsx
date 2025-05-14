import { JSX } from "react";
import { useAuth } from "./useAuth";
import { Navigate } from "react-router-dom";

interface ProtectedProps {
  children: JSX.Element;
}

export default function ProtectedRoute({ children }: ProtectedProps) {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/login" replace />;

  return children;
  
}
