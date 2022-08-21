import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import styled from "styled-components";
const FavoriteButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const toggle = () => setIsLiked(!isLiked);

  return (
    <Wrapper style={{ marginTop: "12px" }}>
      {isLiked ? <Unlike onClick={toggle} /> : <Liked onClick={toggle} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin: 0 5px;
  padding: 0px;
  transition: all 0.2s ease-out;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Unlike = styled(FaRegHeart)`
  background-color: transparent;
`;
const Liked = styled(FaHeart)`
  background-color: transparent;
`;
export default FavoriteButton;
