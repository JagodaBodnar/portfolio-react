import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import firebase from "../assets/icons/firebase.svg";
import react from "../assets/icons/react.svg";
import redux from "../assets/icons/redux.svg";
import javascript from "../assets/icons/js.svg";
import sass from "../assets/icons/sass.svg";
import git from "../assets/icons/git.svg";
// import vue from "../assets/icons/vue.svg";
import npm from "../assets/icons/npm.svg";
import slack from "../assets/icons/slack.svg";
import "./owl-carousel.css";
import {
  StyledOwlContainer,
  StyledOwlWrap,
  StyledImg,
  StyledSkillsParagraph,
  StyledSkillsInnerContainer,
} from "./SkillsStyles";

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

  const skills = [
    { skill: html, desc: "html" },
    { skill: css, desc: "css" },
    { skill: javascript, desc: "javascript" },
    { skill: git, desc: "git" },
    { skill: react, desc: "react" },
    { skill: redux, desc: "redux" },
    { skill: firebase, desc: "firebase" },
    { skill: sass, desc: "sass" },
    { skill: npm, desc: "npm" },
    { skill: slack, desc: "slack" },
    // { skill: vue, desc: "vue" },
  ];

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
