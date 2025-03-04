// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // Import the useAuth hook

function ProtectedRoute() {
  const { isAuthenticated } = useAuth(); // Use the hook to check authentication

  // If authenticated, render the child routes; otherwise, redirect to login
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;