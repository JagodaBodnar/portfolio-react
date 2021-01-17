import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNavigationContainer = styled.div`
  position: fixed;
  width: 100%;
  overflow: hidden;
  top: 0;
  background-color: ${({ theme }) => theme.body};
  z-index: 9999;
`;
export const StyledNavigationWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
`;
export const StyledNavigationLogo = styled.div`
  color: #000;
  margin-right: auto;
`;
export const StyledNavigationHomeLink = styled(Link)`
  text-decoration: none;
  margin-right: 20px;
  border-bottom: ${({ pathstyle, theme }) =>
    JSON.parse(pathstyle)
      ? "1px solid transparent"
      : `1px solid ${theme.blue}`};
  color: ${({ pathstyle, theme }) =>
    JSON.parse(pathstyle) ? theme.text : theme.blue};
  &:hover {
    border-bottom: ${({ theme }) => `1px solid ${theme.blue}`};
    color: ${({ theme }) => theme.blue};
  }
`;
export const StyledNavigationContactLink = styled(Link)`
  text-decoration: none;
  margin-right: 20px;
  border-bottom: ${({ pathstyle, theme }) =>
    JSON.parse(pathstyle)
      ? `1px solid ${theme.blue}`
      : "1px solid transparent"};
  color: ${({ pathstyle, theme }) =>
    JSON.parse(pathstyle) ? theme.blue : theme.text};
  &:hover {
    border-bottom: ${({ theme }) => `1px solid ${theme.blue}`};
    color: ${({ theme }) => theme.blue};
  }
`;

export const StyledNavigationHomeButton = styled.p``;
