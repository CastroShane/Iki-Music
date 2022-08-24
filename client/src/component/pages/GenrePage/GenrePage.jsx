import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import styled from "styled-components";
import ArtistsContainer from "./Sections/ArtistsContainer";

const GenrePage = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const fetchGenreArtists = async () => {
    try {
      const res = await fetch(`/genre/${id}/artists`);
      return await res.json();
    } catch (err) {
      console.log(err);
    }
  };

  const results = useQuery("get-genre-artists", fetchGenreArtists);
  const { isLoading, data } = results;

  return (
    <Container>
      <h1>Genre's artists</h1>
      <ArtistsContainer isLoading={isLoading} data={data?.data} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    margin-top: 15px;
  }
`;
export default GenrePage;
