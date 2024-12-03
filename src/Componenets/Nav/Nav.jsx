import React from "react";
import "./Nav.css";
import { IoHomeOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { LuBookPlus } from "react-icons/lu";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => {
          setActiveNav("#");
        }}
        className={activeNav === "#" && "active"}
      >
        <IoHomeOutline />
      </a>
      <a
        href="#about"
        onClick={() => {
          setActiveNav("#about");
        }}
        className={activeNav === "#about" && "active"}
      >
        <LuUser2 />
      </a>
      <a
        href="#experience"
        onClick={() => {
          setActiveNav("#experience");
        }}
        className={activeNav === "#experience" && "active"}
      >
        <LuBookPlus />
      </a>
      <a
        href="#portfolio"
        onClick={() => {
          setActiveNav("#portfolio");
        }}
        className={activeNav === "#portfolio" && "active"}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => {
          setActiveNav("#contact");
        }}
        className={activeNav === "#contact" && "active"}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
