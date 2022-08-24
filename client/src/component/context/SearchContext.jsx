import React, { createContext, useReducer, useState } from "react";
export const SearchContext = createContext(null);
const initialState = {
  songsResult: [],
  albumsResult: [],
  artistResult: [],
};

const searchReducer = (state, action) => {
  const { songsResult, albumsResult, artistResult } = state;

  switch (action.type) {
    case "search-songs": {
      const newState = {
        ...state,
        songsResult: action.data,
      };
      return newState;
    }

    case "search-albums": {
      const newState = {
        ...state,
        albumsResult: action.data,
      };
      return newState;
    }

    case "search-artist": {
      const newState = {
        ...state,
        artistResult: action.data,
      };
      return newState;
    }
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
export const SearchContextProvider = ({ children }) => {
  const [searchState, searchDispatch] = useReducer(searchReducer, initialState);
  const [userQuery, setUserQuery] = useState("");
  return (
    <SearchContext.Provider
      value={{ userQuery, setUserQuery, searchState, searchDispatch }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
