import React from "react";
import {Paragraph} from "../globalStyles/theme";
import {StyledAboutMeSection} from "./AboutMeStyles";

const AboutMe = () => {
    return (
        <StyledAboutMeSection>
            <Paragraph>
                I graduated chemistry however my life choices brought me to Sweden.
                I decided to change my career path and started to learn programming.
                I have worked for over a year for Polish company using Angular framework, however my programming
                adventure I started with React.
                Currently looking for place where I could use my skills to build commercial applications.
            </Paragraph>
        </StyledAboutMeSection>
    );
};

export default AboutMe;
