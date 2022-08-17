import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import EditorialContext from "../../../context/EditorialContext";

const PopularAlbums = () => {
  const { albums } = useContext(EditorialContext);
  console.log("albums:", albums);
  return (
    <Wrapper>
      <h2>Popular Albums</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default PopularAlbums;
