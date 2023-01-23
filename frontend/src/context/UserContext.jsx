import { createContext, useState, useContext, useEffect } from "react";

const CurrentUserContext = createContext();

export default CurrentUserContext;

export function CurrentUserContextProvider({ children }) {
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      headers: myHeader,
    };

    fetch(`http://localhost:5000/user/bytoken`, requestOptions)
      .then((response) => response.json())
      .then((result) => setUser(result))
      .catch((error) => console.warn("error", error));
  }, []);

  return (
    <CurrentUserContext.Provider value={{ user, setUser, token }}>
      {children}
    </CurrentUserContext.Provider>
  );
}

export const useCurrentUserContext = () => useContext(CurrentUserContext);
