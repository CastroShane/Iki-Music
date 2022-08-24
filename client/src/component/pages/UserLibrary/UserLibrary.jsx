import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import FavoritesContext from "../../context/FavoritesContext";
import UserSongs from "./Sections/UserSongs/UserSongs";

const UserLibrary = () => {
  const { favoritesState } = useContext(FavoritesContext);
  console.log("favoritesState:", favoritesState);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [favoritesState]);
  const { songs } = favoritesState;
  return (
    <Container>
      <h1 className="title">Your Library</h1>
      <UserSongs songs={songs} />
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
