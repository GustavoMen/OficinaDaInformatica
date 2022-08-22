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
  font-weight: bold;
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
  width: 35vw;
  @media screen and (max-width: 996px) {
    width: 80%;
  }
`;

/// SectionTwo ///////////////////////

export const SectionTwo = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 100px;

  @media screen and (max-width: 996px) {
    grid-template-columns: 1fr;
    width: 70%;
    margin: auto;
    justify-items: center;
  }
`;

export const GridInitialLeft = styled.div`
  width: 90%;
  margin-top: 40px;
  margin-left: 50px;
  margin-right: 25px;
  margin-bottom: 60px;

  @media screen and (max-width: 996px) {
    margin-left: 0;
    margin-right: 0;
    margin-top: 20px;
  }
`;

export const GridInitialRight = styled.div`
  width: 90%;
  margin-top: 100px;
  margin-left: 25px;
  margin-right: 25px;

  @media screen and (max-width: 996px) {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0px;
  }
`;

export const GridMainText = styled.h1`
  padding-top: 25px;
  font-size: 32px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }

  @media screen and (max-width: 392px) {
    font-size: 24px;
  }
`;

export const GridSecondText = styled.p`
  margin-top: 60px;
  font-size: 18px;
  color: #696969;
  font-weight: bold;
  @media screen and (max-width: 996px) {
    text-align: center;
  }
`;

export const GridList = styled.ul`
  margin-top: 60px;
  font-weight: bold;
  color: #696969;
  font-size: 18px;

  @media screen and (max-width: 996px) {
    margin-left: 20px;
    margin-right: 0;
  }
`;

export const GridListText = styled.li`
  color: #696969;
  padding-top: 10px;
`;

export const GridContainerTextLeft = styled.div`
  width: 80%;
  margin-left: 50px;
  margin-bottom: 10px;
  height: 465px;
  margin-right: 25px;
  padding-bottom: 50px;

  @media screen and (max-width: 996px) {
    margin-left: 0px;
    margin-right: 0;
  }
`;

export const GridContainerTextRight = styled.div`
  width: 80%;
  margin-top: 80px;
  margin-left: 25px;
  margin-right: 25px;
  padding-bottom: 30px;

  @media screen and (max-width: 996px) {
    margin-left: 10px;
    margin-right: 0;
  }
`;
