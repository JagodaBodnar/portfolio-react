import React, { useState, useEffect } from "react";
import Router from "./routing";
import { BrowserRouter } from "react-router-dom";
import MainTemplate from "./templates/MainTemplate";
import RootContext from "./context/context";
import emailjs from "emailjs-com";

const App = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [sent, setSent] = useState(false);
  const sendInformation = () => {
    setSent(true);
    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

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
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        e.target,
        `${process.env.REACT_APP_USER_ID}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    sendInformation();
    setNameValue("");
    setEmailValue("");
    setMessageValue("");
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
          nameValue,
          setNameValue,
          emailValue,
          setEmailValue,
          messageValue,
          setMessageValue,
          sent,
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
