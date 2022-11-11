import React from "react";
import { Link } from "react-router-dom";
import { FooterContainerStyled, LinksContainerStyled } from "./FooterStyles";
const Footer = () => {
  return (
    <FooterContainerStyled>
      <LinksContainerStyled className="links">
        <Link to="/" style={{}}>
          Términos de Uso
        </Link>
        <Link to="/" style={{}}>
          Soporte
        </Link>
      </LinksContainerStyled>
      <p>Realizado por Diego Pinedo - 2022</p>
    </FooterContainerStyled>
  );
};

export default Footer;
