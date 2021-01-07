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
import vue from "../assets/icons/vue.svg";
import "./owl-carousel.css";
import { StyledOwlContainer, StyledOwlWrap, StyledImg } from "./SkillsStyles";

const Skills = () => {
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

  return (
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
            return <StyledImg src={item} key={item} />;
          })}
        </OwlCarousel>
      </StyledOwlWrap>
    </StyledOwlContainer>
  );
};

export default Skills;
