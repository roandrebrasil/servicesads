import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./index.css";
import Perfil from "./imgs/img1.jpg";
import facebook from "./imgs/facebook.png";
import instagram from "./imgs/instagram.png";

export default function Portfolio() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api.get("/cards/card", {
          headers: {
            authorization: `Bearer ${localStorage.getItem(`__TOKEN`)}`
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
    <main id="portfolio">
      {JSON.stringify(cards)}
      <article>
        <img src={Perfil} className="perfil_user" alt="Foto de Perfil"></img>
        <div className="user-dados">
          <strong> Marcelo Alberto </strong>
          <span> Sobre mim:</span>
          <span> Email:</span>
          <span> Contato:</span>

          <div className="box1">
            <img className="social-face" src={facebook} alt="facebook"></img>
            <span> Marcelo_Alberto</span>
            <img className="social-insta" src={instagram} alt="instagram"></img>
            <span> @marceloalberto01</span>
          </div>
        </div>
      </article>
      <article className="submenu-imagens">
        <p>IMAGENS</p>
      </article>
      <article className="submenu-videos">
        <p>VIDEOS</p>
      </article>
      <article className="submenu-cards">
        <p>SERVIÇO</p>
      </article>
    </main>
  );
}
