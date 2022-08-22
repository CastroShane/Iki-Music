import { createContext, useEffect, useReducer, useState } from "react";

export const ArtistContext = createContext();
const initialData = {
  artistDetails: {},
  artistRelated: [],
  artistAlbums: [],
  artistTopsSongs: [],
};
const getArtistDetails = async (id, artistData, setArtistData) => {
  try {
    const response = await fetch(`/artist/${id}`);
    const data = await response.json();
    setArtistData({ ...artistData, artistDetails: data.data });
  } catch (err) {
    console.log(err);
  }
};

const getArtistAlbums = async (id, artistData, setArtistData) => {
  try {
    const response = await fetch(`/artist/${id}`);
    const data = await response.json();
    setArtistData({ ...artistData, artistDetails: data.data });
  } catch (err) {
    console.log(err);
  }
};
export const ArtistContextProvider = ({ children }) => {
  const [artistId, setArtistId] = useState(null);
  const [artistData, setArtistData] = useState(initialData);

  useEffect(() => {
    if (artistId) {
      getArtistDetails(artistId, artistData, setArtistData);
    }
  }, [artistId]);
  console.log("asdasd", artistId);
  console.log("artistData:", artistData);
  return (
    <ArtistContext.Provider value={{ artistId, setArtistId }}>
      {children}
    </ArtistContext.Provider>
  );
};
