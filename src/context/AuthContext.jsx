import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null means not logged in
  const [redirectPath, setRedirectPath] = useState(null);
  const navigate = useNavigate();

  const login = (userData) => {
    setUser(userData);

    // navigate after login
    if (redirectPath) {
      navigate(redirectPath, { replace: true });
      setRedirectPath(null); // clear after navigating
    } else {
      navigate("/", { replace: true }); // fallback
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, redirectPath, setRedirectPath }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
