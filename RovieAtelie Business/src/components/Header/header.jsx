import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="header-rotas">
      <nav>
        <ul>
          <li>
            <Link to="/Trabalhos">catálogo</Link>
          </li>
          <li>
            <Link to="/Precos">preços</Link>
          </li>
          <li>
            <Link to="/" id="link-home">
              INíCiO
            </Link>
          </li>
          <li>
            <Link to="/Sobre">sobre</Link>
          </li>
          <li>
            <Link to="/Contatos">contatos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
