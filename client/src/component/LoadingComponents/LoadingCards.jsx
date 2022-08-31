import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";
import cardImage from "./assets/loadingcard.jpg";
const LoadingCards = () => {
  return (
    <motion.div
      style={{ display: "flex" }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
    >
      <StyledLink to={"/"}>
        <img src={cardImage} alt="img1" />
        <p>Name</p>
      </StyledLink>
      <StyledLink to={"/"}>
        <img src={cardImage} alt="img2" />
        <p>Name</p>
      </StyledLink>
      <StyledLink to={"/"}>
        <img src={cardImage} alt="img3" />
        <p>Name</p>
      </StyledLink>
      <StyledLink to={"/"}>
        <img src={cardImage} alt="img4" />
        <p>Name</p>
      </StyledLink>
      <StyledLink to={"/"}>
        <img src={cardImage} alt="img5" />
        <p>Name</p>
      </StyledLink>
      <StyledLink to={"/"}>
        <img src={cardImage} alt="img6" />
        <p>Name</p>
      </StyledLink>
      <StyledLink to={"/"}>
        <img src={cardImage} alt="img7" />
        <p>Name</p>
      </StyledLink>
      <StyledLink to={"/"}>
        <img src={cardImage} alt="img8" />
        <p>Name</p>
      </StyledLink>
      <StyledLink to={"/"}>
        <img src={cardImage} alt="img9" />
        <p>Name</p>
      </StyledLink>
      <StyledLink to={"/"}>
        <img src={cardImage} alt="img10" />
        <p>Name</p>
      </StyledLink>
      );
    </motion.div>
  );
};

const StyledLink = styled(Link)`
  width: 150px;
  margin: 15px 20px;
  text-decoration: none;
  transition: 0.4s ease-out;

  &:hover {
    cursor: pointer;
    transform: translateY(-20px);
  }

  img {
    width: 150px;
    height: 150px;
  }
`;

export default LoadingCards;
