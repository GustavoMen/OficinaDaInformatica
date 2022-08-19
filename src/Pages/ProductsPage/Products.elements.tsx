import styled from "styled-components";

import backgroundImage from "../../assets/Images/LocationPageImageTwo.png";

/// Section One ///////////////////////////////////////////////

export const SectionOne = styled.section``;

/// CTA ////////////////////

export const Btn = styled.button`
  border: 4px solid #fff;
  margin-top: 10px;
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
  height: 120px;
  background: url(${backgroundImage});
  text-align: center;

  @media screen and (max-width: 656px) {
    height: 180px;
    ${Btn} {
      margin-top: 15px;
    }
  }
`;

export const Text = styled.h3`
  width: 400px;
  padding-top: 30px;
  margin: auto;
  color: #fff;
  font-size: 24px;
`;

/// Grid Products ///////////////////

export const GridProductsContainer = styled.div`
  justify-items: center;
  align-items: center;
  padding-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 30px;
  margin-bottom: 70px;

  @media screen and (max-width: 996px) {
    grid-template-columns: 1fr;
    margin-bottom: 0;
  }
`;

export const GridProduct = styled.div`
  margin-top: 40px;
  box-shadow: 2px 4px #888888;
  width: 230px;
  align-items: center;
  justify-items: center;
  display: flex;
  flex-direction: column;
  border: 3px solid #f8f8f8;
  border-bottom: 5px solid #f8f8f8;
  border-radius: 5px;

  @media screen and (max-width: 996px) {
    margin-top: 20px;
  }
`;

export const GridContainerImage = styled.div`
  text-align: center;
  background-color: #f8f8f8;
  width: 100%;
`;

export const GridImage = styled.img`
  height: 100px;
  background-color: #f8f8f8;
`;

export const GridTitle = styled.h3`
  font-size: 28px;
  padding-top: 15px;
  font-weight: bold;
`;

export const GridText = styled.p`
  margin-top: 15px;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  color: #696969;
`;

export const GridBtn = styled.button`
  font-size: 16px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 15px;
  height: 30px;
  align-self: center;
  color: #696969;
  background-color: #fff;
  border: 3px solid #b72d2f;
  border-radius: 10px;
  width: 85%;
  transition: 0.6s ease;

  &:hover {
    transform: scale(1.1);
    background-color: #b72d2f;
    color: #fff;
  }
`;
