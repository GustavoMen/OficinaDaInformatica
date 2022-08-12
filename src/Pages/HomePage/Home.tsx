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
    </Container>
  );
}
