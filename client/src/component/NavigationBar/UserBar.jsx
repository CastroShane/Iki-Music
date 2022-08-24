import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../context/CurrentUserContext";
import styled from "styled-components";
import { GoDash } from "react-icons/go";
import avatar from "./assets/avatar.png";

const UserBar = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { fullName, picture } = currentUser;

  //Redirects to homepage whenever someone signs-out
  const history = useHistory();
  const routeChange = () => {
    let path = `/`;
    history.push(path);
  };

  //Resets all the state whenever user signs out
  const handleSignOut = (e) => {
    e.preventDefault();
    setCurrentUser({});
    routeChange();
    window.scrollTo(0, 0);
  };

  return (
    <Wrapper>
      <NavLink to={"/library"}>Your Library</NavLink>
      <Dash />
      {picture ? <StyledImg src={picture} /> : <StyledImg src={avatar} />}
      <StyledSpan>{`Hello, ${fullName.split(" ")[0]}`}</StyledSpan>
      <Dash />
      <SignOutBtn onClick={(e) => handleSignOut(e)}>
        <p>Sign Out</p>
      </SignOutBtn>
    </Wrapper>
  );
};

const NavLink = styled(Link)`
  margin: 10px;
  text-decoration: none;
  background-color: transparent;
  color: rgb(255, 106, 106);
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const StyledImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 0 10px;
`;

const StyledSpan = styled.span`
  color: var(--stronger-font-color);
  font-family: var(--font-heading);
  font-size: 18px;
`;

const SignOutBtn = styled.button`
  padding: 0px;
  cursor: pointer;
  background: none rgb(255, 106, 106);
  border: 2px none rgb(58, 77, 143);
  text-align: center;
  box-sizing: border-box;
  z-index: 2;
  height: 32px;
  width: 119px;
  left: 0px;
  top: 0px;
  font-size: 16px;
  line-height: 1;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 12%) 0px 2px 4px 1px;
  transition: background 200ms ease 0s;
  font-weight: normal;
  text-decoration: none;

  p {
    color: rgb(255, 255, 255);
  }
`;

const Dash = styled(GoDash)`
  margin: 0 5px;
`;

export default UserBar;
