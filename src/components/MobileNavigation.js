import React, { useContext } from "react";
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
  const { checkPath, isMenuOpen, toggleMenu } = context;

  return (
    <StyledNavigationContent>
      <StyledHamburger onClick={toggleMenu} isMenuOpen={isMenuOpen}>
        <StyledSpan isMenuOpen={isMenuOpen} />
        <StyledSpan isMenuOpen={isMenuOpen} />
        <StyledSpan isMenuOpen={isMenuOpen} />
      </StyledHamburger>
      <StyledNavigationOverlay isMenuOpen={isMenuOpen}>
        <StyledNavigationList>
          <StyledNavigationLinks
            to={{ pathname: routes.home }}
            onClick={() => {
              checkPath();
              toggleMenu();
            }}
          >
            Home
          </StyledNavigationLinks>
          <StyledNavigationLinks
            to={{ pathname: routes.contact }}
            onClick={() => {
              checkPath();
              toggleMenu();
            }}
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
