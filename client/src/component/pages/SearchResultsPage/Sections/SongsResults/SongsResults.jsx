import React from "react";
import styled from "styled-components";
import Card from "./Card";

const SongsResults = ({ songs }) => {
  return (
    <Wrapper>
      <h2>Songs</h2>
      <div className="songs-container">
        {songs?.map((song) => {
          return <Card track={song} key={song.id} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  width: 95%;

  h2 {
    font-size: 30px;
    padding-top: 5px;
    padding-bottom: 12px;
  }
  .songs-container {
    width: 100%;
    height: 50vh;

    overflow: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
`;
export default SongsResults;
