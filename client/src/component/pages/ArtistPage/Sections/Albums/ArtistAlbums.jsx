import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const ArtistAlbums = ({ artistState }) => {
  const { artistAlbums } = artistState;

  let slider = document.querySelector(".albums-container");

  const btnPrev = () => {
    if (slider) {
      let width = slider.clientWidth;
      slider.scrollLeft = slider.scrollLeft - width;
    }
  };
  const btnNext = () => {
    if (slider) {
      let width = slider.clientWidth;
      slider.scrollLeft = slider.scrollLeft + width;
    }
  };
  return (
    <Container>
      <InfoWrapper>
        <div className="info">
          <h2 style={{ fontSize: "2rem" }}>Popular Albums</h2>
          <div className="icons">
            <FaArrowLeft size={35} onClick={btnPrev} />
            <FaArrowRight size={35} onClick={btnNext} />
          </div>
        </div>
      </InfoWrapper>
      <CardWrapper layout className="albums-container">
        <AnimatePresence>
          {artistAlbums?.map((albums) => {
            const { title, id, cover_xl } = albums;
            return (
              <motion.div
                style={{ display: "flex" }}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                layout
                key={id}
              >
                <StyledLink to={`/album/${id}`}>
                  <img src={cover_xl} alt={title} />
                  <p> {title}</p>
                </StyledLink>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </CardWrapper>
    </Container>
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
`;
const Container = styled.div`
  margin-top: 20px;
  min-height: 35vh;
`;
const InfoWrapper = styled.div`
  padding: 15px;
  width: 99%;
  display: flex;
  align-items: center;

  h2 {
  }
  .icons {
    display: flex;
    width: 5%;
    justify-content: space-between;
    cursor: pointer;
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;
const CardWrapper = styled.div`
  display: flex;
  padding: 0 15px 0 15px;
  height: 100%;
  overflow: hidden;

  img {
    margin-top: 10px;
    width: auto;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }

  p {
    padding-top: 10px;
    font-size: 1rem;
    margin: 0;
    white-space: nowrap;
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
    background-color: transparent;
    text-align: center;
  }
`;

export default ArtistAlbums;
