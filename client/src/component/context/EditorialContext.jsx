import React, { createContext, useReducer } from "react";
import { useEffect } from "react";
import { useQuery } from "react-query";
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

const fetchEditorials = async () => {
  const res = await fetch("/editorial");
  return await res.json();
};
export const EditorialContextProvider = ({ children }) => {
  const [editorialState, editorialDispatcher] = useReducer(
    EditorialReducer,
    initialState
  );
  const results = useQuery("get-editorials", fetchEditorials);
  const { isLoading, data } = results;
  useEffect(() => {
    if (!isLoading) {
      editorialDispatcher({ type: "getting-editorial-data", data: data.data });
    }
  }, [isLoading]);

  const { tracks, albums, artists, playlists } = editorialState;

  return (
    <EditorialContext.Provider
      value={{ isLoading, tracks, albums, artists, playlists }}
    >
      {children}
    </EditorialContext.Provider>
  );
};

export default EditorialContext;
