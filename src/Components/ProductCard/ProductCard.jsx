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

const ProductCard = ({ img, title, price, category, name }) => {
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
      <AddCartButton>Agregar</AddCartButton>
    </CardContainer>
  );
};

export default ProductCard;
