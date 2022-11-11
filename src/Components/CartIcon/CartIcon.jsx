import React from "react";
import { LinkContainerStyled } from "./CartIconStyle";
import { BsCart } from "react-icons/bs";

const CartIcon = ({ hiddenCart, setHiddenCart }) => {
  return (
    <LinkContainerStyled onClick={() => setHiddenCart(!hiddenCart)}>
      <BsCart />
      <span>{3}</span>
    </LinkContainerStyled>
  );
};

export default CartIcon;
