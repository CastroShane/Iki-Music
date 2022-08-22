import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../context/CurrentUserContext";
import UserBar from "./UserBar";

const NavBar = () => {
  const { currentUser } = useContext(CurrentUserContext);
  //Change navBar color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 70) {
      setColor(true);
    } else setColor(false);
  };

  window.addEventListener("scroll", changeColor);
  return (
    <>
      <Wrapper className={color ? "changing-background" : null}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "20%",
            background: "none",
          }}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/explore">Explore</NavLink>
          <NavLink to="/podcasts">Podcasts</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        <div style={{ marginRight: "15px", background: "none" }}>
          {currentUser?.fullName ? (
            <UserBar />
          ) : (
            <NavLink to="/account">Login</NavLink>
          )}
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  z-index: 99999;
  position: sticky;
  top: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  font-size: 18px;
  justify-content: space-between;
  height: 60px;

  &.changing-background {
    background-color: var(--default-font-color);

    a,
    span,
    button {
      color: white;
    }
  }

  transition: background-color 300ms linear;
`;

const NavLink = styled(Link)`
  margin: 10px;
  text-decoration: none;
  color: var(--stronger-font-color);
  background-color: transparent;
`;

export default NavBar;
