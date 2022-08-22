import { useCopyToClipboard } from "usehooks-ts";

import copyIcon from "../../assets/Images/copy.svg";
import mouseImage from "../../assets/Images/Market/LojaPageProduct.png";
import webCamImage from "../../assets/Images/Market/LojaPageProductEight.png";
import gabineteImage from "../../assets/Images/Market/LojaPageProductFive.png";
import impressoraImage from "../../assets/Images/Market/LojaPageProductFour.png";
import tonnerImage from "../../assets/Images/Market/LojaPageProductNine.png";
import ssdImage from "../../assets/Images/Market/LojaPageProductSeven.png";
import leitorImage from "../../assets/Images/Market/LojaPageProductSix.png";
import foneImage from "../../assets/Images/Market/LojaPageProductThree.png";
import tecladoImage from "../../assets/Images/Market/LojaPageProductTwo.png";
import wppIcon from "../../assets/Images/wpp.svg";
import {
  SectionOne,
  ImageDiv,
  Text,
  Btn,
  Icon,
  GridProductsContainer,
  GridProduct,
  GridContainerImage,
  GridImage,
  GridTitle,
  GridText,
  GridBtn,
  LinkSocialMedia,
} from "./Products.elements";

function Products() {
  const [value, copy] = useCopyToClipboard();
  return (
    <SectionOne>
      <ImageDiv>
        <Text>Veja os Periféricos mais vendidos</Text>
        <Btn onClick={() => copy("37 999999999")}>
          <Icon src={copyIcon} />
          37 999999999
        </Btn>
        <LinkSocialMedia
          target="_blank"
          href="https://wa.me/553788087079"
          rel="noreferrer"
        >
          <Btn>
            <Icon src={wppIcon} />
            37 999999999
          </Btn>
        </LinkSocialMedia>
      </ImageDiv>

      <GridProductsContainer>
        <GridProduct>
          <GridContainerImage>
            <GridImage src={mouseImage} alt="Mouse" />
          </GridContainerImage>
          <GridTitle>Mouses</GridTitle>
          <GridText>Veja os modelos disponiveis</GridText>
          <LinkSocialMedia
            target="_blank"
            href="https://wa.me/553788087079"
            rel="noreferrer"
          >
            <GridBtn>Entre em Contato</GridBtn>
          </LinkSocialMedia>
        </GridProduct>

        <GridProduct>
          <GridContainerImage>
            <GridImage src={tecladoImage} alt="teclado" />
          </GridContainerImage>
          <GridTitle>Teclados</GridTitle>
          <GridText>Veja os modelos disponiveis</GridText>

          <LinkSocialMedia
            target="_blank"
            href="https://wa.me/553788087079"
            rel="noreferrer"
          >
            <GridBtn>Entre em Contato</GridBtn>
          </LinkSocialMedia>
        </GridProduct>

        <GridProduct>
          <GridContainerImage>
            <GridImage src={foneImage} alt="fone" />
          </GridContainerImage>
          <GridTitle>Fones/Headset</GridTitle>
          <GridText>Veja os modelos disponiveis</GridText>
          <LinkSocialMedia
            target="_blank"
            href="https://wa.me/553788087079"
            rel="noreferrer"
          >
            <GridBtn>Entre em Contato</GridBtn>
          </LinkSocialMedia>
        </GridProduct>

        <GridProduct>
          <GridContainerImage>
            <GridImage src={impressoraImage} alt="impressora" />
          </GridContainerImage>
          <GridTitle>Impressoras</GridTitle>
          <GridText>Veja os modelos disponiveis</GridText>
          <LinkSocialMedia
            target="_blank"
            href="https://wa.me/553788087079"
            rel="noreferrer"
          >
            <GridBtn>Entre em Contato</GridBtn>
          </LinkSocialMedia>
        </GridProduct>

        <GridProduct>
          <GridContainerImage>
            <GridImage src={gabineteImage} alt="gabinete" />
          </GridContainerImage>
          <GridTitle>Gabinetes</GridTitle>
          <GridText>Veja os modelos disponiveis</GridText>
          <LinkSocialMedia
            target="_blank"
            href="https://wa.me/553788087079"
            rel="noreferrer"
          >
            <GridBtn>Entre em Contato</GridBtn>
          </LinkSocialMedia>
        </GridProduct>

        <GridProduct>
          <GridContainerImage>
            <GridImage src={leitorImage} alt="leitor qr code" />
          </GridContainerImage>
          <GridTitle>Leitor de barras</GridTitle>
          <GridText>Veja os modelos disponiveis</GridText>
          <LinkSocialMedia
            target="_blank"
            href="https://wa.me/553788087079"
            rel="noreferrer"
          >
            <GridBtn>Entre em Contato</GridBtn>
          </LinkSocialMedia>
        </GridProduct>

        <GridProduct>
          <GridContainerImage>
            <GridImage src={ssdImage} alt="SSD" />
          </GridContainerImage>
          <GridTitle>Ssd's</GridTitle>
          <GridText>Veja os modelos disponiveis</GridText>
          <LinkSocialMedia
            target="_blank"
            href="https://wa.me/553788087079"
            rel="noreferrer"
          >
            <GridBtn>Entre em Contato</GridBtn>
          </LinkSocialMedia>
        </GridProduct>

        <GridProduct>
          <GridContainerImage>
            <GridImage src={webCamImage} alt="WebCam" />
          </GridContainerImage>
          <GridTitle>Webcam's</GridTitle>
          <GridText>Veja os modelos disponiveis</GridText>
          <LinkSocialMedia
            target="_blank"
            href="https://wa.me/553788087079"
            rel="noreferrer"
          >
            <GridBtn>Entre em Contato</GridBtn>
          </LinkSocialMedia>
        </GridProduct>

        <GridProduct>
          <GridContainerImage>
            <GridImage src={tonnerImage} alt="Toner impressora" />
          </GridContainerImage>
          <GridTitle>Toner</GridTitle>
          <GridText>Veja os modelos disponiveis</GridText>
          <LinkSocialMedia
            target="_blank"
            href="https://wa.me/553788087079"
            rel="noreferrer"
          >
            <GridBtn>Entre em Contato</GridBtn>
          </LinkSocialMedia>
        </GridProduct>
      </GridProductsContainer>
    </SectionOne>
  );
}

export default Products;
