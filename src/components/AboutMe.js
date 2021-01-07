import React from "react";
import { Paragraph } from "../globalStyles/theme";
import styled from "styled-components";
const StyledAboutMeSection = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const AboutMe = () => {
  return (
    <StyledAboutMeSection>
      <Paragraph>
        I started programming around 1.5 years ago. I am developing my knowledge
        under the watchful eye of experienced developer. In May 2020 I decided
        to focus on specific framework that is React. Since then I started to
        create more advanced projects that allowed me to progress and
        consolidate my skills. Currently I am looking for commercial projects
        thanks to which I could get experience.
      </Paragraph>
    </StyledAboutMeSection>
  );
};

export default AboutMe;
