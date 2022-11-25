import styled from "styled-components";
import { motion } from "framer-motion";

export const ButtonSubmitStyled = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  color: black;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  margin-top: 15px;
  background-color: var(--azultransp);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: red;
  }
`;
