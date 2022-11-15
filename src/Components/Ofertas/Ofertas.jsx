import React from "react";
import { useSelector } from "react-redux";
import { OfertasContainer } from "./OfertasStyle";
import CardOfertas from "./CardOfertas";

const Ofertas = () => {
  const ofertas = useSelector((state) => state.ofertas.ofertas);
  return (
    <OfertasContainer>
      {ofertas.map((oferta) => (
        <CardOfertas key={oferta.id} {...oferta} />
      ))}
    </OfertasContainer>
  );
};

export default Ofertas;
