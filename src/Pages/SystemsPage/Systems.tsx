import React from "react";

import ImageOne from "../../assets/Images/sistemas/SistemaPageImageOne.png";
import {
  MainText,
  Sectionone,
  ContainerText,
  SecondText,
  ImgContainer,
  ImgOne,
  SectionTwo,
  GridInitialLeft,
  GridInitialRight,
  GridMainText,
  GridSecondText,
  GridContainerTextLeft,
  GridContainerTextRight,
  GridList,
  GridListText,
} from "./Systems.elements";

function Systems() {
  return (
    <>
      <Sectionone>
        <ContainerText>
          <MainText>Seu sistema de gestão on-line e seguro.</MainText>
          <SecondText>
            Um sistema simples feito para o empresário brasileiro.
          </SecondText>
        </ContainerText>
        <ImgContainer>
          <ImgOne src={ImageOne} />
        </ImgContainer>
      </Sectionone>

      <SectionTwo>
        <GridInitialLeft>
          <GridMainText>
            Tudo oque sua empresa precisa em um só lugar
          </GridMainText>
          <GridSecondText>
            Gestão integrada, rotinas comtabeis e emissão de documentos fiscais
            direto do navegador web.
          </GridSecondText>
        </GridInitialLeft>

        <GridInitialRight>
          <GridMainText>Feito para o empresário brasileiro</GridMainText>
          <GridSecondText>
            Atende empresas de pequeno e médio porte, com a mesma eficiência.
            Indicado para MEI, empresas do Simples, Lucro real ou Presumido.{" "}
          </GridSecondText>
        </GridInitialRight>

        <GridContainerTextLeft>
          <GridMainText>
            Emissão ilimitada de notas e documentos fiscais
          </GridMainText>
          <GridSecondText>
            Vinculados a Prefeituras e Estados do Brasil: NF-e, MDF-e, NFC-e,
            NFS-e e CT-e
          </GridSecondText>

          <GridMainText>Onde e quando quiser</GridMainText>
          <GridSecondText>
            Sistema em nuvem, totalmente on-line e seguro.
          </GridSecondText>
        </GridContainerTextLeft>

        <GridContainerTextRight>
          <GridMainText>E Mais:</GridMainText>
          <GridList>
            <GridListText>
              Integração gratuita com a contabilidade.
            </GridListText>
            <GridListText>
              Geração de arquivos fiscais Sintegra e Sped.
            </GridListText>
            <GridListText>
              Controle financeiro com geração de boleto.
            </GridListText>
            <GridListText>Controle de Estoque.</GridListText>
            <GridListText>Controle de Produção.</GridListText>
            <GridListText>Segurança, Suporte e Privacidade.</GridListText>
          </GridList>
        </GridContainerTextRight>
      </SectionTwo>
    </>
  );
}

export default Systems;
