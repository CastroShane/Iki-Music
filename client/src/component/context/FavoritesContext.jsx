import React, { createContext, useContext, useReducer, useState } from "react";

import { CurrentUserContext } from "./CurrentUserContext";
export const FavoritesContext = createContext(null);
const initialState = {
  songs: [],
  albums: [],
  artists: [],
  playlists: [],
};
const FavoritesReducer = (state, action) => {
  const updateUserFavorites = async (email, favorites) => {
    try {
      await fetch("https://iki-music.onrender.com/favorites", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          email,
          favorites,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const { songs, artists, albums } = state;

  switch (action.type) {
    case "add-favorite-song": {
      const newState = {
        ...state,
        songs: [...songs, action.data],
      };
      updateUserFavorites(action.email, newState);
      return newState;
    }
    case "remove-favorite-song": {
      const newState = {
        ...state,
        songs: [...songs?.filter((song) => song.id !== action.data)],
      };
      updateUserFavorites(action.email, newState);
      return newState;
    }
    case "follow-artist": {
      const newState = {
        ...state,
        artists: [...artists, action.data],
      };
      updateUserFavorites(action.email, newState);
      return newState;
    }
    case "unfollow-artist": {
      const newState = {
        ...state,
        artists: [...artists?.filter((artist) => artist.id !== action.data)],
      };
      updateUserFavorites(action.email, newState);
      return newState;
    }

    case "like-album": {
      const newState = {
        ...state,
        albums: [...albums, action.data],
      };
      updateUserFavorites(action.email, newState);
      return newState;
    }
    case "unlike-album": {
      const newState = {
        ...state,
        albums: [...albums?.filter((album) => album.id !== action.data)],
      };
      updateUserFavorites(action.email, newState);
      return newState;
    }
    case "change-initial-state": {
      const newState = {
        ...action.data,
      };
      updateUserFavorites(action.email, newState);
      return newState;
    }
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
export const FavoritesContextProvider = ({ children }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const { favorites } = currentUser;
  const [favoritesState, favoritesDispatch] = useReducer(
    FavoritesReducer,
    initialState
  );

  return (
    <FavoritesContext.Provider
      value={{ favorites, favoritesState, favoritesDispatch }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
