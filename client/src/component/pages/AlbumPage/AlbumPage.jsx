import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AlbumContext } from "../../context/AlbumContext";
import AlbumBanner from "./Sections/AlbumBanner";
import AlbumSongs from "./Sections/AlbumSongs/AlbumSongs";
import LoadingSpinner from "../../LoadingComponents/LoadingSpinner";

const AlbumPage = () => {
  const { setAlbumId, albumState } = useContext(AlbumContext);
  const { id } = useParams();
  useEffect(() => {
    setAlbumId(id);
    window.scrollTo(0, 0);
  }, [id, setAlbumId]);

  return (
    <>
      {albumState.loaded ? (
        <Container>
          <AlbumBanner albumState={albumState} />
          <AlbumSongs albumState={albumState} />
        </Container>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
`;

export default AlbumPage;
