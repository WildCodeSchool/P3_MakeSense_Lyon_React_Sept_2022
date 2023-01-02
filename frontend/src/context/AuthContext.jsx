/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useEffect, useState } from "react";

const CurrentConnexionContext = createContext();
export default CurrentConnexionContext;
// and then export a wrapper that manages state :
export function CurrentUserConnexionContextProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const userAuth = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (userAuth) {
      setIsLogin(true);
    }
  }, []);

  return (
    <CurrentConnexionContext.Provider value={{ isLogin }}>
      {children}
    </CurrentConnexionContext.Provider>
  );
}
