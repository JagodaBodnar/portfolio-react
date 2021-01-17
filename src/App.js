import React, { useState, useEffect } from "react";
import Router from "./routing";
import { BrowserRouter } from "react-router-dom";
import MainTemplate from "./templates/MainTemplate";
import RootContext from "./context/context";
import emailjs from "emailjs-com";

const App = () => {
  let themeStoredInLocalStorage = localStorage.getItem("theme");
  const storeThemeInLocalStorage = (theme) => {
    localStorage.setItem("theme", theme);
  };
  const [theme, setTheme] = useState(
    themeStoredInLocalStorage ? themeStoredInLocalStorage : "light"
  );
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      storeThemeInLocalStorage("dark");
    } else {
      setTheme("light");
      storeThemeInLocalStorage("light");
    }
  };
  const sendQuestion = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_plarh0j",
        "template_7bbl3dd",
        e.target,
        "user_oRqOU5S9CjVoFm0t7S0mI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  const [pathStyle, setPathStyle] = useState(false);
  const checkPath = () => {
    if (window.location.pathname === "/contact") {
      setPathStyle(true);
    } else {
      setPathStyle(false);
    }
  };
  const goToContact = () => {
    setPathStyle(true);
  };

  const goToHome = () => {
    setPathStyle(false);
  };
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathStyle]);

  useEffect(() => {
    checkPath();
  }, []);

  return (
    <BrowserRouter>
      <RootContext.Provider
        value={{
          theme,
          toggleTheme,
          sendQuestion,
          checkPath,
          pathStyle,
          isMenuOpen,
          toggleMenu,
          goToContact,
          goToHome,
        }}
      >
        <MainTemplate>
          <Router />
        </MainTemplate>
      </RootContext.Provider>
    </BrowserRouter>
  );
};

export default App;
