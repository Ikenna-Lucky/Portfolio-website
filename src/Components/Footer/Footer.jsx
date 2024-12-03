import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Goodie
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="">
          <FaFacebook />
        </a>
        <a href="">
          <FaSquareXTwitter />
        </a>
        <a href="">
          <FaSquareInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Prim Lucky. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
