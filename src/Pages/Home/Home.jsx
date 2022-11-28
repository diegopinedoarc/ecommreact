import React from "react";
import CategoriesSection from "../../Components/CategoriesSection/CategoriesSection";
import Hero from "../../Components/Hero/Hero";
import Ofertas from "../../Components/Ofertas/Ofertas";
import ProductsSection from "../../Components/ProductsSection/ProductsSection";
import { HomeWrapper, ProdContainerRef } from "./HomeStyles";
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
      <ProdContainerRef ref={productsRef}>
        <ProductsSection />
      </ProdContainerRef>
    </HomeWrapper>
  );
};

export default Home;
