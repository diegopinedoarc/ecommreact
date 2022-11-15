import React from "react";
import {
  OfertaCardContainer,
  OfertaCardImg,
  OfertaCardPrice,
  OfertaCardTitle,
} from "./CardOfertasStyle";
import { formatPrice } from "../../utils/formatPrice";

const CardOfertas = ({ img, name, price }) => {
  return (
    <OfertaCardContainer>
      <OfertaCardImg src={img} alt={name} />
      <OfertaCardPrice>{formatPrice(price)}</OfertaCardPrice>
      <OfertaCardTitle> {name} </OfertaCardTitle>
    </OfertaCardContainer>
  );
};

export default CardOfertas;
