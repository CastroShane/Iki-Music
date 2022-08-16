import React, { createContext, useReducer, useState } from "react";
import { useEffect } from "react";

export const GenreContext = createContext(null);
const initialState = {
  data: null,
  loaded: false,
};

const GenreReducer = (state, action) => {
  switch (action.type) {
    case "getting-genre-data": {
      return {
        ...state,
        data: action.data,
        loaded: true,
      };
    }
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
export const GenreContextProvider = ({ children }) => {
  const [genreState, genreDispatcher] = useReducer(GenreReducer, initialState);
  // Created new state that will store the data that can be  manipulated
  const [filteredGenre, setFilteredGenre] = useState([]);

  useEffect(() => {
    const fetchGenreData = async () => {
      try {
        const response = await fetch("/all-genres");
        const jsonData = await response.json();

        const data = await jsonData.data.data;

        genreDispatcher({ type: "getting-genre-data", data: data });
        //Slice for removing the first item in the array which is "all-genre"
        setFilteredGenre(data.slice(1, data.length));
      } catch (err) {
        console.log(err);
      }
    };
    fetchGenreData();
  }, []);
  const { data, loaded } = genreState;
  return (
    <GenreContext.Provider
      value={{ data, loaded, filteredGenre, setFilteredGenre }}
    >
      {children}
    </GenreContext.Provider>
  );
};
