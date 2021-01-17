import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../globalStyles/globalStyles";
import { lightTheme, darkTheme } from "../globalStyles/theme";
import RootContext from "../context/context";
import Navigation from "../components/Navigation";

const MainTemplate = ({ children }) => {
  const context = useContext(RootContext);
  const { theme } = context;
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Navigation />
        {children}
      </ThemeProvider>
    </>
  );
};
export default MainTemplate;
