import React from "react";

import Logo from "../../assets/Images/LogoFooter.png";
import {
  FooterContainer,
  FooterItem,
  ItemTitle,
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
        <ItemContact>
          Segunda a Sexta-feira 09h às 18h, Sabado 08h ás 12h
        </ItemContact>
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
          <ItemNavigate>Insagram</ItemNavigate>
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
        <ItemTitle>Navegue por aqui</ItemTitle>
        <PageLinks to="systems">
          <ItemNavigate>Sistemas</ItemNavigate>
        </PageLinks>
        <PageLinks to="services">
          <ItemNavigate>Serviços</ItemNavigate>
        </PageLinks>
        <PageLinks to="location">
          <ItemNavigate>Locação</ItemNavigate>
        </PageLinks>
        <PageLinks to="products">
          <ItemNavigate>Produtos</ItemNavigate>
        </PageLinks>
      </FooterItem>
    </FooterContainer>
  );
}

export default Footer;
