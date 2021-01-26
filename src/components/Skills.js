import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owl-carousel.css";
import {
  StyledOwlContainer,
  StyledOwlWrap,
  StyledImg,
  StyledSkillsParagraph,
  StyledSkillsInnerContainer,
} from "./SkillsStyles";
import { skills } from "../data/skills";

const Skills = () => {
  const options = {
    loop: true,
    margin: 8,
    autoplay: true,
    autoplayHoverPause: true,
    dots: false,
    center: true,
    responsive: {
      0: {
        items: 3,
      },
      768: {
        items: 5,
      },
    },
  };

  return (
    <StyledOwlContainer>
      <StyledOwlWrap>
        <OwlCarousel {...options} className="owl-theme">
          {skills.map((item) => {
            return (
              <StyledSkillsInnerContainer key={item.skill}>
                <StyledImg src={item.skill} />
                <StyledSkillsParagraph className="skill-description">
                  {item.desc}
                </StyledSkillsParagraph>
              </StyledSkillsInnerContainer>
            );
          })}
        </OwlCarousel>
      </StyledOwlWrap>
    </StyledOwlContainer>
  );
};

export default Skills;
