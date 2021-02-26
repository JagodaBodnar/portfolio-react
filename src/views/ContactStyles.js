import styled, { css } from "styled-components";
import { device } from "../globalStyles/device";

export const StyledFormContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 3rem;
  position: relative;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", "Helvetica", "Arial", "sans-serif";
  @media ${device.mobile} {
    width: 60%;
  }
  @media ${device.tablet} {
    width: 40%;
  }
  @media ${device.laptop} {
    width: 30%;
  }
  @media ${device.desktop} {
    width: 20%;
  } ;
`;
export const StyledFormLabel = styled.label`
  position: absolute;
  top: ${({ value }) => (value === "" ? "0.8rem" : "100%")};
  left: 0;
  color: ${({ value, theme }) =>
    value === ""
      ? theme === "light"
        ? "#676566"
        : "#ddd"
      : theme === "light"
      ? "#DDD"
      : "#676566"};
  font-size: ${({ value }) => (value === "" ? "1" : "1.5")};
  transition: ${({ value }) =>
    value === "" ? "0.7s ease-in-out" : "0.7s ease-out"};
  cursor: text;
`;
export const StyledFormInput = styled.input`
  font-size: 1.5rem;
  border: none;
  outline: none;
  cursor: text;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  font-family: "Catamaran", "Helvetica", "Arial", "sans-serif";
  border-bottom: ${({ value, theme }) =>
    value === "" ? `2px solid ${theme.lightGray}` : `2px solid ${theme.blue}`};
  transition: 0.5s ease-in;
  &:focus ~ ${StyledFormLabel} {
    transition: 0.7s ease-in-out;
    font-size: 1rem;
    top: 100%;
    color: ${({ theme }) => theme.text};
  }
  &:focus {
    border-bottom: ${({ theme }) => `2px solid ${theme.blue}`};
  }
`;
export const StyledTextArea = styled.textarea`
  font-size: 1.5rem;
  border: none;
  outline: none;
  cursor: text;
  resize: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  font-family: "Catamaran", "Helvetica", "Arial", "sans-serif";
  border-bottom: ${({ value, theme }) =>
    value === "" ? `2px solid ${theme.lightGray}` : `2px solid ${theme.blue}`};
  transition: 0.5s ease-in;
  height: ${({ value }) => (value === "" ? "45px" : "150px")};
  &:focus ~ ${StyledFormLabel} {
    transition: 0.7s ease-in-out;
    font-size: 1rem;
    top: 100%;
    color: ${({ theme }) => theme.text};
  }
  &:focus {
    border-bottom: 2px solid #0278ae;
    height: 150px;
  }
`;
export const StyledSectionContainer = styled.div`
  margin: 100px 0;
`;
export const StyledSectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  margin: 50px auto;
`;
export const StyledSectionSpan = styled.div`
  border-bottom: ${({ theme }) => `1px solid ${theme.text}`};
  width: 35px;
  margin-right: 20px;
`;
export const StyledFormButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledContactSectionWrapper = styled.div`
  width: 100%;
  display: flex;
`;
export const StyledMediaContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledMediaImg = styled.img`
  width: 34px;
  height: 34px;
  margin: 10px;
  cursor: pointer;

  ${({ circleIcons }) =>
    circleIcons &&
    css`
      width: 37px;
      height: 37px;
    `};
`;
export const StyledMediaDesc = styled.p`
  display: none;
  font-size: 12px;
  color: ${({ theme }) => theme.blue};
`;
export const StyledMediaLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.mediaIcons};
  font-size: 35px;
  margin-right: 15px;
  cursor: pointer;
  transition: 0.7s;
  &:hover {
    color: ${({ theme }) => theme.blue};
  }
`;

export const StyledMediaDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
`;

export const StyledSendInformation = styled.div`
  width: 60%;
  margin: 30px auto;
  text-align: center;
  color: ${({ theme }) => theme.blue};
`;
