import React, { useEffect, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import styled from "styled-components";
const PlayButton = ({ songUrl }) => {
  const [music] = useState(new Audio(songUrl));
  const [nowPlaying, setNowPlaying] = useState(false);
  const toggle = () => setNowPlaying(!nowPlaying);

  useEffect(() => {
    nowPlaying ? music.play() : music.pause();
  }, [music, nowPlaying]);

  useEffect(() => {
    //once the music ends, it will change the nowPlaying to false thus changing the Icon to play
    music.addEventListener("ended", () => setNowPlaying(false));
    return () => {
      music.removeEventListener("ended", () => setNowPlaying(false));
    };
  });
  return (
    <Wrapper style={{ marginTop: "12px" }}>
      {nowPlaying ? <FaPause onClick={toggle} /> : <FaPlay onClick={toggle} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  right: 60px;
  transition: all 0.2s ease-out;

  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.5);
  }
`;
export default PlayButton;