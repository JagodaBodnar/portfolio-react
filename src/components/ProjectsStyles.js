import styled from "styled-components";
import { device } from "../globalStyles/device";

export const StyledProjectsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 80%;
  margin: 0 auto;
  @media ${device.desktop} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const StyledContainer = styled.div`
  padding: 1em 0;
  width: 100%;
`;

export const StyledDetails = styled.div`
  margin-top: 10px;
`;
export const StyledContent = styled.div`
  position: relative;
  width: 90%;
  margin: auto;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid #ddd;
  border-radius: 3px;
`;
export const StyledHeadingTwo = styled.h2`
  font-family: "Catamaran", "Helvetica", "Arial", "sans-serif";
  margin-top: 5px;
`;

export const StyledTechStachContainer = styled.div`
  margin-left: 5%;
`;

export const StyledLink = styled.a`
  font-family: "Catamaran", "Helvetica", "Arial", "sans-serif";
  text-decoration: none;
  color: ${({ theme }) => (theme === "light" ? "#222222" : "#ddd")};
  text-transform: uppercase;
  cursor: pointer;
  font-size: 15px;
  &:hover {
    border-bottom: 2px solid #0278ae;
  }
`;
export const StyledSpan = styled.span`
  margin: 0px 15px;
`;
export const StyledShowDetails = styled.div`
  margin-top: 15px;
  font-family: "Roboto", "Helvetica", "Arial", "sans-serif";
  font-size: 13px;
  letter-spacing: 1px;
`;
