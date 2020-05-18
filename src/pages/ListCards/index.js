import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import serv1 from "../../assets/Eletricista.png";
import serv2 from "../../assets/Informática.png";
import serv3 from "../../assets/Limpeza.png";
import serv4 from "../../assets/Pedreiro.png";

export default function ListCards({ categoria }) {
  const [cards, setCards] = useState([]);
  // const [users, setUsers] = useState([]);
  useEffect(() => {
    async function loadCards() {
      const response = await api.get("/cards/tipo", {
        params: { categoria },
      });

      setCards(response.data);
      // setUsers(response.data);
    }

    loadCards();
  });

  return (
    <>
      <div className="banner">
        <div>
          <div>
            <Link to="#">
              <img alt="Eletricista" src={serv1} />
            </Link>
            <Link to="#">Eletricista</Link>
          </div>
          <div>
            <Link to="/cards/tipo?categoria=informatica">
              <img alt="Técnico em Informática" src={serv2} />
            </Link>
            <Link to="#"> Informática</Link>
          </div>
          <div>
            <Link to="#">
              <img alt="Profissional de Limpeza" src={serv3} />
            </Link>
            <Link to="#">Limpeza</Link>
          </div>
          <div>
            <Link to="#">
              <img alt="Pedreiro" src={serv4} />
            </Link>
            <Link to="#"> Pedreiro </Link>
          </div>
        </div>
      </div>
      <div className="contract_serv">
        <p>{cards.categoria}</p>
      </div>
      {/* <ul>
        {cards.map((card) => {
          return (
            <li className="serv-item">
              <header>
                <img src={users.perfil} alt="foto" />
                <div className="user-info">
                  <strong>{users.name}</strong>
                </div>
              </header>
              <div className="des-item">
                <img src={card.picture} alt="img_servico" />
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
      </ul> */}
    </>
  );
}
