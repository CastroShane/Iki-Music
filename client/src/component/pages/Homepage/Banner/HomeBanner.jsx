import React from "react";
import styled from "styled-components";
import bannerImg from "../assets/home_banner.jpg";
import SearchBar from "./SearchBar";
const HomeBanner = () => {
  return (
    <BannerWrapper>
      <BannerDetails>
        <BtnDiv>
          <SearchBar />
        </BtnDiv>
      </BannerDetails>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 65vh;
  overflow: hidden;
  position: relative;
  background-image: linear-gradient(
      0deg,
      rgb(220, 220, 220, 0.3),
      rgb(220, 220, 220, 0.3)
    ),
    url(${bannerImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
`;

const BannerDetails = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  z-index: 1;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 15%;
  margin: 30px;
`;
export default HomeBanner;
