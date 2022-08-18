// IMAGES
import { useState } from "react";

import imageOne from "../../assets/Images/home/Image1.png";
import LocationIconTwo from "../../assets/Images/home/LocationIconActiveted.svg";
import LocationIconOne from "../../assets/Images/home/LocationIconDesativeted.svg";
import ServiceIconOne from "../../assets/Images/home/ServiceIconActiveted.svg";
import ServiceIconTwo from "../../assets/Images/home/ServiceIconDesativeted.svg";
import SistemasIconTwo from "../../assets/Images/home/sistemaActiveted.svg";
import SistemasIconOne from "../../assets/Images/home/sistemaDesativeted.svg";
import VendasIconTwo from "../../assets/Images/home/VendasIconActiveted.svg";
import VendasIconOne from "../../assets/Images/home/VendasIconDesativeted.svg";
import WppImgLogo from "../../assets/Images/wppLogo.png";
import {
  MainText,
  Sectionone,
  ContainerText,
  SecondText,
  Btn,
  ImgContainer,
  ImgOne,
  WppImg,
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
  PageLinks,
} from "./Home.elements";

export default function Home() {
  const [Icon, setIcon] = useState(0);

  const toggleIcon = (index: number) => {
    setIcon(index);
  };
  return (
    <>
      <Sectionone>
        <ContainerText>
          <MainText>Compre produtos modernos.</MainText>
          <SecondText>
            Aumente a produtividade de seus equipamentos com produtos modernos.
          </SecondText>
          <Btn>
            <WppImg src={WppImgLogo} />
            Entre em Contato
            <WppImg src={WppImgLogo} />
          </Btn>
        </ContainerText>
        <ImgContainer>
          <ImgOne src={imageOne} />
        </ImgContainer>
      </Sectionone>
      <SectionTwo>
        <SectionTwoTitle>Quais problemas resolvemos para você?</SectionTwoTitle>
        <GridContainer>
          <PageLinks to="/systems">
            <GridItem
              onMouseOver={() => toggleIcon(1)}
              onMouseOut={() => toggleIcon(0)}
            >
              <GridImageIcon
                src={Icon === 1 ? SistemasIconTwo : SistemasIconOne}
              />
              <GridTitle>Sistemas</GridTitle>
              <GridText>Seu sistema de gestão on-line e suguro.</GridText>
              <GridList>
                <GridListText>Comercias</GridListText>
                <GridListText>Financeiras</GridListText>
                <GridListText>Fiscais</GridListText>
                <GridListText>Gerenciais</GridListText>
              </GridList>
              <GridBtn>Saiba Mais</GridBtn>
            </GridItem>
          </PageLinks>
          <GridItem
            onMouseOver={() => toggleIcon(2)}
            onMouseOut={() => toggleIcon(0)}
          >
            <GridImageIcon src={Icon === 2 ? ServiceIconTwo : ServiceIconOne} />
            <GridTitle>Serviços</GridTitle>
            <GridText>
              Projeto, instalação, e suporte em infraestrutura de TI.
            </GridText>
            <GridList>
              <GridListText>Cabeamento de Rede</GridListText>
              <GridListText>
                Assistencia técnica para Computadores e Notebooks.
              </GridListText>
            </GridList>
            <GridBtn>Saiba Mais</GridBtn>
          </GridItem>

          <GridItem
            onMouseOver={() => toggleIcon(3)}
            onMouseOut={() => toggleIcon(0)}
          >
            <GridImageIcon
              src={Icon === 3 ? LocationIconTwo : LocationIconOne}
            />
            <GridTitle>Locação</GridTitle>
            <GridText>
              A Locação de Impressoras é uma solução eficiente e econômica para
              sua empresa.
            </GridText>
            <GridList>
              <GridListText>
                Reduza custos na sua empresa com o aluguel de impressoras.
              </GridListText>
            </GridList>
            <GridBtn>Saiba Mais</GridBtn>
          </GridItem>

          <GridItem
            onMouseOver={() => toggleIcon(4)}
            onMouseOut={() => toggleIcon(0)}
          >
            <GridImageIcon src={Icon === 4 ? VendasIconTwo : VendasIconOne} />
            <GridTitle>Vendas</GridTitle>
            <GridText>
              Precisa Comprar Equipamentos, Perifericos e suprimentos de Alta
              Qualidade?
            </GridText>
            <GridList>
              <GridListText>
                Veja alguns produtos disponiveis na loja.
              </GridListText>
            </GridList>
            <GridBtn>Saiba Mais</GridBtn>
          </GridItem>
        </GridContainer>
      </SectionTwo>
    </>
  );
}
