import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const WelcomeContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-image: url(https://checkpointxp.com/wp-content/uploads/2021/07/GettyImages-951615396-scaled.jpg);
`;

export const WelcomeDialog = styled.div`
  height: 40vh;
  width: 30vw;
  margin: auto auto;
  background-color: white;
  border-radius: 20px;
  font-family: "Roboto Slab", serif;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
`;

export const HeadlineContainer = styled.div`
  width: 90vw;
  height: 7vh;
  display: flex;
  flex-direction: row;
  background-color: #2344c11;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    height: 17vh;
    width: 100vw;
  }

  @media only screen and (max-width: 425px) {
    padding: 1px;
  }
`;

export const HeadlineItem = styled.div`
  width: 30vw;
  height: 7vh;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 767px) {
    margin: 10px auto;
    width: 100vw;
  }

  @media only screen and (max-width: 425px) {
    padding: 1px;
  }
`;

export const HeadlineNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 10vw;
  height: 7vh;
`;

export const HeadlineName = styled.div`
  font-size: 25px;
  font-family: "Roboto Slab", serif;
  font-weight: bolder;
  margin: auto auto;
  padding: 15px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 768px) and (max-width: 945px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 425px) {
    padding: 1px;
  }

  @media only screen and (min-width: 946px) and (max-width: 1024px) {
    font-size: 18px;
  }
`;

export const WelcomeDialogName = styled.div`
  font-size: 25px;
  font-family: "Roboto Slab", serif;
  font-weight: bolder;
  margin: auto auto;
`;

export const SBText = styled.div`
  font-size: 15px;
  padding: 5px;
  text-align: center;
  margin: auto 1vw;
  cursor: default;
  font-family: "Roboto Slab", serif;
  color: #b5b5b5;

  &:hover {
    color: red;
    border-bottom: 2px solid red;
  }

  @media only screen and (max-width: 320px) {
    font-size: 11px;
  }
`;

export const MenuContainer = styled.div`
  width: 87vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 85vw;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1440px) {
    width: 80vw;
  }
`;

export const SideMenuContainer = styled.div`
  width: 15vw;
  height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 767px) {
    display: none;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 18vw;
    font-size: 12px;
    padding: 5px;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1440px) {
    width: 18vw;
  }
`;

export const FilterMenu = styled.div`
  width: 10vw;
  height: 93vh;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: inset 0px 1px 18px -5px rgba(0, 0, 0, 0.25);
`;

export const AccordionContainer = styled.div`
  margin-top: 10px;

  @media only screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100vw;
    text-align: center;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    margin: 0 10px;
  }

  @media only screen and (min-width: 1024px) {
    text-align: left;
  }
`;

export const AccordionTitle = styled.div`
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  outline: none;
  display: flex;
  flex-direction: row;
  font-family: "Roboto Slab", serif;

  @media only screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100vw;
    text-align: center;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 10px;
    font-size: 10px;
  }

  @media only screen and (min-width: 1024px) {
    text-align: center;
  }
`;

export const AccordionContent = styled.div`
  padding: 0 18px;
  transition: 0.4s;
  width: 10vw;
  height: 30vh;
  overflow-y: scroll;
  font-family: "Roboto Slab", serif;
  font-size: 12px;

  ::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 767px) {
    width: 100vw;
    text-align: left;
  }

  @media only screen and (min-width: 1024px) {
    width: 15vw;
    font-size: 10px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 10px;
  }
`;

export const BookmarkBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 82vw;
  height: 7vh;
  padding: 12px;
  background-color: white;
  margin: 10px auto;
  border-radius: 50px;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.2);
`;

export const CardContainer = styled.div`
  width: 90vw;
  height: 93vh;
  padding: 50px;
  background-color: #f0f3f5;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  -webkit-box-shadow: inset 0px 1px 18px -5px rgba(0, 0, 0, 0.25);

  ::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 767px) {
    width: 100vw;
    height: 85vh;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 85vw;
    padding: 20px;
  }

  @media only screen and (max-width: 425px) {
    padding: 10px;
  }
`;

export const LaptopCardLayoutContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 90vw;
`;

export const TabletCardLayoutContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 90vw;
`;

export const MobileCardLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CharacterCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 45vh;
  margin: 25px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 767px) {
    width: 70vw;
    height: 55vh;
    margin: 2vh auto;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 37vw;
    height: 45vh;
    margin: 15px 15px;
  }

  @media only screen and (min-width: 1024px) {
    width: 18vw;
    height: 45vh;
  }
`;

export const CardImageContainer = styled.div`
  width: 18vw;
  height: 25vh;

  @media only screen and (max-width: 767px) {
    width: 70vw;
    margin: 0px auto;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 37vw;
    height: 45vh;
    margin: 0 auto;
  }

  @media only screen and (min-width: 1024px) {
    width: 18vw;
    height: 25vh;
  }
`;

export const CardDescriptionContainer = styled.div`
  width: 18vw;
  height: 15vh;

  @media only screen and (max-width: 767px) {
    margin: 2vh auto;
    width: 70vw;
    font-size: 12px;
  }

  @media only screen and (max-width: 400px) {
    width: 70vw;
    margin: 1vh auto;
    font-size: 10px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 37vw;
    height: 35vh;
    margin: 1vh auto;
    font-size: 10px;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1440px) {
    width: 18vw;
    height: 15vh;
    margin: 4vh auto;
    font-size: 8px;
  }

  @media only screen and (min-width: 1440px) {
    width: 18vw;
    height: 15vh;
    margin: 2vh auto;
    padding: 5px;
    font-size: 10px;
  }
`;

export const CardCharacterName = styled.div`
  margin: 0 auto;
  font-family: "Roboto Slab", serif;
  text-align: center;
`;

export const CardCharacterDescription = styled.div`
  margin: 5px auto;
  font-family: "Roboto Slab", serif;
  text-align: center;
  color: gray;

  @media only screen and (max-width: 767px) {
    margin: 15px auto;
  }
`;
export const CardBookmarkBar = styled.div`
  width: 18vw;
  height: 5vh;
  display: flex;
  font-family: "Roboto Slab", serif;

  @media only screen and (max-width: 767px) {
    width: 70vw;
    margin: 3vh auto;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 37vw;
    height: 5vh;
    margin-bottom: 1vh;
  }

  @media only screen and (min-width: 1024px) {
    width: 18vw;
    height: 5vh;
  }
`;
