import React from "react";
import Skills from "../components/Skills";
import styled from "styled-components";
import { HeaderTwo } from "../globalStyles/theme";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";

const StyledSectionContainer = styled.div`
  margin: 100px 0;
`;
const StyledSectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
  margin: 50px auto;
`;
const StyledSectionSpan = styled.div`
  border-bottom: ${({ theme }) => `1px solid ${theme.text}`};
  width: 35px;
  margin-right: 20px;
`;
const Home = () => {
  return (
    <>
      <StyledSectionContainer>
        <StyledSectionTitleContainer>
          <StyledSectionSpan></StyledSectionSpan>
          <HeaderTwo>About me</HeaderTwo>
        </StyledSectionTitleContainer>
        <AboutMe />
      </StyledSectionContainer>
      <StyledSectionContainer>
        <StyledSectionTitleContainer>
          <StyledSectionSpan></StyledSectionSpan>
          <HeaderTwo>Skills</HeaderTwo>
        </StyledSectionTitleContainer>
        <Skills />
      </StyledSectionContainer>
      <StyledSectionContainer>
        <StyledSectionTitleContainer>
          <StyledSectionSpan></StyledSectionSpan>
          <HeaderTwo>Projects</HeaderTwo>
        </StyledSectionTitleContainer>
        <Projects />
      </StyledSectionContainer>
    </>
  );
};

export default Home;
