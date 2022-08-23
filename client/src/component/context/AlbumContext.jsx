import { createContext, useEffect, useReducer, useState } from "react";

export const AlbumContext = createContext();
const initialData = {};

const getAlbumDetails = async (id, albumDispatch) => {
  try {
    const response = await fetch(`/album/${id}`);
    const data = await response.json();
    albumDispatch({ type: "get-album-details", data: data.data });
  } catch (err) {
    console.log(err);
  }
};

const AlbumReducer = (state, action) => {
  switch (action.type) {
    case "get-album-details": {
      const newState = {
        ...action.data,
      };
      return newState;
    }
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
export const AlbumContextProvider = ({ children }) => {
  const [albumId, setAlbumId] = useState(null);
  const [albumState, albumDispatch] = useReducer(AlbumReducer, initialData);

  useEffect(() => {
    if (albumId) {
      getAlbumDetails(albumId, albumDispatch);
    }
  }, [albumId]);

  return (
    <AlbumContext.Provider
      value={{ albumId, setAlbumId, albumState, albumDispatch }}
    >
      {children}
    </AlbumContext.Provider>
  );
};
