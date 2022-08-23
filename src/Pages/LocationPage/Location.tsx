import React from "react";
import { useCopyToClipboard } from "usehooks-ts";

import copyIcon from "../../assets/Images/copy.svg";
import ImageOne from "../../assets/Images/location/Image.png";
import locationIconFive from "../../assets/Images/location/LocationPageIconFive.svg";
import locationIconFour from "../../assets/Images/location/LocationPageIconFour.svg";
import locationIconOne from "../../assets/Images/location/LocationPageIconOne.svg";
import locationIconSix from "../../assets/Images/location/LocationPageIconSix.svg";
import locationIconThree from "../../assets/Images/location/LocationPageIconThree.svg";
import locationIconTwo from "../../assets/Images/location/LocationPageIconTwo.svg";
import wppIcon from "../../assets/Images/wpp.svg";
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
  GridContainer,
  GridItem,
  GridIcon,
  GridDivText,
  GridTitle,
  GridText,
  Icon,
  LinkSocialMedia,
} from "./Location.elements";

function Location() {
  const [value, copy] = useCopyToClipboard();
  return (
    <>
      <Sectionone>
        <ContainerText>
          <MainText>
            Nos dedicamos em simplificar o dia a dia dos nossos clientes
          </MainText>
          <SecondText>
            Atendemos com Locação de Impressoras, com modelos de equipamentos
            para diferentes fluxos de trabalho sempre atualizados com o que há
            de mais inovador e eficiente no mercado.
          </SecondText>
        </ContainerText>
        <ImgContainer>
          <ImgOne src={ImageOne} alt="Imagem ilustrativa" />
        </ImgContainer>
      </Sectionone>
      <SectionTwo>
        <SectionTwoDiv>
          <ItemDiv>
            <ItemLogo src={locationIconOne} alt="Grafico Subindo" />
            <ItemText>
              Locação de impressoras de diversos tipos e para todos os
              segmentos.
            </ItemText>
          </ItemDiv>

          <ItemDiv>
            <ItemLogo src={locationIconTwo} alt="Icone Dinheiro" />
            <ItemText>
              Proporcionamos economia de recursos e produtividade.
            </ItemText>
          </ItemDiv>
        </SectionTwoDiv>
      </SectionTwo>

      <SectionThree>
        <SectionThreeTitle>Diferenciais</SectionThreeTitle>
        <SectionThreeSubTitle>Por que escolher a locação?</SectionThreeSubTitle>

        <GridContainer>
          <GridItem>
            <GridIcon src={locationIconThree} alt="Icone Atendimento" />
            <GridDivText>
              <GridTitle>Atendimento Técnico</GridTitle>
              <GridText>
                Além da manutenção preventiva, qualquer problema que venha a
                ocorrer será solucionado por Técnicos rapidamente.
              </GridText>
            </GridDivText>
          </GridItem>

          <GridItem>
            <GridIcon src={locationIconFour} alt="Icone Dinheiro" />
            <GridDivText>
              <GridTitle>Redução de custos</GridTitle>
              <GridText>
                Proporcionamos economia de recursos e produtividade, com
                especialistas para realizar a instalação e manutenção dos
                equipamentos.
              </GridText>
            </GridDivText>
          </GridItem>

          <GridItem>
            <GridIcon src={locationIconFive} alt="Icone Manutenção" />
            <GridDivText>
              <GridTitle>Manutenção Preventiva</GridTitle>
              <GridText>
                Para evitar imprevistos nossos técnicos realizam a manutenção
                preventiva périodica, assim aumentando a vida útil do
                equipamento.
              </GridText>
            </GridDivText>
          </GridItem>

          <GridItem>
            <GridIcon src={locationIconSix} alt="Icone Entrega" />
            <GridDivText>
              <GridTitle>Equipamento pronta-entrega</GridTitle>
              <GridText>
                Todos os equipamentos prontos para uso, sendo entregues o mais
                rapido possivel para que seu rendimento não seja atrapalhado.
              </GridText>
            </GridDivText>
          </GridItem>
        </GridContainer>
      </SectionThree>
    </>
  );
}

export default Location;
