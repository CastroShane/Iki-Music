import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import FavoritesContext from "../../context/FavoritesContext";
import UserAlbums from "./Sections/UserAlbums/UserAlbums";
import UserArtists from "./Sections/UserArtists/UserArtists";
import UserSongs from "./Sections/UserSongs/UserSongs";

const UserLibrary = () => {
  const { favoritesState } = useContext(FavoritesContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { songs, albums, artists } = favoritesState;
  return (
    <Container>
      <h1 className="title">Your Library</h1>
      {songs && <UserSongs songs={songs} />}
      <UserAlbums albums={albums} />
      <UserArtists artists={artists} />
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

export default UserLibrary;
