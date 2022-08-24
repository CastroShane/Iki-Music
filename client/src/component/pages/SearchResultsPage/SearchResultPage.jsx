import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import SearchContext from "../../context/SearchContext";
import AlbumsResults from "./Sections/AlbumsResults/AlbumsResults";
import SongsResults from "./Sections/SongsResults/SongsResults";

const SearchResultPage = () => {
  const { userQuery, setUserQuery, searchDispatch, searchState } =
    useContext(SearchContext);

  console.log("searchState:", searchState);
  return (
    <Container>
      <SongsResults songs={searchState?.songsResult} />
      <AlbumsResults albums={searchState?.albumsResult} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;

  .title {
    text-align: center;
    font-size: 50px;
  }
`;

export default SearchResultPage;
