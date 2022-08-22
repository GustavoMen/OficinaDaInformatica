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
  );
}

export default Cta;
