import React from "react";
import styled from "styled-components";
import logoazul from "../../images/logoazul.png";
import { motion } from "framer-motion";

export const LogoImg = styled(motion.img)`
  width: 8rem;
  margin-left: 3rem;
  border-radius: 0.4rem;
`;
const Logo = () => {
  return <LogoImg src={logoazul} alt="" whileTap={{ scale: 0.95 }} />;
};

export default Logo;
