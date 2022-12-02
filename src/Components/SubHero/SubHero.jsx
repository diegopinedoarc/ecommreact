import React from "react";
import { CardSubHero, InfoSubHero, SubHeroContainer } from "./SubHeroStyles";

const SubHero = () => {
  return (
    <SubHeroContainer>
      <CardSubHero>
        <InfoSubHero>Envios a todo el pais</InfoSubHero>
      </CardSubHero>
      <CardSubHero>
        <InfoSubHero>Cuotas sin interes</InfoSubHero>
      </CardSubHero>
    </SubHeroContainer>
  );
};

export default SubHero;
