import React from "react";
import { HeaderOne } from "../globalStyles/theme";
import {
  StyledNavigationContainer,
  StyledNavigationWrap,
  StyledNavigationLogo,
} from "./NavigationStyles";
import NavigationLinks from "./NavigationLinks";
import MobileNavigation from "./MobileNavigation";
import { useMediaQuery } from "react-responsive";

const Navigation = () => {
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <>
      <StyledNavigationContainer>
        <StyledNavigationWrap>
          <StyledNavigationLogo>
            <HeaderOne logo>Jagoda</HeaderOne>
          </StyledNavigationLogo>
          {isTabletOrMobile ? <MobileNavigation /> : <NavigationLinks />}
        </StyledNavigationWrap>
      </StyledNavigationContainer>
    </>
  );
};

export default Navigation;
