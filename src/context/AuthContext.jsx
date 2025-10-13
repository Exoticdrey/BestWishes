import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null means not logged in
  const [redirectPath, setRedirectPath] = useState(null);
  const navigate = useNavigate();

  const login = (userData) => {
    setUser(userData);
    // if a redirect path exists, send them there
    if (redirectPath) {
      navigate(redirectPath);
      setRedirectPath(null);
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, redirectPath, setRedirectPath }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using auth data
export const useAuth = () => useContext(AuthContext);
