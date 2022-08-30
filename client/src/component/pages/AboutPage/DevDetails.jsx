import React from "react";
import styled from "styled-components";
import Shane from "./assets/shane_ikiapp.jpg";

const DevDetails = () => {
  return (
    <BoxContainer>
      <div className="imagebox">
        <img src={Shane} />
        <h1>Shane Castro</h1>
        <p>Full-Stack Software Developer</p>
      </div>
      <div className="detailsbox">
        <div className="details">
          <h3>About:</h3>
          <p>
            Passionate full-stack engineer with years of hands-on experience in
            developing scalable websites/applications using a wide range of
            front-end and back-end skills like Javascript, ReactJS, NodeJS, etc.
            Looking to further enhance my React and NodeJS skills as a
            full-stack developer.
          </p>
          <h3>Education:</h3>
          <p>
            Full-Stack Web Development <span> - Concordia University</span>
          </p>
          <p>
            Accounting & Management <span> - Vanier College</span>
          </p>

          <h3>Work Experience:</h3>
          <p>
            Full-Stack Software Engineer <span> - Soon</span>
          </p>
          <p>
            SEO Account Manager <span> - Labelium</span>
          </p>
          <p>
            SEO Specialist <span> - RankWorks</span>
          </p>
          <h3>Interests:</h3>
          <p>Sports (Basketball, Snowboarding, Weightlifting)</p>
          <p>Self-help Books</p>
          <p>Trading/Investing</p>
        </div>

        <div className="button">
          <ContactButton>Contact Me!</ContactButton>
        </div>
      </div>
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
    flex-direction: column;

    h1 {
      margin-top: 10px;
    }
    p {
      margin-top: 0px;
      color: grey;
    }
  }

  .detailsbox {
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .details {
      margin-left: 30px;
      margin-top: 20px;
      height: 90%;
    }
    p {
      color: grey;
      font-size: 13px;
    }

    span {
      padding: 0;
      margin: 0;
      font-size: 10px;
    }
    .button {
      display: flex;
      align-items: center;
      justify-content: center;
    }
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

const ContactButton = styled.button`
  width: 70%;
  padding: 11px 20%;
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
