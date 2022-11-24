import { createContext, useEffect, useReducer, useState } from "react";

export const ArtistContext = createContext();
const initialData = {
  artistDetails: {},
  artistRelated: [],
  artistAlbums: [],
  artistTopsSongs: [],
  loaded: false,
};

const getArtistDetails = async (id, artistDispatch) => {
  try {
    const response = await fetch(`https://iki-music.onrender.com/artist/${id}`);
    const data = await response.json();
    artistDispatch({ type: "get-basic-details", data: data.data });
  } catch (err) {
    console.log(err);
  }
};

const getArtistAlbums = async (id, artistDispatch) => {
  try {
    const response = await fetch(
      `https://iki-music.onrender.com/artist/${id}/albums`
    );
    const data = await response.json();
    artistDispatch({ type: "get-albums", data: data.data });
  } catch (err) {
    console.log(err);
  }
};

const getArtistRelated = async (id, artistDispatch) => {
  try {
    const response = await fetch(
      `https://iki-music.onrender.com/artist/${id}/related`
    );
    const data = await response.json();
    artistDispatch({ type: "get-related", data: data.data });
  } catch (err) {
    console.log(err);
  }
};

const getArtistTopSongs = async (id, artistDispatch) => {
  try {
    const response = await fetch(
      `https://iki-music.onrender.com/artist/${id}/top`
    );
    const data = await response.json();
    artistDispatch({ type: "get-top-songs", data: data.data });
  } catch (err) {
    console.log(err);
  }
};

const ArtistReducer = (state, action) => {
  switch (action.type) {
    case "get-basic-details": {
      const newState = {
        ...state,
        artistDetails: { ...action.data },
        loaded: true,
      };
      return newState;
    }
    case "get-albums": {
      const newState = {
        ...state,
        artistAlbums: [...action.data],
        loaded: true,
      };
      return newState;
    }
    case "get-related": {
      const newState = {
        ...state,
        artistRelated: [...action.data],
        loaded: true,
      };
      return newState;
    }
    case "get-top-songs": {
      const newState = {
        ...state,
        artistTopsSongs: [...action.data],
        loaded: true,
      };
      return newState;
    }
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
export const ArtistContextProvider = ({ children }) => {
  const [artistId, setArtistId] = useState(null);
  const [artistState, artistDispatch] = useReducer(ArtistReducer, initialData);

  useEffect(() => {
    if (artistId) {
      getArtistDetails(artistId, artistDispatch);
      getArtistAlbums(artistId, artistDispatch);
      getArtistRelated(artistId, artistDispatch);
      getArtistTopSongs(artistId, artistDispatch);
    }
  }, [artistId]);

  return (
    <ArtistContext.Provider
      value={{ artistId, setArtistId, artistState, artistDispatch }}
    >
      {children}
    </ArtistContext.Provider>
  );
};
