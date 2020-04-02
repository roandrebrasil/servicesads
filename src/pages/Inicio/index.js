import React, { useState, useEffect } from "react";

import api from "../../services/api";

import "./App.css";
import "./Banner.css";
import "./Main.css";
import Cadastro from "../SignUp";

export default function Inicio() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api.get("/cards/card", {
          headers: {
            authorization: `Bearer ${sessionStorage.getItem(`__TOKEN`)}`
          }
        });
        const { cards } = response.data;
        if (cards) {
          setCards(cards);
        }
      } catch (e) {
        alert(`Erro ao tentar obter dados do servidor.`);
      }
    };
    fetch();
  }, []);

  return (
    <div id="app">
      {/* {JSON.stringify(cards)} */}
      <div id="banner">
        <p>ANÚNCIE SEU SERVIÇO GRATUITAMENTE.</p>
        <p>ENCONTRE OS SERVIÇOS QUE DESEJA, PERTO DE VOCÊ.</p>
      </div>

      <main>
        <ul>
          {cards.map(card => {
            return (
              <li className="serv-item">
                <header>
                  <img
                    src="https://avatars3.githubusercontent.com/u/50125514?s=460&v=4"
                    alt="Rômulo Brasil"
                  />
                  <div className="user-info">
                    <strong>NOME_USUARIO</strong>
                  </div>
                </header>
                <div className="des-item">
                  <img
                    src="https://www.encontrajardimangela.com.br/wp-content/uploads/2019/07/eletricista-encontra-1562855951.jpg"
                    alt="Eletricista"
                  />
                  <h4>{card.name}</h4>
                  <span>{card.description}</span>
                  <a href="/portfolio">Ver mais</a>
                  <a href="/portfolio" style={{ margin: 0 }}>
                    {card.phone.replace(
                      /\(*([0-9]{2})\)*\s{0,1}([0-9]{4,5})-{0,1}([0-9]{4})/,
                      "($1) $2-$3"
                    )}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
