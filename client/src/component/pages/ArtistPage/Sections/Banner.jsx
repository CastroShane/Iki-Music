import React, { useContext } from "react";
import styled from "styled-components";
import { FcBookmark } from "react-icons/fc";
import { MdBookmarkBorder } from "react-icons/md";
import FavoritesContext from "../../../context/FavoritesContext";
const Banner = ({ artistState }) => {
  const { artistDetails } = artistState;

  const { favoritesState, favoritesDispatch } = useContext(FavoritesContext);
  console.log("favoritesState:", favoritesState);

  const { picture_medium, name, nb_fan } = artistDetails;
  return (
    <BannerWrapper>
      <img src={picture_medium} />
      <div className="details-wrapper">
        <div className="details">
          <h1>{name}</h1>
          <p>{nb_fan.toLocaleString("en-US")} followers</p>
        </div>
        <button>
          <MdBookmarkBorder size={30} className="icon" />
          <span>Follow</span>
        </button>
      </div>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  width: 100%;
  height: 30vh;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;

  background: linear-gradient(
    -225deg,
    rgb(82, 113, 196) 0%,
    rgb(177, 159, 255) 48%,
    rgb(236, 161, 254) 100%
  );
  .details-wrapper {
    display: flex;
    justify-content: space-between;

    width: 80vw;
  }
  .details {
    margin-top: 160px;
    margin-left: 20px;
  }
  img {
    margin-left: 50px;
    margin-top: 180px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
  p {
    margin-left: 20px;
    color: white;
  }

  button {
    margin-top: 180px;
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

export default Banner;
