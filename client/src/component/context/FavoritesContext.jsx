import React, { createContext, useContext, useReducer, useState } from "react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { CurrentUserContext } from "./CurrentUserContext";
export const FavoritesContext = createContext(null);

export const FavoritesContextProvider = ({ children }) => {
  const { currentUser } = useContext(CurrentUserContext);

  console.log(currentUser.favorites);
  return (
    <FavoritesContext.Provider value={{ currentUser }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
