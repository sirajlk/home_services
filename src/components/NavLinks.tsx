import React from "react";
import { Link, useLocation } from "react-router-dom";

type IProps = {
  activeClass: string;
  hoverClass: string;
  defaultClass?: string;
  onNavClick?: () => void;
};

const NavLinks = (props: IProps) => {
  const { activeClass, hoverClass, defaultClass, onNavClick } = props;
  const pathname = useLocation().pathname;
  const activeLink = (name: string) => {
    return pathname === name ? activeClass : "";
  };

  return (
    <>
      <Link
        to="/"
        className={`no-underline text-inherit ${hoverClass} ${defaultClass} transition ${activeLink(
          "/"
        )}`}
        onClick={onNavClick}
      >
        Home
      </Link>

      <Link
        to="/about"
        className={`no-underline text-inherit ${hoverClass} ${defaultClass} transition ${activeLink(
          "/about"
        )}`}
        onClick={onNavClick}
      >
        About
      </Link>

      <Link
        to="/services"
        className={`no-underline text-inherit ${hoverClass} ${defaultClass} transition ${activeLink(
          "/services"
        )}`}
        onClick={onNavClick}
      >
        Services
      </Link>

      <Link
        to="/contact"
        className={`no-underline text-inherit ${hoverClass} ${defaultClass} transition ${activeLink(
          "/contact"
        )}`}
        onClick={onNavClick}
      >
        Contact Us
      </Link>
    </>
  );
};

export default NavLinks;
