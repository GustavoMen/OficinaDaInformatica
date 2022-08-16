// IMAGES
import { useState } from "react";

import backgroundGrid from "../../assets/Images/home/BackgroundGrid.png";
import imageOne from "../../assets/Images/home/image1.png";
import SistemasIconTwo from "../../assets/Images/home/sistemaActiveted.png";
import SistemasIconOne from "../../assets/Images/home/sistemaDesativeted.png";
import { Container } from "../../globalStyles";
import {
  MainText,
  Sectionone,
  ContainerText,
  SecondText,
  Btn,
  ImgContainer,
  ImgOne,
  SectionTwo,
  SectionTwoTitle,
  GridContainer,
  GridItem,
  GridImageIcon,
  GridTitle,
  GridText,
  GridList,
  GridListText,
  GridBtn,
} from "./Home.elements";

export default function Home() {
  const [Icon, setIcon] = useState(0);

  const toggleIcon = (index: number) => {
    setIcon(index);
  };
  return (
    <Container>
      <Sectionone>
        <ContainerText>
          <MainText>Compre produtos modernos.</MainText>
          <SecondText>
            Aumente a produtividade de seus equipamentos com produtos modernos.
          </SecondText>
          <Btn>Entre em Contato</Btn>
        </ContainerText>
        <ImgContainer>
          <ImgOne src={imageOne} />
        </ImgContainer>
      </Sectionone>
      <SectionTwo>
        <SectionTwoTitle>Quais problemas resolvemos para você?</SectionTwoTitle>
        <GridContainer>
          <GridItem
            onMouseOver={() => toggleIcon(1)}
            onMouseOut={() => toggleIcon(0)}
          >
            <GridImageIcon
              src={Icon === 1 ? SistemasIconTwo : SistemasIconOne}
            />
            <GridTitle>Sistemas</GridTitle>
            <GridText>Soluções eficazes para impulsionar seus ganhos.</GridText>
            <GridList>
              <GridListText>Soluções Comercias</GridListText>
              <GridListText>Soluções Gerenciais</GridListText>
              <GridListText>Soluções Fiscais</GridListText>
            </GridList>
            <GridBtn>Saiba Mais</GridBtn>
          </GridItem>
          <GridItem>
            <GridImageIcon />
            <GridTitle>Sistemas</GridTitle>
            <GridText>Soluções eficazes para impulsionar seus ganhos.</GridText>
          </GridItem>
        </GridContainer>
      </SectionTwo>
    </Container>
  );
}
