import React, { createContext, useContext, useReducer, useState } from "react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { CurrentUserContext } from "./CurrentUserContext";
export const FavoritesContext = createContext(null);

export const FavoritesContextProvider = ({ children }) => {
  const { currentUser } = useContext(CurrentUserContext);

  //   const fetchUpdate = async () => {
  //     try {
  //       const response = await fetch("/favorites", {
  //         method: "POST",
  //         headers: { "Content-type": "application/json" },
  //         body: JSON.stringify({
  //           userId: currentUser._id,
  //           favorites: {
  //             songs: [{ hello: "goodbye" }],
  //           },
  //         }),
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   //   useEffect(() => {
  //   //     fetchUpdate();
  //   //   }, []);

  return (
    <FavoritesContext.Provider value={{ currentUser }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
