import React, { createContext, useReducer } from "react";
import { useEffect } from "react";

export const EditorialContext = createContext(null);
const initialState = {
  tracks: null,
  albums: null,
  artists: null,
  playlists: null,
};

const EditorialReducer = (state, action) => {
  switch (action.type) {
    case "getting-editorial-data": {
      const { tracks, albums, artists, playlists } = action.data;
      return {
        ...state,
        tracks: tracks.data,
        albums: albums.data,
        artists: artists.data,
        playlists: playlists.data,
      };
    }
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
export const EditorialContextProvider = ({ children }) => {
  const [editorialState, editorialDispatcher] = useReducer(
    EditorialReducer,
    initialState
  );

  useEffect(() => {
    const fetchEditorialData = async () => {
      try {
        const response = await fetch("/editorial");
        const jsonData = await response.json();

        const data = await jsonData.data;

        editorialDispatcher({ type: "getting-editorial-data", data: data });
      } catch (err) {
        console.log(err);
      }
    };
    fetchEditorialData();
  }, []);
  const { tracks, albums, artists, playlists } = editorialState;

  return (
    <EditorialContext.Provider value={{ tracks, albums, artists, playlists }}>
      {children}
    </EditorialContext.Provider>
  );
};

export default EditorialContext;
