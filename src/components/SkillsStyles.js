import styled from "styled-components";

export const StyledOwlContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.darkBackground};
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledOwlWrap = styled.div`
  width: 70%;
  margin: 0 auto;
`;
export const StyledImg = styled.img`
  height: 50px;
  width: 100%;
  filter: ${({ theme }) => theme.lightGray};
`;

export const StyledSkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledSkillsInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const StyledSkillsParagraph = styled.p`
  position: absolute;
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  top: 130%;
  opacity: 0;
`;
