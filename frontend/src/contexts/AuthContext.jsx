/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
export default AuthContext;

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setToken(JSON.parse(localStorage.getItem("user")).token || "");
    } else {
      setToken("");
    }
  }, [localStorage.getItem("user")]);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")).user);
    } else {
      setUser({});
    }
  }, [localStorage.getItem("user")]);

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
