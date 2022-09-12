import React from "react";

import Logo from "../../assets/Images/LogoFooter.png";
import {
  FooterContainer,
  FooterItem,
  ItemTitle,
  ItemTitle2,
  ItemNavigate,
  LogoFooter,
  LinkSocialMedia,
  ItemContact,
  PageLinks,
} from "./Footer.elements";

function Footer() {
  return (
    <FooterContainer>
      <FooterItem>
        <ItemTitle>Contato:</ItemTitle>
        <ItemContact>oficina.acp@gmail.com</ItemContact>
        <ItemContact>Praça Altino Teodoro 06, Centro</ItemContact>
        <ItemContact>3522-4986</ItemContact>
        <ItemContact>37 98808-7079</ItemContact>
      </FooterItem>
      <FooterItem>
        <ItemTitle>Redes Sociais</ItemTitle>
        <LinkSocialMedia
          target="_blank"
          href="https://wa.me/553788087079"
          rel="noreferrer"
        >
          <ItemNavigate>Whatsapp</ItemNavigate>
        </LinkSocialMedia>
        <LinkSocialMedia
          target="_blank"
          href="https://www.instagram.com/oficinadainformatica_bd/"
          rel="noreferrer"
        >
          <ItemNavigate>Instagram</ItemNavigate>
        </LinkSocialMedia>

        <LinkSocialMedia
          target="_blank"
          href="https://www.facebook.com/oficinadainformatica.com.br"
          rel="noreferrer"
        >
          <ItemNavigate>Facebook</ItemNavigate>
        </LinkSocialMedia>
        <LogoFooter src={Logo} alt="Logo" />
      </FooterItem>

      <FooterItem>
        <ItemTitle>Horario de funcionamento</ItemTitle>
        <ItemContact>
          Segunda a Sexta-feira 08h às 18h, Sabado 08h ás 12h
        </ItemContact>
        <ItemTitle2>Endereço</ItemTitle2>
        <ItemContact>Praça Altino Teodoro 06, Centro</ItemContact>
        <ItemContact>Bom Despacho MG</ItemContact>
      </FooterItem>
    </FooterContainer>
  );
}

export default Footer;
