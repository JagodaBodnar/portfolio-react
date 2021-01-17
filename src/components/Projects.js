import React, { useState } from "react";
import "../../node_modules/video-react/dist/video-react.css";
import reactweb from "../assets/videos/reactweb.mp4";
import { Player } from "video-react";

import {
  StyledProjectsList,
  StyledContainer,
  StyledDetails,
  StyledContent,
  StyledHeadingTwo,
  StyledTechStachContainer,
  StyledLink,
  StyledSpan,
  StyledShowDetails,
  StyledShowDetailsWrapper,
} from "./ProjectsStyles";
import { projects } from "../data/projectsList";

const Projects = () => {
  const [showDetail, setShowDetail] = useState(false);

  const [projectsList, setProjectsList] = useState(projects);

  const showDetails = (e) => {
    const toggleDetails = projectsList.map((item) => {
      const elementId = e.target.getAttribute("id");
      if (item.id === JSON.parse(elementId)) {
        item.desc = !item.desc;
      }
      return item;
    });
    setProjectsList(toggleDetails);
  };

  return (
    <>
      <StyledProjectsList>
        {projects.map((item) => {
          return (
            <StyledContainer key={item.title}>
              <StyledContent>
                <Player playsInline poster={item.img} src={reactweb} />
              </StyledContent>
              <StyledTechStachContainer>
                <StyledDetails>
                  <StyledLink href={item.demoUrl} target="_blank">
                    demo
                  </StyledLink>
                  <StyledSpan>|</StyledSpan>
                  <StyledLink href={item.codeUrl} target="_blank">
                    code
                  </StyledLink>
                  <StyledSpan>|</StyledSpan>
                  <StyledLink
                    id={item.id}
                    onClick={(e) => {
                      showDetails(e);
                      setShowDetail(!showDetail);
                    }}
                  >
                    tech stach
                  </StyledLink>
                  <StyledShowDetailsWrapper isCollapsed={item.desc}>
                    <StyledShowDetails>{item.descOverlay}</StyledShowDetails>
                  </StyledShowDetailsWrapper>
                </StyledDetails>
                <StyledHeadingTwo>{item.title}</StyledHeadingTwo>
              </StyledTechStachContainer>
            </StyledContainer>
          );
        })}
      </StyledProjectsList>
    </>
  );
};

export default Projects;
