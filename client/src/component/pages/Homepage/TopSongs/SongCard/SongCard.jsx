import React from "react";
import styled from "styled-components";
import PlayButton from "./PlayButton";
import { motion, AnimatePresence } from "framer-motion";

const SongCard = ({ track }) => {
  const { title, album, title_short, artist, duration, preview, id } = track;

  const convertDuration = (duration) => {
    let minutes = Math.floor(duration / 60);
    let seconds = duration - minutes * 60;
    if (seconds.toString().length === 1) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  };
  return (
    <AnimatePresence>
      <Container
        style={{ display: "flex" }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        layout
        key={id}
      >
        <Cover>
          <img src={album.cover_small} alt={title} />
        </Cover>
        <Details>
          <span>{title_short}</span>
          <div className="stars">
            <p key={artist.id} className="song-artist">
              {artist.name}
            </p>
          </div>
          <p className="duration" style={{ marginTop: "12px" }}>
            {convertDuration(duration)}
          </p>
          <PlayButton songUrl={preview} />
        </Details>
      </Container>
    </AnimatePresence>
  );
};

const Container = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  margin: 2px 0px;
  background: var(--default-font-color);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

const Cover = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 20px;
  border-radius: 5px;
  overflow: hidden;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  color: black;

  span {
    font-weight: 700;
    color: white;
    background: var(--default-font-color);
  }

  .song-artist {
    color: purple;
    font-size: 0.8rem;
    font-weight: bold;
    margin: 0;
    background: var(--default-font-color);
  }

  .duration {
    position: absolute;
    right: 125px;
    min-width: 45px;
    margin: 0;
    font-size: 0.8rem;
    color: white;
    background: var(--default-font-color);
  }
`;
export default SongCard;
