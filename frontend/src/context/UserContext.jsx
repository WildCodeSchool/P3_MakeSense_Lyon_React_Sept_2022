/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useContext } from "react";

const CurrentUserContext = createContext();

export default CurrentUserContext;

export function CurrentUserContextProvider({ children }) {
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");

  return (
    <CurrentUserContext.Provider value={{ user, setUser, token }}>
      {children}
    </CurrentUserContext.Provider>
  );
}

export const useCurrentUserContext = () => useContext(CurrentUserContext);
