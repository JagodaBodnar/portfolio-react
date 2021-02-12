import React, { useState } from "react";
import "../../node_modules/video-react/dist/video-react.css";
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
import "./player.css";
import { projects } from "../data/projectsList";

const Projects = () => {
  const [projectsList, setProjectsList] = useState(projects);

  const showDetails = (e) => {
    const toggleDetails = projectsList.map((item) => {
      const elementId = e.target.getAttribute("id");
      console.log(item.desc);
      if (item.id === JSON.parse(elementId)) {
        item.desc = !item.desc;
        console.log(item.desc);
      }
      return item;
    });
    setProjectsList(toggleDetails);
  };

  return (
    <>
      <StyledProjectsList>
        {projectsList.map((item) => {
          const {
            title,
            img,
            demoUrl,
            codeUrl,
            id,
            desc,
            descOverlay,
            video,
          } = item;
          return (
            <StyledContainer key={title}>
              <StyledContent>
                <Player playsInline poster={img} src={video} />
              </StyledContent>
              <StyledTechStachContainer>
                <StyledDetails>
                  <StyledLink href={demoUrl} target="_blank">
                    demo
                  </StyledLink>
                  <StyledSpan>|</StyledSpan>
                  <StyledLink href={codeUrl} target="_blank">
                    code
                  </StyledLink>
                  <StyledSpan>|</StyledSpan>
                  <StyledLink
                    id={id}
                    onClick={(e) => {
                      showDetails(e);
                    }}
                  >
                    tech stack
                  </StyledLink>
                  <StyledShowDetailsWrapper isCollapsed={desc}>
                    <StyledShowDetails>{descOverlay}</StyledShowDetails>
                  </StyledShowDetailsWrapper>
                </StyledDetails>
                <StyledHeadingTwo>{title}</StyledHeadingTwo>
              </StyledTechStachContainer>
            </StyledContainer>
          );
        })}
      </StyledProjectsList>
    </>
  );
};

export default Projects;
