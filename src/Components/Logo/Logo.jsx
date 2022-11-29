import React from "react";
import styled from "styled-components";
import logo3 from "../../images/logo3.png";
import { motion } from "framer-motion";

export const LogoImg = styled(motion.img)`
  width: 8rem;
  margin-left: 3rem;
  border-radius: 0.4rem;
  box-shadow: 2px 4px 8px 2px var(--blanco);
`;
const Logo = () => {
  return <LogoImg src={logo3} alt="" whileTap={{ scale: 0.95 }} />;
};

export default Logo;
