import { createContext, useEffect, useReducer, useState } from "react";

export const ArtistContext = createContext();
const initialData = {
  artistDetails: {},
  artistRelated: [],
  artistAlbums: [],
  artistTopsSongs: [],
};

const getArtistDetails = async (id, artistDispatch) => {
  try {
    const response = await fetch(`/artist/${id}`);
    const data = await response.json();
    artistDispatch({ type: "get-basic-details", data: data.data });
  } catch (err) {
    console.log(err);
  }
};

const getArtistAlbums = async (id, artistDispatch) => {
  try {
    const response = await fetch(`/artist/${id}/albums`);
    const data = await response.json();
    artistDispatch({ type: "get-albums", data: data.data });
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
      };
      return newState;
    }
    case "get-albums": {
      const newState = {
        ...state,
        artistAlbums: [...action.data],
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
    }
  }, [artistId]);
  console.log("asdasd", artistState);

  return (
    <ArtistContext.Provider value={{ artistId, setArtistId }}>
      {children}
    </ArtistContext.Provider>
  );
};
