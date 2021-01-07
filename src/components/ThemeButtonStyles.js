import styled from "styled-components";

export const StyledButton = styled.div`
  background-color: #ddd;
  width: 100px;
  height: 25px;
  border: 1px solid #ddd;
  border-radius: 50px;
  position: relative;
  outline: none;
  cursor: pointer;
`;
export const StyledLightButton = styled.button`
  width: 50px;
  height: 25px;
  border: none;
  border-radius: 50px;
  background-color: #fefefe;
  position: absolute;
  left: 0;
  top: -1px;
  cursor: pointer;
  outline: none;
  border: 1px solid #ddd;
`;
export const StyledDarkButton = styled.button`
  width: 50px;
  height: 25px;
  border: none;
  border-radius: 50px;
  background-color: #363537;
  position: absolute;
  right: 0;
  top: -1px;
  cursor: pointer;
  border: 1px solid #ddd;
  outline: none;
`;
export const StyledSpanLight = styled.span`
  position: absolute;
  left: 10px;
  top: 3px;
  color: ${({ theme }) => (theme === "light" ? "#222222" : "#676566")};
  z-index: 1;
  font-size: 13px;
  font-family: "Roboto", "Helvetica", "Arial", "sans-serif";
`;
export const StyledSpanDark = styled.span`
  position: absolute;
  font-size: 13px;
  right: 10px;
  top: 3px;
  color: ${({ theme }) => (theme === "light" ? "#676566" : "#fefefe")};
  z-index: 1;
  font-family: "Roboto", "Helvetica", "Arial", "sans-serif";
`;
