import React, { useContext } from "react";
import { routes } from "../routes/index";
import ThemeButton from "./ThemeButton";
import {
  StyledNavigationHomeLink,
  StyledNavigationContactLink,
  StyledNavigationHomeButton,
} from "./NavigationStyles";
import RootContext from "../context/context";

const NavigationLinks = () => {
  const context = useContext(RootContext);
  const { pathStyle, goToContact, goToHome } = context;

  return (
    <>
      <StyledNavigationHomeButton onClick={goToHome} pathstyle={pathStyle}>
        <StyledNavigationHomeLink
          to={{ pathname: routes.home }}
          pathstyle={JSON.stringify(pathStyle)}
        >
          Home
        </StyledNavigationHomeLink>
      </StyledNavigationHomeButton>
      <StyledNavigationHomeButton onClick={goToContact} pathstyle={pathStyle}>
        <StyledNavigationContactLink
          to={{ pathname: routes.contact }}
          pathstyle={JSON.stringify(pathStyle)}
        >
          Contact
        </StyledNavigationContactLink>
      </StyledNavigationHomeButton>
      <ThemeButton />
    </>
  );
};

export default NavigationLinks;
