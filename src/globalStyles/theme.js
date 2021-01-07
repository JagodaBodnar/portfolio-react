import styled, { css } from "styled-components";

export const lightTheme = {
  body: "#fefefe",
  text: "#1a2026",
  blue: "#0278ae",
  darkGray: "#676566",
  lightGray: "#ddd",
};

export const darkTheme = {
  body: "#363537",
  text: "#E1DEE2",
  blue: "#35A8CE",
  darkGray: "#676566",
  lightGray: "#ddd",
};

export const HeaderOne = styled.h1`
  ${({ logo }) =>
    logo &&
    css`
      color: ${({ theme }) => theme.blue};
      font-weight: 300;
      font-family: "Yellowtail", cursive;
    `}
`;
export const HeaderTwo = styled.h2`
  color: ${({ theme }) => theme.text};
  font-weight: 300;
  font-family: "Catamaran", "Helvetica", "Arial", "sans-serif";
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.text};
  font-family: "Catamaran", "Helvetica", "Arial", "sans-serif";
  text-align: justify;
`;

export const StyledButtonPrimary = styled.button`
  border: 2px solid #ddd;
  padding: 5px;
  cursor: pointer;
  min-width: 180px;
  background-color: #fff;
  transition-duration: 0.7s;
  border-radius: 3px;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  font-family: "Roboto", "Helvetica", "Arial", "sans-serif";
  color: #222222;
  font-weight: 500;
  text-align: center;
  outline: none;
  &:hover {
    border: ${({ theme }) => `2px solid ${theme.blue}`};
  }
`;
