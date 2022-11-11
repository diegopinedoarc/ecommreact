import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { ProductsContainer } from "./ProductsSectionStyle";

const ProductsSection = () => {
  return (
    <ProductsContainer>
      <ProductCard />
    </ProductsContainer>
  );
};

export default ProductsSection;
