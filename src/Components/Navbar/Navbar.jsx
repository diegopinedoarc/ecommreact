import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon/CartIcon";
import { NavbarWrapper } from "./NavbarStyles";
import { motion } from "framer-motion";
const Navbar = ({ open }) => {
  return (
    <NavbarWrapper open={open}>
      <motion.div>
        <Link to="login">Log In</Link>
      </motion.div>
      <motion.div>
        <Link to="contacto">Contacto</Link>
      </motion.div>
      <motion.div whileTap={{ scale: 0.92 }}>
        <Link to="#">
          <CartIcon />
        </Link>
      </motion.div>
    </NavbarWrapper>
  );
};

export default Navbar;
