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
  font-size: 48px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }

  @media screen and (max-width: 392px) {
    font-size: 42px;
  }
`;

export const SecondText = styled.p`
  margin-top: 60px;
  font-size: 24px;
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

/// Section Two //////////////////

export const SectionTwo = styled.section`
  justify-items: center;
  align-items: center;
  padding-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 30px;
  border-bottom: 4px solid #b72d2f;

  @media screen and (max-width: 996px) {
    grid-template-columns: 1fr;
    margin-bottom: 0;
  }
`;

export const GridItem = styled.div`
  text-align: center;
  width: 80%;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 20px;
  // border: 1px solid #000;

  @media screen and (max-width: 996px) {
    margin-top: 0;
  }
`;

export const GridIcon = styled.img`
  height: 70px;
  margin-bottom: 20px;
`;

export const GridMainText = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const GridText = styled.p`
  color: #696969;
  font-size: 18px;
`;
