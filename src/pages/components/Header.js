import React from "react";
import { useHistory } from "react-router-dom";

import "./Header.css";

import account_circle from "../../assets/account-circle.png";
import keyboard from "../../assets/keyboard_bottom.png";

export default function Header() {
  const history = useHistory();
  return (
    <header className="main-header">
      <strong className="title-services">SERVICES ADS</strong>
      <span className="navigation">
        <span className="nav" onClick={() => history.push("/")}>
          {" "}
          Inicio{" "}
        </span>
        <span className="nav" onClick={() => history.push("/signup")}>
          {" "}
          Cadastre-se{" "}
        </span>
        <span className="nav" onClick={() => history.push("/login")}>
          {" "}
          Entrar{" "}
        </span>
        <span className="nav" onClick={() => history.push("/")}>
          Categorias
        </span>
      </span>

      <span onClick={() => history.push("/")}>
        <img src={keyboard} className="keyboard_bottom" alt="Keyboard"></img>
      </span>
      <img
        src={account_circle}
        className="account_circle"
        alt="AccountCircle"
      ></img>
    </header>
  );
}
