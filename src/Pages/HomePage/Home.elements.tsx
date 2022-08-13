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
  font-size: 50px;
  text-align: center;
`;

export const GridContainer = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(610, 1fr));
`;

export const GridItem = styled.div``;

export const GridImage = styled.img``;
