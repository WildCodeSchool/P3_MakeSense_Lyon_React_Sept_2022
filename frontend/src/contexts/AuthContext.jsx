/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
export default AuthContext;

export function AuthContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const userAuth = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (userAuth) {
      setIsLogin(true);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ isLogin }}>{children}</AuthContext.Provider>
  );
}

export const userAuthContext = () => useContext(AuthContext);
