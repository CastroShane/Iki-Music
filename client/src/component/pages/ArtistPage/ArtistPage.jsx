import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ArtistContext } from "../../context/ArtistContext";
import ArtistAlbums from "./Sections/Albums/ArtistAlbums";
import Banner from "./Sections/Banner";
import RelatedArtists from "./Sections/RelatedArtists/RelatedArtists";
import TopSongs from "./Sections/Topsongs/TopSongs";

const ArtistPage = () => {
  const { setArtistId, artistState } = useContext(ArtistContext);
  const { id } = useParams();
  useEffect(() => {
    setArtistId(id);
    window.scrollTo(0, 0);
  }, [id, setArtistId]);

  return (
    <Container>
      <Banner artistState={artistState} />
      <TopSongs artistState={artistState} />
      <ArtistAlbums artistState={artistState} />
      <RelatedArtists artistState={artistState} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
`;

export default ArtistPage;
