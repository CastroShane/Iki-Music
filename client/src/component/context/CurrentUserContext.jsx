import { createContext, useEffect, useState } from "react";

export const CurrentUserContext = createContext();
export const CurrentUserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [error, setError] = useState(false);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        error,
        setError,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
