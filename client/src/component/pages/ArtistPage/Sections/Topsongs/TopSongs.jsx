import React from "react";
import styled from "styled-components";
import ArtistSongCard from "./ArtistSongCard";

const TopSongs = ({ artistState }) => {
  const { artistTopsSongs } = artistState;
  console.log("artistTopsSongs:", artistTopsSongs);

  return (
    <Wrapper>
      <h2>Top Songs</h2>
      <div className="songs-container">
        {artistTopsSongs?.map((song) => {
          return <ArtistSongCard track={song} key={song.id} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 100px;
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
export default TopSongs;
