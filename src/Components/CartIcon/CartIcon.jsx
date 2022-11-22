import React from "react";
import { LinkContainerStyled } from "./CartIconStyle";
import { BsCart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../redux/cart/cart-actions";

const CartIcon = () => {
  const totalCartItems = useSelector((state) => state.cart.cartItems).reduce(
    (acc, item) => (acc += item.quantity),
    0
  );
  const dispatch = useDispatch();
  return (
    <LinkContainerStyled
      onClick={() => dispatch(cartActions.toggleHiddenCart())}
    >
      <BsCart />
      <span>{totalCartItems}</span>
    </LinkContainerStyled>
  );
};

export default CartIcon;
