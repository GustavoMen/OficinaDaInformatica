import styled from "styled-components";

export const Sectionone = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContainerText = styled.div`
  width: 45%;
  margin-top: 100px;

  @media screen and (max-width: 768px) {
    width: 90%;
    display: flex;
    flex-direction: column;
  }
`;
export const MainText = styled.h1`
  font-size: 64px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const SecondText = styled.p`
  margin-top: 30px;
  font-size: 32px;
  color: #696969;
  @media screen and (max-width: 768px) {
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

  @media screen and (max-width: 768px) {
    align-self: center;
  }
`;

export const ImgContainer = styled.div`
  margin-top: 70px;
  margin-left: 50px;
  width: 50%;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    margin-left: 0px;
  }
`;

export const ImgOne = styled.img`
  width: 640px;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
