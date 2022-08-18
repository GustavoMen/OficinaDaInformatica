import { Link } from "react-router-dom";
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
  padding-left: 50px;

  @media screen and (max-width: 996px) {
    width: 60%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  @media screen and (max-width: 524px) {
    padding-left: 0;
  }
`;
export const MainText = styled.h1`
  font-size: 48px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }

  @media screen and (max-width: 392px) {
    font-size: 42px;
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

export const WppImg = styled.img`
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  height: 30px;
  display: none;
`;

export const Btn = styled.button`
  display: inline-block;
  margin: auto;
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
    padding-bottom: 20px;

    ${WppImg} {
      display: inline-block;
    }
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

  @media screen and (max-width: 392px) {
    font-size: 42px;
  }
`;

export const GridContainer = styled.div`
  padding-top: 40px;
  display: grid;
  margin-bottom: 50px;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  justify-content: center;

  @media screen and (max-width: 996px) {
    grid-template-columns: 1fr;
  }
`;

export const GridTitle = styled.h2`
  font-size: 42px;
  padding-top: 20px;
  text-align: center;
  color: #000;
`;

export const GridText = styled.p`
  font-size: 24px;
  padding-top: 20px;
  text-align: center;
  color: #696969;
  font-weight: bold;
`;

export const GridList = styled.ul`
  color: #696969;
  list-style: none;
  padding-top: 20px;
  height: 135px;
`;

export const GridListText = styled.li`
  font-size: 24px;
  font-weight: 100;
  padding-top: 5px;
  align-self: center;
`;

export const GridBtn = styled.button`
  margin-top: 20px;
  border: none;
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  border-radius: 10px;
  margin-bottom: 50px;
  background-color: #b72d2f;
  height: 45px;
  width: 75%;
  display: none;
`;

export const GridItem = styled.div`
  position: relative;
  text-align: center;
  margin: auto;
  margin-top: 15px;
  width: 400px;
  height: 500px;
  transition: all 1s ease;
  border-radius: 10px;

  &:hover {
    background: url(${backgroundGrid});
    background-size: cover;
    transform: scale(1.05);

    ${GridTitle} {
      color: #fff;
    }
    ${GridText} {
      color: #fff;
    }

    ${GridList} {
      color: #fff;
    }

    ${GridBtn} {
      background-color: #fff;
      color: #b72d2f;
      display: inline-block;
    }
  }

  @media screen and (max-width: 996px) {
    width: 80%;
  }
`;

export const GridImageIcon = styled.img`
  padding-top: 15px;
  text-align: center;
  width: 90px;
`;

export const PageLinks = styled(Link)`
  text-decoration: none;
  border: none;
  outline: none;
`;
