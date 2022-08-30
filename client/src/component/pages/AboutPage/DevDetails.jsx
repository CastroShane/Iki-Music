import React from "react";
import styled from "styled-components";
import Shane from "./assets/shane_ikiapp.jpg";

const DevDetails = () => {
  return (
    <BoxContainer>
      <div className="imagebox">
        <img src={Shane} />
      </div>
      <div className="detailsbox"></div>
    </BoxContainer>
  );
};

const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 10px;
  height: 430px;

  .imagebox {
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .detailsbox {
    width: 65%;
    height: 100%;
    border: 1px solid red;
  }
  img {
    width: 270px;
    height: auto;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;

  background: rgb(255, 106, 106);
  background: linear-gradient(-20deg, #f794a4 0%, #fdd6bd 100%);

  &:hover {
    filter: brightness(1.03);
  }
`;
export default DevDetails;
