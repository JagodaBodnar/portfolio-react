import React, { useContext } from "react";
import { HeaderOne } from "../globalStyles/theme";
import RootContext from "../context/context";
import {
  StyledNavigationContainer,
  StyledNavigationWrap,
  StyledNavigationLogo,
} from "./NavigationStyles";
import NavigationLinks from "./NavigationLinks";
import MobileNavigation from "./MobileNavigation";
import { device } from "../globalStyles/device";
import { useMediaQuery } from "react-responsive";

const Navigation = () => {
  const context = useContext(RootContext);
  const { theme } = context;
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <>
      <StyledNavigationContainer theme={theme}>
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
