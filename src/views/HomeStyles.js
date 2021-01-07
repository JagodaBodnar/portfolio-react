import styled from "styled-components";
export const StyledSectionContainer = styled.div`
  margin: 100px 0;
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
