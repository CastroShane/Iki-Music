import React from "react";
import styled from "styled-components";

import { FcIphone, FcFeedback, FcGlobe } from "react-icons/fc";
import { Input } from "../AccountPage/Common";
const DevContact = ({ switchToDetails }) => {
  return (
    <BoxContainer>
      <div className="contact-details">
        <div className="cards">
          <FcIphone size={40} />
          <p>+1 (514) 963-1502</p>
        </div>
        <div className="cards">
          <FcFeedback size={40} />
          <p>mr.shanecastro@gmail.com</p>
        </div>
        <div className="cards">
          <FcGlobe size={40} />
          <p>Montreal, QC, Canada</p>
        </div>
        <Button style={{ width: "70%" }} onClick={switchToDetails}>
          {" "}
          Get to know Shane!
        </Button>
      </div>
      <div className="divider"></div>

      <div className="form-container"></div>
      <FormContainer>
        <p>Name:</p>
        <Input
          type="text"
          placeholder="Your name..."
          name="name"
          // onChange={handleChange}
          // value={email}
          required
        ></Input>
        <p>E-mail:</p>
        <Input
          type="email"
          placeholder="Your email address..."
          name="email"
          // onChange={handleChange}
          // value={email}
          required
        ></Input>

        <p>Message:</p>
        <Input
          type="text"
          placeholder="Your message to Shane..."
          name="message"
          // onChange={handleChange}
          // value={email}
          className="bigtext"
          required
        ></Input>
        <Button>Send</Button>
      </FormContainer>
    </BoxContainer>
  );
};

const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 10px;
  height: 430px;

  .divider {
    height: 95%;
    border-left: 2px solid grey;
    margin-right: 50px;
  }

  .contact-details {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .cards {
      margin: 5px;
      display: flex;
      align-items: center;
      width: 70%;
      height: 60px;
      border-radius: 7px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      padding-left: 10px;

      p {
        margin-left: 10px;
      }
    }
  }
`;

const Button = styled.button`
  margin-top: 15px;
  width: 30%;
  padding: 11px 10%;
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

const FormContainer = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  .bigtext {
    height: 190px;
  }
`;
export default DevContact;
