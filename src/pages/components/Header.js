import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import baseline_menu from "../../assets/baseline_menu.png";
import account_circle from "../../assets/account-circle.png";
import keyboard from "../../assets/keyboard_bottom.png";

export default function Header() {
  return (
    <header id="main-header">
      <Link to="/">
        <img src={baseline_menu} id="baseline_menu" alt="Menu"></img>
      </Link>
      <strong>SERVICES ADS</strong>
      <input
        type="search"
        title="search"
        className="Search"
        placeholder="Pesquise um serviço..."
      ></input>
      <label className="categorias">Categorias</label>
      <Link to="/login">
        <img src={keyboard} id="keyboard_bottom" alt="Keyboard"></img>
      </Link>
      <img src={account_circle} id="account_circle" alt="AccountCircle"></img>
    </header>
  );
}
