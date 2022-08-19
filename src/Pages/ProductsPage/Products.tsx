import React from "react";

import mouseImage from "../../assets/Images/Market/LojaPageProduct.png";
import webCamImage from "../../assets/Images/Market/LojaPageProductEight.png";
import gabineteImage from "../../assets/Images/Market/LojaPageProductFive.png";
import impressoraImage from "../../assets/Images/Market/LojaPageProductFour.png";
import tonnerImage from "../../assets/Images/Market/LojaPageProductNine.png";
import ssdImage from "../../assets/Images/Market/LojaPageProductSeven.png";
import leitorImage from "../../assets/Images/Market/LojaPageProductSix.png";
import foneImage from "../../assets/Images/Market/LojaPageProductThree.png";
import tecladoImage from "../../assets/Images/Market/LojaPageProductTwo.png";
import {
  SectionOne,
  ImageDiv,
  Text,
  Btn,
  GridProductsContainer,
  GridProduct,
  GridContainerImage,
  GridImage,
  GridTitle,
  GridText,
  GridBtn,
} from "./Products.elements";

function Products() {
  return (
    <SectionOne>
      <ImageDiv>
        <Text>Veja os Periféricos mais vendidos</Text>
        <Btn>37 999999999</Btn>
        <Btn>37 999999999</Btn>
      </ImageDiv>

      <GridProductsContainer>
        <GridProduct>
          <GridContainerImage>
            <GridImage src={mouseImage} />
          </GridContainerImage>
          <GridTitle>Mouses</GridTitle>
          <GridText>Veja os modelos disponiveis</GridText>
          <GridBtn>Entre em Contato</GridBtn>
        </GridProduct>

        <GridProduct>
          <GridContainerImage>
            <GridImage src={tecladoImage} />
          </GridContainerImage>
          <GridTitle>Teclados</GridTitle>
          <GridText>Veja os modelos disponiveis</GridText>
          <GridBtn>Entre em Contato</GridBtn>
        </GridProduct>

        <GridProduct>
          <GridContainerImage>
            <GridImage src={foneImage} />
          </GridContainerImage>
          <GridTitle>Fones/Headset</GridTitle>
          <GridText>Veja os modelos disponiveis</GridText>
          <GridBtn>Entre em Contato</GridBtn>
        </GridProduct>

        <GridProduct>
          <GridContainerImage>
            <GridImage src={impressoraImage} />
          </GridContainerImage>
          <GridTitle>Impressoras</GridTitle>
          <GridText>Veja os modelos disponiveis</GridText>
          <GridBtn>Entre em Contato</GridBtn>
        </GridProduct>

        <GridProduct>
          <GridContainerImage>
            <GridImage src={gabineteImage} />
          </GridContainerImage>
          <GridTitle>Gabinetes</GridTitle>
          <GridText>Veja os modelos disponiveis</GridText>
          <GridBtn>Entre em Contato</GridBtn>
        </GridProduct>

        <GridProduct>
          <GridContainerImage>
            <GridImage src={leitorImage} />
          </GridContainerImage>
          <GridTitle>Leitor de barras</GridTitle>
          <GridText>Veja os modelos disponiveis</GridText>
          <GridBtn>Entre em Contato</GridBtn>
        </GridProduct>

        <GridProduct>
          <GridContainerImage>
            <GridImage src={ssdImage} />
          </GridContainerImage>
          <GridTitle>Ssd's</GridTitle>
          <GridText>Veja os modelos disponiveis</GridText>
          <GridBtn>Entre em Contato</GridBtn>
        </GridProduct>

        <GridProduct>
          <GridContainerImage>
            <GridImage src={webCamImage} />
          </GridContainerImage>
          <GridTitle>Webcam's</GridTitle>
          <GridText>Veja os modelos disponiveis</GridText>
          <GridBtn>Entre em Contato</GridBtn>
        </GridProduct>

        <GridProduct>
          <GridContainerImage>
            <GridImage src={tonnerImage} />
          </GridContainerImage>
          <GridTitle>Toner</GridTitle>
          <GridText>Veja os modelos disponiveis</GridText>
          <GridBtn>Entre em Contato</GridBtn>
        </GridProduct>
      </GridProductsContainer>
    </SectionOne>
  );
}

export default Products;
