import styled from "styled-components";

import backgroundImage from "../../assets/Images/LocationPageImageTwo.png";

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
  padding-left: 50px;

  @media screen and (max-width: 996px) {
    width: 80%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-left: 0;
  }

  @media screen and (max-width: 524px) {
    padding-left: 0;
  }
`;
export const MainText = styled.h1`
  padding-top: 25px;
  font-size: 42px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }

  @media screen and (max-width: 392px) {
    font-size: 42px;
  }
`;

export const SecondText = styled.p`
  margin-top: 60px;
  font-size: 18px;
  color: #696969;
  @media screen and (max-width: 996px) {
    text-align: center;
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

/// Section Two /////////////////////////////////////////////////////////////////////

export const SectionTwo = styled.section`
  width: 100%;
`;

export const SectionTwoDiv = styled.div`
  align-content: center;
  justify-content: space-between;
  margin-left: 45px;
  margin-right: 45px;
  margin-top: 20px;
  margin-bottom: 30px;
  width: 90%;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 996px) {
    flex-direction: column;
  }
`;

export const ItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 45%;

  @media screen and (max-width: 996px) {
    margin-top: 20px;
    width: 80%;
  }
`;

export const ItemLogo = styled.img`
  height: 60px;
`;

export const ItemText = styled.p`
  font-weight: bold;
  color: #696969;
  padding-top: 15px;
  padding-left: 10px;
`;

export const Btn = styled.button`
  border: 4px solid #fff;
  margin-top: 5px;
  margin-left: 70px;
  margin-right: 70px;
  color: #fff;
  background: none;
  width: 170px;
  height: 30px;
  font-size: 16px;
  font-weight: bold;
  transition: 0.6s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ImageDiv = styled.div`
  width: 100%;
  height: 100px;
  background: url(${backgroundImage});
  text-align: center;

  @media screen and (max-width: 656px) {
    height: 155px;
    ${Btn} {
      margin-top: 15px;
    }
  }
`;

export const ImageText = styled.h3`
  width: 400px;
  padding-top: 30px;
  margin: auto;
  color: #fff;
  font-size: 24px;
`;

/// Section Three ///////////////////////

export const SectionThree = styled.section``;

export const SectionThreeTitle = styled.h2`
  margin-top: 30px;
  font-size: 32px;
  color: #b72d2f;
  text-align: center;
`;

export const SectionThreeSubTitle = styled.p`
  text-align: center;
`;
