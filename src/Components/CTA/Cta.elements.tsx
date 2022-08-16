import styled from "styled-components";

import backgroundImage from "../../assets/Images/LocationPageImageTwo.png";

export const ImageDiv = styled.div`
  width: 100%;
  height: 200px;
  background: url(${backgroundImage});
  text-align: center;
`;

export const Text = styled.h3`
  width: 500px;
  padding-top: 15px;
  margin: auto;
  color: #fff;
  font-size: 38px;
`;

export const Btn = styled.button`
  border: 4px solid #fff;
  margin-top: 10px;
  margin-left: 70px;
  margin-right: 70px;
  color: #fff;
  background: none;
  width: 220px;
  height: 50px;
  font-size: 24px;
  font-weight: bold;
  transition: 0.6s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
