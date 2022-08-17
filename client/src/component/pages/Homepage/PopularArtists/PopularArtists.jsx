import React from "react";
import styled from "styled-components";

const PopularArtists = () => {
  return (
    <Container>
      <InfoWrapper>
        <h2>Popular Artists</h2>
        <div className="prev-next"></div>
      </InfoWrapper>
      <CardWrapper></CardWrapper>
    </Container>
  );
};

const Container = styled.div``;
const InfoWrapper = styled.div``;
const CardWrapper = styled.div``;

export default PopularArtists;
