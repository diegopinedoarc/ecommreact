import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../CartIcon/CartIcon";
import { NavbarWrapper } from "./NavbarStyles";
import { motion } from "framer-motion";
import { AiFillHome } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import CartModal from "../CartModal/CartModal";
const Navbar = ({ open }) => {
  return (
    <NavbarWrapper open={open}>
      <CartModal />
      <motion.div whileTap={{ scale: 0.92 }}>
        <Link to="./">
          <AiFillHome />
        </Link>
      </motion.div>
      <motion.div whileTap={{ scale: 0.92 }}>
        <Link to="login">
          <BiLogIn />
          <FiUser />
        </Link>
      </motion.div>
      <motion.div whileTap={{ scale: 0.92 }}>
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
