import React, { useContext, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import styled from "styled-components";
import { CurrentUserContext } from "../../../../context/CurrentUserContext";
import FavoritesContext from "../../../../context/FavoritesContext";
const FavoriteButton = ({ track }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const { favoritesState, favoritesDispatch } = useContext(FavoritesContext);

  const { songs } = favoritesState;
  const foundSong = songs.find((song) => song.id === track.id);

  // const [isLiked, setIsLiked] = useState(false);
  const toggle = () => {
    //Wont work unless someone is signedIn
    if (currentUser.fullName) {
      // setIsLiked(!isLiked);
      foundSong
        ? favoritesDispatch({
            type: "remove-favorite-song",
            data: track.id,
            email: currentUser.email,
          })
        : favoritesDispatch({
            type: "add-favorite-song",
            data: track,
            email: currentUser.email,
          });
    }
  };
  return (
    <Wrapper style={{ marginTop: "12px" }}>
      {foundSong && currentUser.fullName ? (
        <Liked onClick={toggle} />
      ) : (
        <Unlike onClick={toggle} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin: 0 5px;
  padding: 0px;
  transition: all 0.2s ease-out;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Unlike = styled(FaRegHeart)`
  background-color: transparent;
`;
const Liked = styled(FcLike)`
  background-color: transparent;
`;
export default FavoriteButton;
