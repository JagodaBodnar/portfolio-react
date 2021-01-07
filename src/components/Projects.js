import React, { useState, useContext } from "react";
import styled from "styled-components";
import jewelryShopReact from "../assets/icons/shop-react.png";
import { useSpring, animated, useTransition } from "react-spring";
import "../../node_modules/video-react/dist/video-react.css";
import reactweb from "../assets/videos/reactweb.mp4";
import { Player } from "video-react";
import RootContext from "../context/context";
import "./player.css";
// import jewelryShopRedux from "../assets/icons/jewelry-shop-redux.PNG";
import {
  StyledProjectsList,
  StyledContainer,
  StyledDetails,
  StyledContent,
  StyledImages,
  StyledImgContainer,
  StyledHeadingTwo,
  StyledTechStachContainer,
  StyledLink,
  StyledSpan,
  StyledShowDetails,
} from "./ProjectsStyles";

const Projects = () => {
  const context = useContext(RootContext);
  const { theme } = context;
  const [showDetails, setShowDetails] = useState(false);

  const anim = useSpring({
    config: { duration: 500 },
    height: showDetails ? "50px" : "0px",
    opacity: showDetails ? "1" : "0",
    overflow: "hidden",
  });

  const projects = [
    {
      title: `Jewelry shop - React`,
      id: 2,
      img: jewelryShopReact,
      demoUrl: `https://reverent-booth-2fd4f6.netlify.app/`,
      codeUrl: `https://github.com/JagodaBodnar/Jewelry_shop_redux`,
      titleOverlay: `Tech stack:`,
      descOverlay: `React • React Router • React-spring • Styled-components • RWD • Contentful • EmailJS • Material-UI`,
    },
    {
      title: `Jewelry shop - Redux`,
      id: 1,
      img: jewelryShopReact,
      demoUrl: `https://reverent-booth-2fd4f6.netlify.app/`,
      codeUrl: `https://github.com/JagodaBodnar/Jewelry_shop_redux`,
      titleOverlay: `Tech stack:`,
      descOverlay: `React • React Router • React-spring • Redux • Styled-components • RWD • Contentful • EmailJS `,
    },
  ];
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
                  <StyledLink href={item.demoUrl} theme={theme} target="_blank">
                    demo
                  </StyledLink>
                  <StyledSpan>|</StyledSpan>
                  <StyledLink href={item.codeUrl} theme={theme} target="_blank">
                    code
                  </StyledLink>
                  <StyledSpan>|</StyledSpan>

                  <StyledLink
                    key={item.name}
                    theme={theme}
                    onClick={() => {
                      setShowDetails(!showDetails);
                    }}
                  >
                    tech stach
                  </StyledLink>
                  <animated.div style={anim}>
                    <StyledShowDetails>{item.descOverlay}</StyledShowDetails>
                  </animated.div>
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
