import styled from "styled-components";

/// Footer //////////////////////////////

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #fff;
  margin-bottom: 20px;
  @media screen and (max-width: 996px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterItem = styled.div`
  text-align: center;

  @media screen and (max-width: 996px) {
    margin-top: 40px;
  }
`;

export const ItemTitle = styled.p`
  color: #696969;
  font-weight: bold;
  font-size: 24px;
`;

export const ItemNavigate = styled.p`
  color: #696969;
  font-weight: bold;
  font-size: 18px;
  padding-top: 15px;

  &:hover {
    color: #b72d2f;
    transform: scale(1.05);
  }
`;

export const LogoFooter = styled.img`
  height: 50px;
  margin-top: 20px;
`;

export const LinkSocialMedia = styled.a`
  text-decoration: none;
`;
