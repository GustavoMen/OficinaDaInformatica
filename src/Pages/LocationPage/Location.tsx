import React from "react";

import locationIconOne from "../../assets/Images/location/LocationPageIconOne.svg";
import locationIconTwo from "../../assets/Images/location/LocationPageIconTwo.svg";
import ImageOne from "../../assets/Images/services/ServicePageImageOne.png";
import {
  MainText,
  Sectionone,
  ContainerText,
  SecondText,
  ImgContainer,
  ImgOne,
  SectionTwo,
  SectionTwoDiv,
  ItemDiv,
  ItemLogo,
  ItemText,
  ImageDiv,
  Btn,
  Text,
} from "./Location.elements";

function Location() {
  return (
    <>
      <Sectionone>
        <ContainerText>
          <MainText>
            Nos dedicamos em simplificar o dia a dia dos nossos clientes
          </MainText>
          <SecondText>
            Atendemos com Locação de Impressão, com modelos de equipamentos para
            diferentes fluxos de trabalho sempre atualizados com o que há de
            mais inovador e eficiente no mercado.
          </SecondText>
        </ContainerText>
        <ImgContainer>
          <ImgOne src={ImageOne} />
        </ImgContainer>
      </Sectionone>
      <SectionTwo>
        <SectionTwoDiv>
          <ItemDiv>
            <ItemLogo src={locationIconOne} />
            <ItemText>
              Locação de impressoras de diversos tipos e para todos os
              segmentos.
            </ItemText>
          </ItemDiv>

          <ItemDiv>
            <ItemLogo src={locationIconTwo} />
            <ItemText>
              Proporcionamos economia de recursos e produtividade.
            </ItemText>
          </ItemDiv>
        </SectionTwoDiv>

        <ImageDiv>
          <Text>Entre em Contato agora mesmo!</Text>
          <Btn>37 999999999</Btn>
        </ImageDiv>
      </SectionTwo>
    </>
  );
}

export default Location;
