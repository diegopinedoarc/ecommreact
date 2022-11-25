import React from "react";
import {
  AddCartButton,
  CardContainer,
  CardImg,
  InfoCardContainer,
  ProductCategory,
  ProductName,
  ProductPrice,
  SmallCardContainer,
} from "./ProductCardStyle";
import { formatPrice } from "../../utils/formatPrice";
import { useDispatch } from "react-redux";
import * as cartActions from "../../redux/cart/cart-actions";

const ProductCard = ({ img, id, price, category, name }) => {
  const dispatch = useDispatch();
  return (
    <CardContainer>
      <SmallCardContainer>
        <CardImg src={img} alt={name} />
        <InfoCardContainer>
          <ProductName> {name} </ProductName>
          <ProductCategory> {category} </ProductCategory>
          <ProductPrice> {formatPrice(price)} </ProductPrice>
        </InfoCardContainer>
      </SmallCardContainer>
      <AddCartButton
        onClick={() =>
          dispatch(cartActions.addToCart({ img, name, id, price }))
        }
        whileTap={{ scale: 0.95 }}
      >
        Agregar
      </AddCartButton>
    </CardContainer>
  );
};

export default ProductCard;
