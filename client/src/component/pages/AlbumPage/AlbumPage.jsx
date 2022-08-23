import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AlbumContext } from "../../context/AlbumContext";

const AlbumPage = () => {
  const { setAlbumId, albumState } = useContext(AlbumContext);
  const { id } = useParams();
  useEffect(() => {
    setAlbumId(id);
    window.scrollTo(0, 0);
  }, [id, setAlbumId]);

  console.log(albumState);
  return <div>AlbumPage</div>;
};

export default AlbumPage;
