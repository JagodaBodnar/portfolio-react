import React, { useContext, useRef } from "react";
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
  StyledMediaLink,
  StyledMediaDesc,
  StyledMediaDescContainer,
  StyledSendInformation,
} from "./ContactStyles";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa";
import resume from "../assets/resume/CV.pdf";

const Contact = () => {
  const githubRef = useRef(null);
  const linkedinRef = useRef(null);
  const emailRef = useRef(null);
  const cvRef = useRef(null);

  const context = useContext(RootContext);
  const {
    theme,
    sendQuestion,
    setNameValue,
    setEmailValue,
    setMessageValue,
    nameValue,
    emailValue,
    messageValue,
    sent,
  } = context;

  const handlegithubDesc = () => {
    githubRef.current.style.display = "block";
  };

  const handlelinkedInDesc = () => {
    linkedinRef.current.style.display = "block";
  };
  const handleemailDesc = () => {
    emailRef.current.style.display = "block";
  };
  const handlecvDesc = () => {
    cvRef.current.style.display = "block";
  };
  const reset = () => {
    githubRef.current.style.display = "none";
    linkedinRef.current.style.display = "none";
    emailRef.current.style.display = "none";
    cvRef.current.style.display = "none";
  };

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
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
      {sent ? (
        <StyledSendInformation>
          Your message has been sent.
        </StyledSendInformation>
      ) : (
        <StyledSendInformation></StyledSendInformation>
      )}
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
        <StyledMediaContainer>
          <StyledMediaLink
            href="https://github.com/JagodaBodnar"
            target="_blank"
            onMouseEnter={handlegithubDesc}
            onMouseLeave={reset}
          >
            <SiGithub />
          </StyledMediaLink>
          <StyledMediaLink
            href="https://www.linkedin.com/in/jagoda-bodnar-765a90a6/"
            target="_blank"
            onMouseEnter={handlelinkedInDesc}
            onMouseLeave={reset}
          >
            <SiLinkedin />
          </StyledMediaLink>
          <StyledMediaLink
            href={"mailto:jagodabodnar90@gmail.com"}
            target="_blank"
            onMouseEnter={handleemailDesc}
            onMouseLeave={reset}
          >
            <SiGmail />
          </StyledMediaLink>
          <StyledMediaLink
            onMouseEnter={handlecvDesc}
            onMouseLeave={reset}
            href={resume}
            target="_blank"
          >
            <FaFilePdf />
          </StyledMediaLink>
        </StyledMediaContainer>
        <StyledMediaDescContainer>
          <StyledMediaDesc ref={githubRef}>
            github.com/jagodabodnar
          </StyledMediaDesc>
          <StyledMediaDesc ref={linkedinRef}>
            linkedin.com/in/jagoda-bodnar
          </StyledMediaDesc>
          <StyledMediaDesc ref={emailRef}>
            jagodabodnar90@gmail.com
          </StyledMediaDesc>
          <StyledMediaDesc ref={cvRef}>download my resume</StyledMediaDesc>
        </StyledMediaDescContainer>
      </StyledSectionContainer>
    </>
  );
};

export default Contact;
