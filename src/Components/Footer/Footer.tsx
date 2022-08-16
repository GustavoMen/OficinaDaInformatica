import React from "react";

import Logo from "../../assets/Images/LogoFooter.png";
import {
  FooterContainer,
  FooterItem,
  ItemTitle,
  ItemNavigate,
  LogoFooter,
  LinkSocialMedia,
} from "./Footer.elements";

function Footer() {
  return (
    <FooterContainer>
      <FooterItem>
        <ItemTitle>Contato:</ItemTitle>
        <ItemNavigate>37 999999999</ItemNavigate>
        <ItemNavigate>Fale com a gente!</ItemNavigate>
        <ItemNavigate>
          Segunda a Sexta-feira 09h às 18h, Sabado 08h ás 12h
        </ItemNavigate>
      </FooterItem>
      <FooterItem>
        <ItemTitle>Redes Sociais</ItemTitle>
        <LinkSocialMedia
          target="_blank"
          href="https://instagram.com/"
          rel="noreferrer"
        >
          <ItemNavigate>Insagram</ItemNavigate>
        </LinkSocialMedia>

        <ItemNavigate>Facebook</ItemNavigate>
        <LogoFooter src={Logo} />
      </FooterItem>

      <FooterItem>
        <ItemTitle>Navegue por aqui</ItemTitle>
        <ItemNavigate>Sistemas</ItemNavigate>
        <ItemNavigate>Serviços</ItemNavigate>
        <ItemNavigate>Locação</ItemNavigate>
        <ItemNavigate>Produtos</ItemNavigate>
      </FooterItem>
    </FooterContainer>
  );
}

export default Footer;
