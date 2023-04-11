import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/" contenido="Home" className="enlace enlace1">Home</Link>
          </li>
          <li>
            <Link to="/botones" contenido="Botones" className="enlace1">Botones</Link>
          </li>
          <li>
            <Link to="/avatares" contenido="Avatares" className="enlace">Avatares</Link>
          </li>
          <li>
            <Link to="/selects" contenido="Selects" className="enlace1">Selects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
