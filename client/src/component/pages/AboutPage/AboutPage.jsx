import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import DevDetails from "./DevDetails";
import DevContact from "./DevContact";
const backdropVariants = {
  expanded: {
    width: "1800px",
    height: "2600px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },

  collapsed: {
    width: "900px",
    height: "1300px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};
const AboutPage = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("details");
  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };
  const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
  };

  const switchToContact = () => {
    playExpandingAnimation();

    setTimeout(() => {
      setActive("contact");
    }, 400);
  };

  const switchToDetails = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("details");
    }, 400);
  };
  return (
    <Container>
      <Wrapper>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />

          {active === "details" && (
            <HeaderContainer>
              <HeaderText>Meet The</HeaderText>
              <HeaderText>Software Developer</HeaderText>
              <SmallText>Get to know the creator of this App!</SmallText>
            </HeaderContainer>
          )}

          {active === "contact" && (
            <HeaderContainer>
              <HeaderText>Looking for a</HeaderText>
              <HeaderText>Software Developer</HeaderText>
              <SmallText>Reach out to Shane, now!</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "details" && (
            <DevDetails switchToContact={switchToContact} />
          )}
          {active === "contact" && (
            <DevContact switchToDetails={switchToDetails} />
          )}
        </InnerContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 50%;
  min-height: 750px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: white;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
  margin-top: 30px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const HeaderText = styled.h2`
  font-size: 50px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin-top: 7px;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const BackDrop = styled(motion.div)`
  width: 900px;
  height: 1300px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -850px;
  left: 70px;
  background: linear-gradient(-20deg, #f794a4 0%, #fdd6bd 100%);
  z-index: 9;
`;
export default AboutPage;
