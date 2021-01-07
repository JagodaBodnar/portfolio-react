import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavigationContainer = styled.div`
  position: fixed;
  top: 5px;
  left: 0;
  width: 100vw;
  z-index: 10;
`;
export const StyledNavigationContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const StyledNavigationList = styled.ul`
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
`;
export const StyledNavigationLinks = styled(Link)`
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #fff;
  display: block;
  transition: 0.3s;
  &:hover {
    color: #0278ae;
  }
`;

export const StyledNavigationOverlay = styled.div`
  height: 100%;
  width: ${({ isMenuOpen }) => (isMenuOpen ? "100%" : "0%")};
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 1);
  overflow-x: hidden;
  transition: 0.5s;
`;

export const StyledSpan = styled.span`
  display: block;
  width: 30px;
  height: 2px;
  margin-bottom: 5px;
  position: relative;
  background: ${({ isMenuOpen, theme }) =>
    isMenuOpen ? "#0278ae" : theme === "light" ? "#676566" : "#E1DEE2"};
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    opacity 0.55s ease;
`;
export const StyledHamburger = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  z-index: 1;
  margin: 5px 20px 0 0;
  cursor: pointer;
  z-index: 1000;
  ${StyledSpan}:first-child {
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? "rotate(45deg) translate(-1px, 0px)" : ""};
  }
  ${StyledSpan}:last-child {
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? "rotate(-45deg) translate(-2px, -1px)" : ""};
  }
  ${StyledSpan}:nth-child(2) {
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? "0" : "1")};
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? "transform: rotate(0deg) scale(0.2, 0.2)" : ""};
  }
`;

export const StyledButtonMovileContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
