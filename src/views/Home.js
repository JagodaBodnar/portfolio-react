import React from "react";
import Skills from "../components/Skills";
import { HeaderTwo } from "../globalStyles/theme";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import {
  StyledSectionContainer,
  StyledSectionTitleContainer,
  StyledSectionSpan,
} from "./HomeStyles";

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
