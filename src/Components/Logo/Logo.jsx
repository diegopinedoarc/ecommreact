import React from "react";
import styled from "styled-components";
import logo2 from "../../images/logo2.png";

export const LogoImg = styled.img`
  width: 8rem;
  margin-left: 3rem;
`;
const Logo = () => {
  return <LogoImg src={logo2} alt="" />;
};

export default Logo;
