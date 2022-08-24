import React, { useEffect } from "react";
import styled from "styled-components";
import HomeBanner from "./Banner/HomeBanner";
import NewReleases from "./NewReleases/NewReleases";
import PopularAlbums from "./PopularAlbums/PopularAlbums";
import PopularArtists from "./PopularArtists/PopularArtists";

import TopSongs from "./TopSongs/TopSongs";
import TrendingPlaylists from "./TrendingPlaylists/TrendingPlaylists";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "start",
      }}
    >
      <HomeBanner />
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
      <NewReleases />
    </div>
  );
};

const TwoColumns = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 99%;
  height: 80vh;
`;

const LeftSide = styled.div`
  position: relative;
  margin: 20px;
  width: 50%;
  height: 100%;
`;
const RightSide = styled.div`
  position: relative;
  margin: 20px;
  width: 50%;
  height: 100%;
`;

export default Home;
