import React from "react";
import styled from "styled-components";
import AlbumSongCard from "./AlbumSongCard";

const AlbumSongs = ({ albumState }) => {
  const { tracks } = albumState;
  return (
    <Wrapper>
      <h2>Top Songs</h2>
      <div className="songs-container">
        {tracks?.data?.map((song, index) => {
          return <AlbumSongCard track={song} index={index} key={song.id} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 200px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 95%;

  h2 {
    font-size: 40px;
    padding-top: 5px;
    padding-bottom: 12px;
  }
  .songs-container {
    width: 100%;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

export default AlbumSongs;
