import React from "react";
import styled from "styled-components";
import PopularAlbums from "./PopularAlbums/PopularAlbums";
import PopularArtists from "./PopularArtists/PopularArtists";

import TopSongs from "./TopSongs/TopSongs";
import TrendingPlaylists from "./TrendingPlaylists/TrendingPlaylists";

const Home = () => {
  return (
    <div>
      <PopularArtists />
      <TwoColumns>
        <LeftSide>
          <PopularAlbums />
        </LeftSide>
        <RightSide>
          <TopSongs />
        </RightSide>
      </TwoColumns>
      <TrendingPlaylists />
    </div>
  );
};

const TwoColumns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60vh;
`;

const LeftSide = styled.div`
  margin: 20px;
  width: 50%;
  height: 100%;
`;
const RightSide = styled.div`
  margin: 20px;
  width: 50%;
  height: 100%;
`;

export default Home;
