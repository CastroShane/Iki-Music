import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
const fetchNewReleases = async () => {
  const res = await fetch("/new-releases");
  return await res.json();
};
const NewReleases = () => {
  const [newReleases, setNewReleases] = useState([]);
  const results = useQuery("get-genres", fetchNewReleases);
  const { isLoading, data } = results;

  useEffect(() => {
    if (!isLoading) {
      setNewReleases(data.data.data);
    }
  }, [isLoading]);

  return (
    <Container>
      <InfoWrapper>
        <div>
          <h2 style={{ fontSize: "2rem" }}>New Releases</h2>
        </div>
      </InfoWrapper>
      <CardWrapper layout>
        {!isLoading && (
          <AnimatePresence>
            {newReleases?.map((playlist) => {
              const { id, cover_medium, title } = playlist;
              return (
                <motion.div
                  style={{ display: "flex" }}
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  layout
                  key={id}
                >
                  <StyledLink to={`/playlist/${id}`}>
                    <img src={cover_medium} />
                    <p>{title}</p>
                  </StyledLink>
                </motion.div>
              );
            })}
          </AnimatePresence>
        )}
      </CardWrapper>
    </Container>
  );
};

const StyledLink = styled(Link)`
  width: 150px;
  margin: 15px 20px;
  text-decoration: none;
  transition: transform 0.2s ease-out;

  &:hover {
    cursor: pointer;
    transform: translate(2px, -5px);
  }
`;
const Container = styled.div`
  margin-top: 20px;
  min-height: 35vh;
`;
const InfoWrapper = styled.div`
  padding: 15px;
  width: auto;
  display: flex;
  align-items: center;
`;
const CardWrapper = styled.div`
  display: flex;
  padding: 0 15px 0 15px;
  height: 100%;

  img {
    margin-top: 10px;
    width: auto;
    height: 100%;
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

export default NewReleases;
