import React, { useContext } from "react";
import styled from "styled-components";
import { FcBookmark } from "react-icons/fc";
import { MdBookmarkBorder } from "react-icons/md";
import FavoritesContext from "../../../context/FavoritesContext";
import { CurrentUserContext } from "../../../context/CurrentUserContext";

//Add commas to the number of fans
const numSeparator = (num) => {
  return new Intl.NumberFormat().format(num);
};
const AlbumBanner = ({ albumState }) => {
  console.log("albumState:", albumState);
  const { currentUser } = useContext(CurrentUserContext);
  const { favoritesState, favoritesDispatch } = useContext(FavoritesContext);
  const { albums } = favoritesState;
  const foundAlbum = albums.find((album) => album.id === albumState.id);
  const toggle = () => {
    //Wont work unless someone is signedIn
    if (currentUser.fullName) {
      foundAlbum
        ? favoritesDispatch({
            type: "unlike-album",
            data: albumState.id,
            email: currentUser.email,
          })
        : favoritesDispatch({
            type: "like-album",
            data: albumState,
            email: currentUser.email,
          });
    }
  };
  const { cover_xl, title, artist, fans, tracks, genres } = albumState;
  const fanNum = numSeparator(fans);
  return (
    <BannerWrapper
      style={{
        backgroundImage: `linear-gradient(
            0deg,
            rgb(220, 220, 220, 0.3),
            rgb(220, 220, 220, 0.3)
          ), url(${cover_xl})`,
      }}
    >
      <img src={artist.picture_medium} />
      <div className="details-wrapper">
        <div className="details">
          <h1>{title}</h1>
          <p>{artist.name}</p>
          <p>{fanNum} followers</p>
        </div>
        <button onClick={toggle}>
          {currentUser.fullName && foundAlbum ? (
            <FcBookmark size={30} className="icon" />
          ) : (
            <MdBookmarkBorder size={30} className="icon" />
          )}
          <span>{foundAlbum ? "Liked" : "Like"}</span>
        </button>
      </div>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  width: 100%;
  height: 40vh;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;

  .details-wrapper {
    display: flex;
    justify-content: space-between;

    width: 80vw;
  }
  .details {
    margin-top: 500px;
    margin-left: 20px;
  }
  img {
    margin-left: 50px;
    margin-top: 460px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
  p {
    color: white;
  }

  button {
    margin-top: 550px;
    margin-left: 20px;
    background-color: var(--default-font-color);
    height: 50px;
    width: 200px;
    border-radius: 25px;
    border: 2px solid var(--default-font-color);
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }

    .icon {
      margin-left: 26px;
    }
    span {
      font-size: larger;
      margin-left: 30px;
      font-weight: bold;
    }
  }
`;

export default AlbumBanner;
