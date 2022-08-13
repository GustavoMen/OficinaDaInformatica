import imageOne from "../../assets/Images/home/image1.png";
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
  GridImage,
} from "./Home.elements";

// IMAGES

export default function Home() {
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
          <GridItem>
            <GridImage />
          </GridItem>
        </GridContainer>
      </SectionTwo>
    </Container>
  );
}
