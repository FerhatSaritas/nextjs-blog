import React from "react";
import Navbar from "./Navbar/Navbar.component";

export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return <Navbar />;
};

export default Header;

