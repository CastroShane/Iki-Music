import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArtistContext } from "../../context/ArtistContext";

const ArtistPage = () => {
  const { artistId, setArtistId } = useContext(ArtistContext);
  const { id } = useParams();
  useEffect(() => {
    setArtistId(id);
  }, [id, setArtistId]);
  console.log("artistId:", artistId);
  return <div>ArtistPage</div>;
};

export default ArtistPage;
