import styled from "styled-components";
import { motion } from "framer-motion";

export const OfertaCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: var(--blancotransp);
  border-radius: 0.5rem;
`;
export const OfertaCardImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 0.2rem;
  filter: drop-shadow(4px 4px 8px #faea10);
`;
export const OfertaCardTitle = styled.h3`
  font-size: 1rem;
  color: rgb(252, 191, 73);
`;
export const OfertaCardPrice = styled.h2``;

export const OfertaCardButton = styled(motion.button)`
  margin-top: 0.5rem;
  width: 8rem;
  height: 2.4rem;
  border-radius: 0.8rem;
  outline: none;
  border: none;
  background-color: rgb(214, 40, 40);
  color: rgb(234, 226, 183);
  font-weight: bold;
`;
