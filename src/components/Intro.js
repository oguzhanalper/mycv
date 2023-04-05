import React from "react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const StyledIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;
const StyledHeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 5vw;
  @media (max-width: 850px) {
    flex-direction: column;
    row-gap: 5vh;
  }
`;
const StyledHeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5vh;
  margin-top: 5vh;
  overflow-wrap: break-word;
  width: 75%;
  @media (max-width: 850px) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 450px) {
    text-align: center;
    width: 90%;
  }
`;
const StyledNameContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.78vw;
  @media (max-width: 450px) {
    justify-content: center;
  }
`;

const StyledLinkOuterContainer = styled.div`
  display: flex;
  column-gap: 1vw;
  @media (max-width: 880px) {
    flex-direction: column;
    align-items: center;
    row-gap: 1vh;
  }
  @media (max-width: 820px) {
    display: flex;
    flex-direction: row;
  }
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledHireMeContainer = styled.div`
  width: 10vw;
  height: 7vh;
  border: 1px solid #3730a3;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1vw;
  background-color: #3730a3;
  cursor: pointer;
  :hover {
    border-radius: 20%;
  }
  @media (max-width: 880px) {
    width: 50%;
    height: 6vh;
  }
`;

const StyledHireMeContainerText = styled.p`
  font-size: 1.1rem;
  color: white;
`;

const StyledLinkContainer = styled.div`
  width: 10vw;
  height: 7vh;
  border: 1px solid #3730a3;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1vw;
  cursor: pointer;

  @media (max-width: 950px) {
    column-gap: 0.1vw;
  }
  @media (max-width: 880px) {
    width: 50%;
    column-gap: 1.5vw;
    height: 6vh;
  }
`;

const StyledLinkContainerText = styled.a`
  font-size: 1.1rem;
`;

const StyledLinkContainerImage = styled.img`
  width: 1rem;
`;
const StyledMeImage = styled.div`
  margin-top: 5rem;
  width: 50vw;
  height: 65vh;
  background-position: center;
  background-size: cover;
  background-image: url("./images/oguzhan.JPG");
  background-repeat: no-repeat;
  border-radius: 50px;
  box-shadow: 10px 10px 50px 10px #3730a3;
  @media (max-width: 850px) {
    width: 60%;
    height: 30vh;
  }
  @media (max-width: 450px) {
    width: 90%;
    height: 30vh;
  }
`;
function Intro(props) {
  return (
    <StyledIntroContainer>
      <StyledHeroContainer>
        <StyledHeroTextContainer>
          <StyledNameContainer>
            <hr className="border-2 border-solid border-indigo-600 w-24 mt-2 "></hr>
            <h1 className="text-base font-semibold">Oğuzhan ALPER</h1>
          </StyledNameContainer>
          <h3 className="font-black text-3xl leading-10 break-words md:max:text-base:leading-8">
            Frontend Web Developer
          </h3>
          <p>
            Hi I'm Oğuzhan, frontend developer. You are looking for a developer
            to creating static web site that scalable and having a nice
            appearence, check out some of my projects and feel free to get in
            touch with me.
          </p>
          <StyledLinkOuterContainer>
            <StyledHireMeContainer>
              <HashLink smooth to="/#hire-me">
                <StyledHireMeContainerText>Hire me</StyledHireMeContainerText>
              </HashLink>
            </StyledHireMeContainer>
            <StyledLinkContainer>
              <StyledLinkContainerImage src="./images/github.png" />
              <StyledLinkContainerText
                href="https://github.com/oguzhanalper06/"
                target="_blank"
              >
                Github
              </StyledLinkContainerText>
            </StyledLinkContainer>
            <StyledLinkContainer>
              <StyledLinkContainerImage src="./images/LinkedIn.png" />
              <StyledLinkContainerText
                href="https://tr.linkedin.com/in/o%C4%9Fuzhanalper/"
                target="_blank"
              >
                LinkedIn
              </StyledLinkContainerText>
            </StyledLinkContainer>
          </StyledLinkOuterContainer>
        </StyledHeroTextContainer>
        <StyledMeImage></StyledMeImage>
      </StyledHeroContainer>
    </StyledIntroContainer>
  );
}

export default Intro;
