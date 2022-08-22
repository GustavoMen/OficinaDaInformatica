import React from "react";
import { useCopyToClipboard } from "usehooks-ts";

import copyIcon from "../../assets/Images/copy.svg";
import wppIcon from "../../assets/Images/wpp.svg";
import { Btn, ImageDiv, Text, Icon } from "./Cta.elements";

function Cta() {
  const [value, copy] = useCopyToClipboard();
  return (
    <ImageDiv>
      <Text>Entre em Contato agora mesmo!</Text>
      <Btn onClick={() => copy("37 999999999")}>
        <Icon src={copyIcon} />
        37 999999999
      </Btn>
      <Btn>
        <Icon src={wppIcon} />
        37 999999999
      </Btn>
    </ImageDiv>
  );
}

export default Cta;
