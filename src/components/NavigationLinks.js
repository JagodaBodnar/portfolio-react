import React, { useContext } from "react";
import { routes } from "../routes/index";
import ThemeButton from "./ThemeButton";
import {
  StyledNavigationHomeLink,
  StyledNavigationContactLink,
} from "./NavigationStyles";
import RootContext from "../context/context";

const NavigationLinks = () => {
  const context = useContext(RootContext);
  const { pathStyle, checkPath } = context;

  return (
    <>
      <StyledNavigationHomeLink
        to={{ pathname: routes.home }}
        onClick={checkPath}
        pathstyle={pathStyle}
      >
        Home
      </StyledNavigationHomeLink>
      <StyledNavigationContactLink
        to={{ pathname: routes.contact }}
        onClick={checkPath}
        pathstyle={pathStyle}
      >
        Contact
      </StyledNavigationContactLink>
      <ThemeButton />
    </>
  );
};

export default NavigationLinks;
