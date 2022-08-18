import styled from "styled-components";

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

export const SectionTwo = styled.section`
  width: 100%;
  height: 200px;
  border: 1px solid #000;
`;

export const SectionTwoDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const ItemDiv = styled.div``;

export const ItemLogo = styled.img``;

export const ItemText = styled.p``;
