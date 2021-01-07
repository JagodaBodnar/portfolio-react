import React, { useState, useContext } from "react";
import RootContext from "../context/context";
import { routes } from "../routes/index";
import ThemeButton from "./ThemeButton";
import {
  StyledNavigationContent,
  StyledHamburger,
  StyledNavigationList,
  StyledNavigationOverlay,
  StyledSpan,
  StyledNavigationLinks,
  StyledButtonMovileContainer,
} from "./MobileNavigationStyles";

const MobileNavigation = () => {
  const context = useContext(RootContext);
  const { theme, checkPath, pathStyle, isMenuOpen, toggleMenu } = context;

  return (
    <StyledNavigationContent>
      <StyledHamburger onClick={toggleMenu} isMenuOpen={isMenuOpen}>
        <StyledSpan isMenuOpen={isMenuOpen} theme={theme}></StyledSpan>
        <StyledSpan isMenuOpen={isMenuOpen} theme={theme}></StyledSpan>
        <StyledSpan isMenuOpen={isMenuOpen} theme={theme}></StyledSpan>
      </StyledHamburger>
      <StyledNavigationOverlay isMenuOpen={isMenuOpen}>
        <StyledNavigationList>
          <StyledNavigationLinks
            to={{ pathname: routes.home }}
            onClick={() => {
              checkPath();
              toggleMenu();
            }}
            pathstyle={pathStyle}
          >
            Home
          </StyledNavigationLinks>
          <StyledNavigationLinks
            to={{ pathname: routes.contact }}
            onClick={() => {
              checkPath();
              toggleMenu();
            }}
            pathstyle={pathStyle}
          >
            Contact
          </StyledNavigationLinks>
          <StyledButtonMovileContainer>
            <ThemeButton />
          </StyledButtonMovileContainer>
        </StyledNavigationList>
      </StyledNavigationOverlay>
    </StyledNavigationContent>
  );
};

export default MobileNavigation;
