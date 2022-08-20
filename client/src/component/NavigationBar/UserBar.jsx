import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
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
  };

  return (
    <Wrapper>
      {picture ? <StyledImg src={picture} /> : <StyledImg src={avatar} />}
      <StyledSpan>{`Hello, ${fullName.split(" ")[0]}`}</StyledSpan>
      <Dash />
      <SignOutBtn onClick={(e) => handleSignOut(e)}>Sign Out</SignOutBtn>
    </Wrapper>
  );
};

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
  margin: 5px;
  text-decoration: none;
  color: var(--stronger-font-color);
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const Dash = styled(GoDash)`
  margin: 0 5px;
`;

export default UserBar;
