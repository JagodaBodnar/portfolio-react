import React, { useState, useContext } from "react";
import ThemeButton from "./ThemeButton";
import { routes } from "../routes/index";
import { HeaderOne } from "../globalStyles/theme";
import RootContext from "../context/context";
import {
  StyledNavigationContainer,
  StyledNavigationWrap,
  StyledNavigationLogo,
  StyledNavigationHomeLink,
  StyledNavigationContactLink,
} from "./NavigationStyles";

const Navigation = () => {
  const context = useContext(RootContext);
  const { theme } = context;

  const [pathStyle, setPathStyle] = useState(false);
  const checkPath = () => {
    if (window.location.pathname === "/contact") {
      setPathStyle(false);
    } else {
      setPathStyle(true);
    }
  };

  return (
    <>
      <StyledNavigationContainer theme={theme}>
        <StyledNavigationWrap>
          <StyledNavigationLogo>
            <HeaderOne logo>Jagoda</HeaderOne>
          </StyledNavigationLogo>
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
        </StyledNavigationWrap>
      </StyledNavigationContainer>
    </>
  );
};

export default Navigation;
