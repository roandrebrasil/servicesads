import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import account_circle from "../../assets/account-circle.png";

export default function Header() {
  return (
    <div className="navbar">
      <strong>SERVICES ADS</strong>
      <Link to="/">Inicio</Link>
      <Link to="/signup">Cadastre-se</Link>
      <Link to="/login">Entrar</Link>

      <div>
        <nav className="menu">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li>
              <Link to="#">Categorias</Link>
              <ul>
                <li>
                  <Link to="#">Profissional de limpeza</Link>
                </li>
                <li>
                  <Link to="#">Técnico eletricista</Link>
                </li>
                <li>
                  <Link to="#">Técnico de informática</Link>
                </li>
                <li>
                  <Link to="#">Pedreiro</Link>
                </li>
              </ul>
            </li>
            <li>
              <img src={account_circle} alt="Menu" />
              <ul>
                <li>
                  {" "}
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/editportfolio">Editar Portfolio</Link>{" "}
                </li>
                <li>
                  <Link to="/newcard">Adicionar Card</Link>
                </li>
                <li>
                  <Link to="#">Sair</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
