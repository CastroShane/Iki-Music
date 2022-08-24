import React from "react";
import styled from "styled-components";
import maintenance from "./assets/construction.png";
const PlaylistPage = () => {
  return (
    <Container>
      <img src={maintenance} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default PlaylistPage;
