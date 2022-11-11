import React from "react";
import {
  HeroWrapper,
  SearchButton,
  SearchContainer,
  SearchInput,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroWrapper>
      <SearchContainer>
        <SearchInput placeholder="Filtra por categoria" />
        <SearchButton>Buscar</SearchButton>
      </SearchContainer>
    </HeroWrapper>
  );
};

export default Hero;
