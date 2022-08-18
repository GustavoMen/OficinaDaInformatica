import React from "react";

import ImageOne from "../../assets/Images/services/ServicePageImageOne.png";
import {
  MainText,
  Sectionone,
  ContainerText,
  SecondText,
  ImgContainer,
  ImgOne,
  SectionTwo,
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
      <SectionTwo />
    </>
  );
}

export default Location;
