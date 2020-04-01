import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import account_circle from "../../assets/account-circle.png";
import keyboard from "../../assets/keyboard_bottom.png";

export default function Header() {
  return (
    <header className="main-header">
      <strong className="title-services">SERVICES ADS</strong>
      <form className="navigation">
        <Link className="nav" to="/">
          {" "}
          Inicio{" "}
        </Link>
        <Link className="nav" to="/signup">
          {" "}
          Cadastre-se{" "}
        </Link>
        <Link className="nav" to="/login">
          {" "}
          Entrar{" "}
        </Link>
        <Link className="nav" to="/">
          Categorias
        </Link>
      </form>

      <Link to="/">
        <img src={keyboard} className="keyboard_bottom" alt="Keyboard"></img>
      </Link>
      <img
        src={account_circle}
        className="account_circle"
        alt="AccountCircle"
      ></img>
    </header>
  );
}
