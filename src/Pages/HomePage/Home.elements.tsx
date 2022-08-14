import styled from "styled-components";

import backgroundGrid from "../../assets/Images/home/BackgroundGrid.png";

/// Section One /////////////////////////////////////////

export const Sectionone = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media screen and (max-width: 998px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerText = styled.div`
  width: 45%;
  margin-top: 100px;

  @media screen and (max-width: 996px) {
    width: 60%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;
export const MainText = styled.h1`
  font-size: 50px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const SecondText = styled.p`
  margin-top: 30px;
  font-size: 24px;
  color: #696969;
  @media screen and (max-width: 996px) {
    text-align: center;
  }
`;

export const Btn = styled.button`
  font-weight: bold;
  margin-top: 100px;
  width: 300px;
  height: 50px;
  background-color: #b72d2f;
  color: #fff;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
    color: #000;
    transition: all 0.5s ease;
    border: 3px solid #b72d2f;
    background-color: #fff;
  }

  @media screen and (max-width: 996px) {
    align-self: center;
  }
`;

export const ImgContainer = styled.div`
  margin-top: 70px;
  margin-left: 50px;
  width: 50%;
  justify-content: center;

  @media screen and (max-width: 996px) {
    width: 100%;
    display: flex;
    margin-left: 0px;
  }
`;

export const ImgOne = styled.img`
  width: 40vw;
  @media screen and (max-width: 996px) {
    width: 80%;
  }
`;

/// Section Two /////////////////////////////////////////

export const SectionTwo = styled.section`
  width: 100%;
`;

export const SectionTwoTitle = styled.h2`
  margin-top: 100px;
  font-size: 44px;
  text-align: center;
`;

export const GridContainer = styled.div`
  padding-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
`;

export const GridItem = styled.div`
  margin: auto;
  width: 400px;
  height: 400px;
  transition: all 1s ease;
  border-radius: 10px;

  &:hover {
    background: url(${backgroundGrid});
  }
`;

export const GridImageIcon = styled.img`
  padding-top: 30px;
  margin-left: 140px;
  text-align: center;
  width: 120px;
`;

export const GridTitle = styled.h2`
  font-size: 48px;
  padding-top: 32px;
  text-align: center;
`;

export const GridText = styled.p`
  font-size: 24px;
  padding-top: 32px;
  text-align: center;
  color: #696969;
  font-weight: bold;
`;
