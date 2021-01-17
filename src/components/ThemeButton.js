import React, { useContext, useState } from "react";
import RootContext from "../context/context";
import { useSpring, animated } from "react-spring";
import {
  StyledButton,
  StyledDarkButton,
  StyledLightButton,
  StyledSpanDark,
  StyledSpanLight,
} from "./ThemeButtonStyles";

const ThemeButton = () => {
  const context = useContext(RootContext);
  const { theme, toggleTheme, toggleMenu } = context;

  const [switchButton, setSwitchButton] = useState(false);
  const handleTheme = () => {
    setSwitchButton(!switchButton);
  };

  const anim = useSpring({
    config: { duration: 500 },
    opacity: theme === "dark" ? "0" : "1",
    transform: theme === "dark" ? "translateX(50px)" : "translateX(0px)",
  });
  const animDark = useSpring({
    config: { duration: 500 },
    opacity: theme === "dark" ? "1" : "0",
    transform: theme === "dark" ? "translateX(0px)" : "translateX(-50px)",
  });
  return (
    <>
      <StyledButton
        onClick={() => {
          toggleTheme();
          handleTheme();
          toggleMenu();
        }}
      >
        <StyledSpanLight theme={theme}>Light</StyledSpanLight>
        <StyledSpanDark theme={theme}>Dark</StyledSpanDark>
        <animated.div style={anim}>
          <StyledLightButton></StyledLightButton>
        </animated.div>
        <animated.div style={animDark}>
          <StyledDarkButton></StyledDarkButton>
        </animated.div>
      </StyledButton>
    </>
  );
};

export default ThemeButton;
