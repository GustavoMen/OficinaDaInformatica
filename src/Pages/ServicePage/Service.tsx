import React from "react";

import iconGridFive from "../../assets/Images/services/ServicePageIconFive.svg";
import iconGridFour from "../../assets/Images/services/ServicePageIconFour.svg";
import iconGridOne from "../../assets/Images/services/ServicePageIconOne.svg";
import iconGridSix from "../../assets/Images/services/ServicePageIconSix.svg";
import iconGridThree from "../../assets/Images/services/ServicePageIconThree.svg";
import iconGridTwo from "../../assets/Images/services/ServicePageIconTwo.svg";
import ImageOne from "../../assets/Images/services/ServicePageImageOne.png";
import {
  MainText,
  Sectionone,
  ContainerText,
  SecondText,
  ImgContainer,
  ImgOne,
  SectionTwo,
  GridItem,
  GridIcon,
  GridMainText,
  GridText,
} from "./Service.elements";

function Service() {
  return (
    <>
      <Sectionone>
        <ContainerText>
          <MainText>Suporte tecnico de informática</MainText>
          <SecondText>
            Loja especializada em suporte tecnico para computadores e notebooks
            desde ANO em Bom despacho/MG.
          </SecondText>
        </ContainerText>
        <ImgContainer>
          <ImgOne src={ImageOne} />
        </ImgContainer>
      </Sectionone>

      <SectionTwo>
        <GridItem>
          <GridIcon src={iconGridFour} />
          <GridMainText>Limpeza de Computadores</GridMainText>
          <GridText>
            A limpeza interna do computador é essencial para o bom funcionamento
            e aumento da vida útil do equipamento.
          </GridText>
        </GridItem>

        <GridItem>
          <GridIcon src={iconGridTwo} />
          <GridMainText>Manutenção de Computadores e Notebooks</GridMainText>
          <GridText>
            Formatação, limpeza interna, troca de pasta térmica, troca de tela,
            reparo das dobradiças. Aumentando o tempo de vida de seu
            equipamento.
          </GridText>
        </GridItem>

        <GridItem>
          <GridIcon src={iconGridSix} />
          <GridMainText>Otimazação de Desempenho</GridMainText>
          <GridText>
            Seu Pc está travando? Vamos descobrir o problema. Configurações
            avançadas e pontuais, deixando computadores com desempenho de novo,
            melhorando seu desempenho.
          </GridText>
        </GridItem>

        <GridItem>
          <GridIcon src={iconGridOne} />
          <GridMainText>Backup de Dados</GridMainText>
          <GridText>
            Mesmo que seu equipamento não ligue, fazemos backup do seus dados.
          </GridText>
        </GridItem>

        <GridItem>
          <GridIcon src={iconGridFive} />
          <GridMainText>Suporte Técnico</GridMainText>
          <GridText>
            Traga seu Pc ou Notebook para ser avaliado pelo técnico responsável.
          </GridText>
        </GridItem>

        <GridItem>
          <GridIcon src={iconGridThree} />
          <GridMainText>Remoção de Vírus</GridMainText>
          <GridText>
            Realizamos remoção de vírus em computadores e notebooks.
          </GridText>
        </GridItem>
      </SectionTwo>
    </>
  );
}

export default Service;
