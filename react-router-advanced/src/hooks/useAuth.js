// src/hooks/useAuth.js
import { useState } from "react";

// Simulate authentication logic
function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Default to false

  // Simulate login and logout functions
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
}

export default useAuth;