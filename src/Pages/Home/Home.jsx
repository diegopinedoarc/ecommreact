import React from "react";
import CategoriesSection from "../../Components/CategoriesSection/CategoriesSection";
import Hero from "../../Components/Hero/Hero";
import Ofertas from "../../Components/Ofertas/Ofertas";
import ProductsSection from "../../Components/ProductsSection/ProductsSection";
import { HomeWrapper } from "./HomeStyles";
import { useRef } from "react";
const Home = () => {
  const productsRef = useRef();
  const doScroll = () => {
    window.scrollTo(
      productsRef.current.getBoundingClientRect().x,
      productsRef.current.getBoundingClientRect().y
    );
  };
  return (
    <HomeWrapper>
      <Hero doScroll={doScroll} />
      <Ofertas />
      <CategoriesSection />
      <ProductsSection ref={productsRef} />
    </HomeWrapper>
  );
};

export default Home;
