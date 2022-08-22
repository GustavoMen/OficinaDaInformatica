import React from "react";
import { useCopyToClipboard } from "usehooks-ts";

import copyIcon from "../../assets/Images/copy.svg";
import wppIcon from "../../assets/Images/wpp.svg";
import { Btn, ImageDiv, Text, Icon, LinkSocialMedia } from "./Cta.elements";

function Cta() {
  const [value, copy] = useCopyToClipboard();
  return (
    <ImageDiv>
      <Text>Entre em Contato agora mesmo!</Text>
      <Btn onClick={() => copy("35224986")}>
        <Icon src={copyIcon} alt="copiar" />
        3522-4986
      </Btn>
      <LinkSocialMedia
        target="_blank"
        href="https://wa.me/553788087079"
        rel="noreferrer"
      >
        <Btn>
          <Icon src={wppIcon} alt="whatsapp" />
          37 98808-7079
        </Btn>
      </LinkSocialMedia>
    </ImageDiv>
  );
}

export default Cta;
