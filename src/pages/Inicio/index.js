import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import "./App.css";
import "./Main.css";
//import Cadastro from "../SignUp";

import serv from "../../assets/servicos.png";
import serv1 from "../../assets/Carroceiro.png";
import serv2 from "../../assets/Eletricista.png";
import serv3 from "../../assets/Encanador.png";
import serv4 from "../../assets/Esteticista.png";
import serv5 from "../../assets/Informática.png";
import serv6 from "../../assets/Limpeza.png";
import serv7 from "../../assets/Pedreiro.png";
import serv8 from "../../assets/Pintor.png";

export default function Inicio() {
  const [cards, setCards] = useState([]);
  const [portfolio, setPortfolio] = useState({
    name: "",
  });

  useEffect(() => {
    let user = sessionStorage.getItem("__USER");

    user = JSON.parse(user);

    setPortfolio(user);

    const fetch = async () => {
      try {
        const response = await api.get("/cards/card", {
          headers: {
            authorization: `Bearer ${sessionStorage.getItem(`__TOKEN`)}`,
          },
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
      <div className="banner">
        <div>
          <div>
            <Link to="#">
              <img alt="Carroceiro" src={serv1} />
            </Link>
            <Link to="#">Carroceiro</Link>
          </div>
          <div>
            <Link to="#">
              <img alt="Eletricista" src={serv2} />
            </Link>
            <Link to="#">Eletricista</Link>
          </div>
          <div>
            <Link to="#">
              <img alt="Encanador" src={serv3} />
            </Link>
            <Link to="#">Encanador</Link>
          </div>
          <div>
            <Link to="#">
              <img alt="Esteticista" src={serv4} />
            </Link>
            <Link to="#">Esteticista</Link>
          </div>
          <div>
            <Link to="#">
              <img alt="Técnico em Informática" src={serv5} />
            </Link>
            <Link to="#"> Informática</Link>
          </div>
          <div>
            <Link to="#">
              <img alt="Profissional de Limpeza" src={serv6} />
            </Link>
            <Link to="#">Limpeza</Link>
          </div>
          <div>
            <Link to="#">
              <img alt="Pedreiro" src={serv7} />
            </Link>
            <Link to="#"> Pedreiro </Link>
          </div>
          <div>
            <Link to="#">
              <img alt="Pintor" src={serv8} />
            </Link>
            <Link to="#"> Pintor </Link>
          </div>
        </div>
      </div>
      <div className="contract_serv">
        <img alt="serviços" src={serv} />
        <p>Plataforma Digital para contratação de serviços essenciais !</p>
      </div>

      <main>
        <ul>
          {cards.map((card) => {
            return (
              <li className="serv-item">
                <header>
                  <img
                    src="https://avatars3.githubusercontent.com/u/50125514?s=460&v=4"
                    alt="Rômulo Brasil"
                  />
                  <div className="user-info">
                    <strong>{portfolio.name}</strong>
                  </div>
                </header>
                <div className="des-item">
                  <img src={card.picture} alt="Eletricista" />
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
