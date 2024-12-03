import React, { useState } from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
// import { FaBars } from "react-icons/fa";
// import { Link } from "react-router-dom";

const Header = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // function navToggle() {
  //   setIsMenuOpen(!isMenuOpen);
  // }
  return (
    <header>
      {/* <FaBars onClick={navToggle} />
     {isMenuOpen && <div>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
          <li><Link to="/ranger">Ranger</Link></li>
        </ul>
      </div>
      } */}
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mbaekwe Ikenna</h1>
        <h5 className="text-light">Fullstack developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
