import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ArtistContext } from "../../context/ArtistContext";
import Banner from "./Sections/Banner";

const ArtistPage = () => {
  const { setArtistId, artistState } = useContext(ArtistContext);
  const { id } = useParams();
  useEffect(() => {
    setArtistId(id);
  }, [id, setArtistId]);
  return (
    <Container>
      <Banner artistState={artistState} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

export default ArtistPage;
