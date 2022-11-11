import React from "react";
import CategoriesSection from "../../Components/CategoriesSection/CategoriesSection";
import Hero from "../../Components/Hero/Hero";
import ProductsSection from "../../Components/ProductsSection/ProductsSection";
import { HomeWrapper } from "./HomeStyles";

const Home = () => {
  return (
    <HomeWrapper>
      <Hero />
      <CategoriesSection />
      <ProductsSection />
    </HomeWrapper>
  );
};

export default Home;
