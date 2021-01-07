import React, { useState, useContext } from "react";
import { StyledButtonPrimary, HeaderTwo } from "../globalStyles/theme";
import RootContext from "../context/context";
import {
  StyledSectionContainer,
  StyledSectionTitleContainer,
  StyledSectionSpan,
  StyledFormContainer,
  StyledFormLabel,
  StyledFormInput,
  StyledTextArea,
  StyledFormButtonContainer,
  StyledMediaContainer,
  StyledMediaImg,
  StyledMediaLink,
} from "./ContactStyles";
import linkedin from "../assets/icons/linkedin.svg";
import linkedinDarkGray from "../assets/icons/linkedinDarkGray.svg";
import linkedinLightGray from "../assets/icons/linkedinLightGray.svg";
import github from "../assets/icons/github.svg";
import githubDarkGray from "../assets/icons/githubDarkGray.svg";
import githubLightGray from "../assets/icons/githubLightGray.svg";
import email from "../assets/icons/email.svg";
import emailLightGray from "../assets/icons/emaiLightGray.svg";
import emailDarkGray from "../assets/icons/emaiDarkGray.svg";

const Contact = () => {
  const context = useContext(RootContext);
  const { theme, sendQuestion } = context;

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
    <>
      <StyledSectionContainer>
        <StyledSectionTitleContainer>
          <StyledSectionSpan></StyledSectionSpan>
          <HeaderTwo>Contact form</HeaderTwo>
        </StyledSectionTitleContainer>
      </StyledSectionContainer>
      <form onSubmit={sendQuestion}>
        <StyledFormContainer>
          <StyledFormInput
            type="text"
            name="name"
            id="name"
            value={nameValue}
            onChange={handleNameChange}
            required
          />
          <StyledFormLabel htmlFor="name" value={nameValue} theme={theme}>
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
            required
          />
          <StyledFormLabel htmlFor="email" value={emailValue} theme={theme}>
            E-mail address
          </StyledFormLabel>
        </StyledFormContainer>
        <StyledFormContainer>
          <StyledTextArea
            id="message"
            name="message"
            value={messageValue}
            onChange={handleMessageValue}
            required
          />
          <StyledFormLabel htmlFor="message" value={messageValue} theme={theme}>
            Message
          </StyledFormLabel>
        </StyledFormContainer>
        <StyledFormButtonContainer>
          <StyledButtonPrimary type="submit">Send message</StyledButtonPrimary>
        </StyledFormButtonContainer>
      </form>
      <StyledSectionContainer>
        <StyledSectionTitleContainer>
          <StyledMediaContainer>
            <StyledMediaLink
              href="https://github.com/JagodaBodnar"
              target="_blank"
            >
              <StyledMediaImg
                circleIcons
                theme={theme}
                src={theme === "light" ? githubDarkGray : githubLightGray}
                onMouseOver={(e) => (e.currentTarget.src = github)}
                onMouseOut={
                  theme === "light"
                    ? (e) => (e.currentTarget.src = githubDarkGray)
                    : (e) => (e.currentTarget.src = githubLightGray)
                }
              />
            </StyledMediaLink>
            <StyledMediaLink
              href="https://www.linkedin.com/in/jagoda-bodnar-765a90a6/"
              target="_blank"
            >
              <StyledMediaImg
                src={theme === "light" ? linkedinDarkGray : linkedinLightGray}
                onMouseOver={(e) => (e.currentTarget.src = linkedin)}
                onMouseOut={
                  theme === "light"
                    ? (e) => (e.currentTarget.src = linkedinDarkGray)
                    : (e) => (e.currentTarget.src = linkedinLightGray)
                }
              />
            </StyledMediaLink>
            <StyledMediaLink
              href={"mailto:jagodabodnar90@gmail.com"}
              target="_blank"
            >
              <StyledMediaImg
                circleIcons
                src={theme === "light" ? emailDarkGray : emailLightGray}
                onMouseOver={(e) => (e.currentTarget.src = email)}
                onMouseOut={
                  theme === "light"
                    ? (e) => (e.currentTarget.src = emailDarkGray)
                    : (e) => (e.currentTarget.src = emailLightGray)
                }
              />
            </StyledMediaLink>
          </StyledMediaContainer>
        </StyledSectionTitleContainer>
      </StyledSectionContainer>
    </>
  );
};

export default Contact;
