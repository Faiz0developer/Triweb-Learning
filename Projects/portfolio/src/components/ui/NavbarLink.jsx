import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLink = ({ onChangeVisivility, to, className, navData }) => {
  return (
    <li onClick={onChangeVisivility}>
      <NavLink to={to} className={className}>
        <span>{navData} </span>
      </NavLink>
    </li>
  );
};

export default NavbarLink;
