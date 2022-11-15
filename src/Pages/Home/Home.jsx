import React from "react";
import CategoriesSection from "../../Components/CategoriesSection/CategoriesSection";
import Hero from "../../Components/Hero/Hero";
import Ofertas from "../../Components/Ofertas/Ofertas";
import ProductsSection from "../../Components/ProductsSection/ProductsSection";
import { HomeWrapper } from "./HomeStyles";

const Home = () => {
  return (
    <HomeWrapper>
      <Hero />
      <Ofertas />
      <CategoriesSection />
      <ProductsSection />
    </HomeWrapper>
  );
};

export default Home;
