import React from "react";
import {
  OfertaCardButton,
  OfertaCardContainer,
  OfertaCardImg,
  OfertaCardPrice,
  OfertaCardTitle,
} from "./CardOfertasStyle";
import { formatPrice } from "../../utils/formatPrice";

const CardOfertas = ({ img, name, price, info }) => {
  return (
    <OfertaCardContainer>
      <OfertaCardTitle>{info}</OfertaCardTitle>
      <OfertaCardImg src={img} alt={name} />
      <OfertaCardPrice>{formatPrice(price)}</OfertaCardPrice>
      <OfertaCardTitle> {name} </OfertaCardTitle>
      <OfertaCardButton>Agregar</OfertaCardButton>
    </OfertaCardContainer>
  );
};

export default CardOfertas;
