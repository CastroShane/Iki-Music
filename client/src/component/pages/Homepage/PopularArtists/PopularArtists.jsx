import React from "react";
import styled from "styled-components";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";

const PopularArtists = () => {
  return (
    <Container>
      <InfoWrapper>
        <div>
          <h2>Popular Artists</h2>
        </div>
        <div className="prev-next">
          <GrCaretPrevious size={30} />
          <GrCaretNext size={30} />
        </div>
      </InfoWrapper>
      <CardWrapper></CardWrapper>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
  border: 1px solid red;
  min-height: 35vh;
`;
const InfoWrapper = styled.div`
  padding: 15px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid red;

  .prev-next {
    display: flex;
  }
`;
const CardWrapper = styled.div``;

export default PopularArtists;
