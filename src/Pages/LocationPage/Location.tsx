import React from "react";

import ImageOne from "../../assets/Images/location/Image.png";
import locationIconOne from "../../assets/Images/location/LocationPageIconOne.svg";
import locationIconTwo from "../../assets/Images/location/LocationPageIconTwo.svg";
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
  ImageText,
  SectionThree,
  SectionThreeTitle,
  SectionThreeSubTitle,
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
          <ImageText>Entre em Contato agora mesmo!</ImageText>
          <Btn>37 999999999</Btn>
        </ImageDiv>
      </SectionTwo>

      <SectionThree>
        <SectionThreeTitle>Diferenciais</SectionThreeTitle>
        <SectionThreeSubTitle>Por que escolher a locação?</SectionThreeSubTitle>
      </SectionThree>
    </>
  );
}

export default Location;
