import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import SearchContext from "../../context/SearchContext";
import AlbumsResults from "./Sections/AlbumsResults/AlbumsResults";
import ArtistsResults from "./Sections/ArtistsResults/ArtistsResults";
import SongsResults from "./Sections/SongsResults/SongsResults";

const SearchResultPage = () => {
  const { searchState, userQuery } = useContext(SearchContext);

  const { songsResult, artistResult, albumsResult } = searchState;
  return (
    <Container>
      <h1 className="title">
        Search results for: <span>{userQuery}</span>
      </h1>
      <p>
        About {songsResult.length + artistResult.length + albumsResult.length}{" "}
        results
      </p>
      {searchState && (
        <>
          {songsResult.length > 0 && (
            <SongsResults songs={searchState?.songsResult} />
          )}
          {artistResult.length > 0 && (
            <ArtistsResults artists={searchState?.artistResult} />
          )}

          {albumsResult.length > 0 && (
            <AlbumsResults albums={searchState?.albumsResult} />
          )}
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;

  .title {
    text-align: start;
    margin-left: 20px;
    font-size: 40px;
  }

  p {
    text-align: start;
    margin-left: 20px;
  }
`;

export default SearchResultPage;
