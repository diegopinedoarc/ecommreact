import React from "react";
import {
  OfertaCardButton,
  OfertaCardContainer,
  OfertaCardImg,
  OfertaCardPrice,
  OfertaCardTitle,
} from "./CardOfertasStyle";
import { formatPrice } from "../../utils/formatPrice";
import * as cartActions from "../../redux/cart/cart-actions";
import { useDispatch } from "react-redux";

const CardOfertas = ({ img, name, price, info, id }) => {
  const dispatch = useDispatch();
  return (
    <OfertaCardContainer>
      <OfertaCardTitle>{info}</OfertaCardTitle>
      <OfertaCardImg src={img} alt={name} />
      <OfertaCardPrice>{formatPrice(price)}</OfertaCardPrice>
      <OfertaCardTitle> {name} </OfertaCardTitle>
      <OfertaCardButton
        onClick={() =>
          dispatch(cartActions.addToCart({ img, name, price, id }))
        }
      >
        Agregar
      </OfertaCardButton>
    </OfertaCardContainer>
  );
};

export default CardOfertas;
