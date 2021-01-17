import styled from "styled-components";
export const StyledSectionContainer = styled.div`
  margin-top: 50px;
  padding-bottom: 50px;
  overflow: hidden;
`;
export const StyledSectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 75%;
  margin: 50px auto;
`;
export const StyledSectionSpan = styled.div`
  border-bottom: ${({ theme }) => `1px solid ${theme.text}`};
  width: 35px;
  margin-right: 20px;
`;
