import React, { useContext } from "react";
import styled from "styled-components";
import EditorialContext from "../../../context/EditorialContext";
import SongCard from "./SongCard/SongCard";

const TopSongs = () => {
  const { tracks } = useContext(EditorialContext);
  return (
    <Wrapper>
      <h2>Top Songs</h2>
      <div className="songs-container">
        {tracks?.map((track) => {
          return <SongCard track={track} key={track.id} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    padding-top: 5px;
    padding-bottom: 12px;
  }
  .songs-container {
    width: 85%;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

export default TopSongs;
