import React, { useState } from "react";
import styled from "styled-components";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import "./styleguide.css";
import firebase from "../assets/icons/firebase.svg";
import react from "../assets/icons/react.svg";
import redux from "../assets/icons/redux.svg";
import javascript from "../assets/icons/js.svg";
import sass from "../assets/icons/sass.svg";
import git from "../assets/icons/git.svg";
import vue from "../assets/icons/vue.svg";
import Portfolio from "./Portfolio";
import SwitchButton from "./SwitchButton";

const StyledHeadingOne = styled.h1`
  font-family: "Catamaran", "Helvetica", "Arial", "sans-serif";
  text-transform: uppercase;
`;
const StyledHeadingTwo = styled.h2`
  font-family: "Catamaran", "Helvetica", "Arial", "sans-serif";
`;
const StyledHeadingThree = styled.h3`
  font-family: "Catamaran", "Helvetica", "Arial", "sans-serif";
`;
const StyledHeadingFour = styled.h4`
  font-family: "Catamaran", "Helvetica", "Arial", "sans-serif";
  text-transform: uppercase;
`;
const StyledHeadingFive = styled.h5`
  font-family: "Catamaran", "Helvetica", "Arial", "sans-serif";
`;
const StyledHeadingSix = styled.h6`
  font-family: "Catamaran", "Helvetica", "Arial", "sans-serif";
`;
const StyledHeadingParagraph = styled.p`
  font-family: "Roboto", "Helvetica", "Arial", "sans-serif";
`;
const StyledButtonPrimary = styled.button`
  border: 2px solid #ddd;
  padding: 5px;
  cursor: pointer;
  min-width: 180px;
  background-color: #fff;
  transition-duration: 0.7s;
  border-radius: 3px;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  font-family: "Roboto", "Helvetica", "Arial", "sans-serif";
  color: #222222;
  font-weight: 500;
  text-align: center;
  &:hover {
    border: 2px solid #0278ae;
  }
`;
const StyledButtonSecondary = styled.button`
  border: 2px solid #222222;
  padding: 5px;
  cursor: pointer;
  border-radius: 3px;
  min-width: 150px;
  background-color: #fff;
  transition-duration: 0.7s;
  font-size: 12px;
  font-weight: 500;

  font-family: "Roboto", "Helvetica", "Arial", "sans-serif";
  &:hover {
    border: 2px solid #e8aa00;
  }
`;
const StyledLink = styled.a`
  font-family: "Catamaran", "Helvetica", "Arial", "sans-serif";
  text-decoration: none;
  color: #222222;
  &:hover {
    border-bottom: 2px solid #0278ae;
  }
`;
const StyledDivOne = styled.div`
  width: 50px;
  height: 50px;
  background-color: #0278ae;
  margin-top: 5px;
`;
const StyledDivTwo = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e8aa00;
`;
const StyledDivThree = styled.div`
  width: 50px;
  height: 50px;
  background-color: #676566;
`;
const StyledDivFour = styled.div`
  width: 50px;
  height: 50px;
  background-color: #222222;
  text-transform: uppercase;
`;
const StyledDivFive = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ddd;
`;
const StyledFormContainer = styled.div`
  width: 20%;
  margin-bottom: 2rem;
  position: relative;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", "Helvetica", "Arial", "sans-serif";
`;
const StyledFormLabel = styled.label`
  position: absolute;
  top: ${({ value }) => (value === "" ? "0.2rem" : "100%")};
  left: 0;
  color: ${({ value }) => (value === "" ? "#a6a9b6" : "#222222")};
  font-size: ${({ value }) => (value === "" ? "1" : "1.5")};
  transition: ${({ value }) =>
    value === "" ? "0.7s ease-in-out" : "0.7s ease-out"};
  cursor: text;
`;
const StyledFormInput = styled.input`
  font-size: 1.5rem;
  border: none;
  outline: none;
  cursor: text;
  border-bottom: ${({ value }) =>
    value === "" ? "2px solid #ddd" : "2px solid #0278ae"};
  transition: 0.5s ease-in;
  &:focus ~ ${StyledFormLabel} {
    transition: 0.7s ease-in-out;
    font-size: 1rem;
    top: 100%;
    color: #222222;
  }
  &:focus {
    border-bottom: 2px solid #0278ae;
  }
`;
const StyledTextArea = styled.textarea`
  font-size: 1.5rem;
  height: 30px;
  border: none;
  outline: none;
  cursor: text;
  border-bottom: ${({ value }) =>
    value === "" ? "2px solid #ddd" : "2px solid #0278ae"};
  transition: 0.5s ease-in;
  height: ${({ value }) => (value === "" ? "30px" : "150px")};
  &:focus ~ ${StyledFormLabel} {
    transition: 0.7s ease-in-out;
    font-size: 1rem;
    top: 100%;
    color: #222222;
  }
  &:focus {
    border-bottom: 2px solid #0278ae;
    height: 150px;
  }
`;
const StyledImg = styled.img`
  height: 50px;
  width: 100%;
  filter: #ddd;
`;
const StyledOwlContainer = styled.div`
  width: 100%;
  background-color: #222222;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledOwlWrap = styled.div`
  width: 70%;
  margin: 0 auto;
`;
const StyledItemWrap = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-family: "Roboto", "Helvetica", "Arial", "sans-serif";
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledLabelCarousel = styled.label`
  position: absolute;
  top: 0%;
  /* visibility: hidden; */
  padding: 15px;
  font-size: 9px;
  letter-spacing: 1px;
  color: #fff;
`;
const StyledSectionSpan = styled.div`
  border-bottom: 1px solid #222222;
  width: 35px;
  margin-right: 20px;
`;
const StyledSectionContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

const StyleGuide = () => {
  const skills = [
    html,
    css,
    javascript,
    git,
    react,
    redux,
    firebase,
    sass,
    vue,
  ];
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const handleNameChange = (e) => {
    setNameValue(e.target.value);
    console.log(nameValue);
  };
  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };
  const handleMessageValue = (e) => {
    setMessageValue(e.target.value);
  };

  return (
    <div>
      <StyledHeadingOne>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </StyledHeadingOne>
      <StyledHeadingTwo>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </StyledHeadingTwo>
      <StyledHeadingThree>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </StyledHeadingThree>
      <StyledHeadingFour>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </StyledHeadingFour>
      <StyledHeadingFive>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </StyledHeadingFive>
      <StyledHeadingSix>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </StyledHeadingSix>
      <StyledHeadingParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </StyledHeadingParagraph>
      <StyledButtonPrimary>Primary</StyledButtonPrimary>
      <StyledButtonSecondary>Secondary</StyledButtonSecondary>
      <StyledLink href="">Link to something</StyledLink>
      <StyledDivOne></StyledDivOne>
      <StyledDivTwo></StyledDivTwo>
      <StyledDivThree></StyledDivThree>
      <StyledDivFour></StyledDivFour>
      <StyledDivFive></StyledDivFive>
      <form>
        <StyledFormContainer>
          <StyledFormInput
            type="text"
            name="name"
            id="name"
            value={nameValue}
            onChange={handleNameChange}
          />
          <StyledFormLabel htmlFor="name" value={nameValue}>
            Name and Surname
          </StyledFormLabel>
        </StyledFormContainer>
        <StyledFormContainer>
          <StyledFormInput
            type="email"
            name="email"
            id="email"
            value={emailValue}
            onChange={handleEmailChange}
          />
          <StyledFormLabel htmlFor="email" value={emailValue}>
            E-mail address
          </StyledFormLabel>
        </StyledFormContainer>
        <StyledFormContainer>
          <StyledTextArea
            id="message"
            name="message"
            value={messageValue}
            onChange={handleMessageValue}
          />
          <StyledFormLabel htmlFor="message" value={messageValue}>
            Message
          </StyledFormLabel>
        </StyledFormContainer>
        <StyledButtonPrimary>Send message</StyledButtonPrimary>
      </form>
      <StyledSectionContainer>
        <StyledSectionSpan></StyledSectionSpan>
        <StyledHeadingFour>Skills</StyledHeadingFour>
      </StyledSectionContainer>
      <StyledOwlContainer>
        <StyledOwlWrap>
          <OwlCarousel
            items={5}
            className="owl-theme"
            loop
            margin={8}
            autoplay
            autoplayHoverPause
            dots={false}
            center
          >
            {skills.map((item) => {
              return (
                <StyledItemWrap>
                  <StyledImg src={item} />
                </StyledItemWrap>
              );
            })}
          </OwlCarousel>
        </StyledOwlWrap>
      </StyledOwlContainer>
      <StyledSectionContainer>
        <StyledSectionSpan></StyledSectionSpan>
        <StyledHeadingFour>Projects</StyledHeadingFour>
      </StyledSectionContainer>
      <Portfolio />
      <SwitchButton />
    </div>
  );
};

export default StyleGuide;
