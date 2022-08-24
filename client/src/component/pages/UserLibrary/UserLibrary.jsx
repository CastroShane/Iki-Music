import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import FavoritesContext from "../../context/FavoritesContext";
import UserAlbums from "./Sections/UserAlbums/UserAlbums";
import UserSongs from "./Sections/UserSongs/UserSongs";

const UserLibrary = () => {
  const { favoritesState } = useContext(FavoritesContext);
  console.log("favoritesState:", favoritesState);
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("I've refresh");
  }, []);
  const { songs, albums } = favoritesState;
  return (
    <Container>
      <h1 className="title">Your Library</h1>
      {songs && <UserSongs songs={songs} />}
      <UserAlbums albums={albums} />
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
