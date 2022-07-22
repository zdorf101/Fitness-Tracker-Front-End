import React from "react";
import {
  NavWrapper,
  Welcome,
  IconWrapper,
  TitleWrapper,
  Station,
} from "./NavbarElements";
import { MenuIcon } from "@heroicons/react/outline";
function Navbar({ onOpen }) {
  return (
    <NavWrapper>
      <IconWrapper onClick={onOpen}>
        <MenuIcon height="35px" color="#fff" />
      </IconWrapper>
      <TitleWrapper>
        <Welcome>Welcome to </Welcome>
        <Station>FitnessTrackr</Station>
      </TitleWrapper>
    </NavWrapper>
  );
}

export default Navbar;
