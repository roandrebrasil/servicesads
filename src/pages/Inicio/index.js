import React from "react";

import "./App.css";
import "./Sidebar.css";
import "./Banner.css";
import "./Main.css";

import baseline_menu from "./baseline_menu.png";
import account_circle from "./account-circle.png";
import keyboard from "./keyboard_bottom.png";

export default function Inicio() {
  return (
    <div id="app">
      <div className="Sidebar">
        <img src={baseline_menu} id="baseline_menu" alt="Menu"></img>
        <strong>SERVICES ADS</strong>
        <input
          type="search"
          title="search"
          id="Search"
          placeholder="Pesquise um serviço..."
        ></input>
        <label>Categorias</label>
        <img src={keyboard} id="keyboard_bottom" alt="Keyboard"></img>
        <img src={account_circle} id="account_circle" alt="AccountCircle"></img>
      </div>
      <div id="banner">
        <p>ANÚNCIE SEU SERVIÇO GRATUITAMENTE.</p>
        <p>ENCONTRE OS SERVIÇOS QUE DESEJA, PERTO DE VOCÊ.</p>
      </div>

      <main>
        <ul>
          <li className="serv-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/50125514?s=460&v=4"
                alt="Rômulo Brasil"
              />
              <div className="user-info">
                <strong>Rômulo Brasil</strong>
              </div>
            </header>
            <div className="des-item">
              <img
                src="https://www.encontrajardimangela.com.br/wp-content/uploads/2019/07/eletricista-encontra-1562855951.jpg"
                alt="Eletricista"
              />
              <h4>Desenvolvedor Frontend</h4>
              <span>
                Trabalho no ramo de batata doce, possuo curso técnico e faço
                instalações em residências.
              </span>
              <a href="/">Portfólio</a>
              <a href="/">Contatos</a>
            </div>
          </li>

          <li className="serv-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/50125514?s=460&v=4"
                alt="Rômulo Brasil"
              />
              <div className="user-info">
                <strong>Rômulo Brasil</strong>
              </div>
            </header>
            <div className="des-item">
              <img
                src="https://www.encontrajardimangela.com.br/wp-content/uploads/2019/07/eletricista-encontra-1562855951.jpg"
                alt="Eletricista"
              />
              <h4>Desenvolvedor Frontend</h4>
              <span>
                Trabalho no ramo de batata doce, possuo curso técnico e faço
                instalações em residências.
              </span>
              <a href="/">Portfólio</a>
              <a href="/">Contatos</a>
            </div>
          </li>
          <li className="serv-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/50125514?s=460&v=4"
                alt="Rômulo Brasil"
              />
              <div className="user-info">
                <strong>Rômulo Brasil</strong>
              </div>
            </header>
            <div className="des-item">
              <img
                src="https://www.encontrajardimangela.com.br/wp-content/uploads/2019/07/eletricista-encontra-1562855951.jpg"
                alt="Eletricista"
              />
              <h4>Desenvolvedor Frontend</h4>
              <span>
                Trabalho no ramo de batata doce, possuo curso técnico e faço
                instalações em residências.
              </span>
              <a href="/">Portfólio</a>
              <a href="/">Contatos</a>
            </div>
          </li>
          <li className="serv-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/50125514?s=460&v=4"
                alt="Rômulo Brasil"
              />
              <div className="user-info">
                <strong>Rômulo Brasil</strong>
              </div>
            </header>
            <div className="des-item">
              <img
                src="https://www.encontrajardimangela.com.br/wp-content/uploads/2019/07/eletricista-encontra-1562855951.jpg"
                alt="Eletricista"
              />
              <h4>Desenvolvedor Frontend</h4>
              <span>
                Trabalho no ramo de batata doce, possuo curso técnico e faço
                instalações em residências.
              </span>
              <a href="/">Portfólio</a>
              <a href="/">Contatos</a>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
}