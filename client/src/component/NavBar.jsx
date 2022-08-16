import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Wrapper>
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
          <NavLink to="/podcasts" style={{ color: "#831010" }}>
            Podcasts
          </NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        <div style={{ marginRight: "15px", background: "none" }}>
          <NavLink to="/account" style={{ color: "#db0000" }}>
            Login
          </NavLink>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  font-size: 20px;
  justify-content: space-between;
  height: 70px;
  background-color: transparent;
`;

const NavLink = styled(Link)`
  margin: 10px;
  text-decoration: none;
  color: white;
  background-color: transparent;
  font-weight: bold;
`;

export default NavBar;
