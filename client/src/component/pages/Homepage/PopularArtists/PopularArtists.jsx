import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import EditorialContext from "../../../context/EditorialContext";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LoadingCards from "../../../LoadingComponents/LoadingCards";

const PopularArtists = () => {
  const { artists } = useContext(EditorialContext);
  return (
    <Container>
      <InfoWrapper>
        <div>
          <h2 style={{ fontSize: "2rem" }}>Popular Artists</h2>
        </div>
      </InfoWrapper>
      <CardWrapper layout>
        <AnimatePresence>
          {artists ? (
            artists?.map((artist) => {
              const { name, id, picture_xl } = artist;
              return (
                <motion.div
                  style={{ display: "flex" }}
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  layout
                  key={id}
                >
                  <StyledLink to={`/artist/${id}`}>
                    <img src={picture_xl} alt={name} />
                    <p> {name}</p>
                  </StyledLink>
                </motion.div>
              );
            })
          ) : (
            <LoadingCards />
          )}
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
`;
const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px 0 15px;
  height: 100%;

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

export default PopularArtists;
