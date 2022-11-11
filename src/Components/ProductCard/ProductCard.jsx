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

const ProductCard = () => {
  return (
    <CardContainer>
      <CardImg
        src="https://res.cloudinary.com/dpxe6utid/image/upload/v1668126872/drinksCo/campari_qitapq.jpg"
        alt=""
      />
      <InfoCardContainer>
        <ProductName>Campari</ProductName>
        <ProductCategory>Aperitivo</ProductCategory>
        <ProductPrice>$899</ProductPrice>
        <SmallCardContainer>
          <AddCartButton>Agregar</AddCartButton>
        </SmallCardContainer>
      </InfoCardContainer>
    </CardContainer>
  );
};

export default ProductCard;
