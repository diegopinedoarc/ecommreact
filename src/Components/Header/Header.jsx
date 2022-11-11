import React, { useState } from "react";
import { HeaderWrapper } from "../Header/HeaderStyles";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import MenuButton from "../MenuButton/MenuButton";
import Logo from "../Logo/Logo";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <HeaderWrapper>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <Navbar open={open} />
      <MenuButton open={open} handleClick={handleClick} />
    </HeaderWrapper>
  );
};

export default Header;
