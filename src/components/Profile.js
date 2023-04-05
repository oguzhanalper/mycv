import React from "react";
import styled from "styled-components";

const StyledProfilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5vh auto 0 auto;
  width: 80%;
  row-gap: 5vh;
  border-top: 0.2rem solid #afa7de;
  border-bottom: 0.2rem solid #afa7de;
  padding: 5vh 0;
`;
const StyledProfileTitle = styled.h2`
  font-weight: 600;
  line-height: 48px;
  font-size: 3rem;
  @media (max-width: 750px) {
    text-align: center;
  }
`;

const StyledProfileTextsContainer = styled.div`
  display: flex;
  column-gap: 5vw;
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    row-gap: 5vh;
  }
`;

const StyledProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2vh;
  width: 40%;
  @media (max-width: 750px) {
    width: 70%;
    align-items: center;
  }
`;

const StyledTable = styled.table`
  text-align: left;
  width: 30vw;
  border-collapse: separate;
  @media (max-width: 750px) {
    width: 100%;
    align-items: center;
    padding-left: 12vw;
  }
  @media (max-width: 450px) {
    width: 70vw;
  }
`;

const StyledTh = styled.th`
  padding-top: 0.3vw;
  vertical-align: top;
  @media (max-width: 750px) {
    padding-top: 3vh;
  }
`;

const StyledTd = styled.td`
  padding-top: 0.3vw;
  vertical-align: top;
  @media (max-width: 750px) {
    padding-top: 3vh;
  }
`;

const StyledAboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2vh;
  width: 50%;
  @media (max-width: 750px) {
    align-items: center;
    width: 70%;
  }
  @media (max-width: 450px) {
    width: 80%;
  }
`;

const StyledProfileSubTitle = styled.h4`
  font-size: 1.87rem;
  font-weight: 500;
  line-height: 28px;
`;

const StyledProfileText = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 150%;
  @media (max-width: 750px) {
    text-align: center;
  }
`;

function Profile(props) {
  return (
    <StyledProfilesContainer id="profile">
      <StyledProfileTitle>Profile</StyledProfileTitle>
      <StyledProfileTextsContainer>
        <StyledProfileContainer>
          <StyledProfileSubTitle>Profile</StyledProfileSubTitle>
          <StyledTable>
            <tbody>
              <tr>
                <StyledTh>Year of Birth</StyledTh>
                <StyledTd>1993</StyledTd>
              </tr>
              <tr>
                <StyledTh>Location</StyledTh>
                <StyledTd>Ankara</StyledTd>
              </tr>
              <tr>
                <StyledTh>Education</StyledTh>
                <StyledTd>Cankaya University,2018</StyledTd>
              </tr>
              <tr>
                <StyledTh>Preferred Position</StyledTh>
                <StyledTd>Frontend</StyledTd>
              </tr>
            </tbody>
          </StyledTable>
        </StyledProfileContainer>
        <StyledAboutMeContainer>
          <StyledProfileSubTitle>About Me</StyledProfileSubTitle>
          <StyledProfileText>
            After graduating in Mechanical Engineering in 2018, I had the
            opportunity to work in sales for a few months in U.S.A. During this
            time, I had the chance to meet some programmers, which increased my
            interest in web development. I am currently in an intense learning
            phase to improve myself in this field, which has an ocean of
            knowledge flow.
          </StyledProfileText>
        </StyledAboutMeContainer>
      </StyledProfileTextsContainer>
    </StyledProfilesContainer>
  );
}

export default Profile;
