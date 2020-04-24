import React, { useState, useEffect } from "react";
import "./index.css";
import Perfil from "./imgs/img1.jpg";
import facebook from "./imgs/facebook.png";
import instagram from "./imgs/instagram.png";
import api from "../../services/api";
import EditPortfolio from "../editportfolio";



export default function Portfolio() {
  const [cards, setCards] = useState([]);
  const [portfolio, setPortfolio] = useState({
    name: '',
    sobre: '',
    email: '',
    contato: '',
    instagram: '',
    facebook: '',
  });


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


  useEffect(function () {

    let user = sessionStorage.getItem(`__USER`)


    user = JSON.parse(user)

    setPortfolio(user)


  }, [])


  return (
    <main id="portfolio">
      <article>
        <img src={Perfil} className="perfil_user" alt="Foto de Perfil"></img>
        <div className="user-dados">
          <strong> Nome: {portfolio.name}</strong>
          <span> Sobre mim: {portfolio.sobre}</span>
          <span> Email: {portfolio.email}</span>
          <span> Contato: {portfolio.contato}</span>

          <div className="box1">
            <img className="social-face" src={facebook} alt="facebook"></img>
            <span> {portfolio.facebook}</span>
            <img className="social-insta" src={instagram} alt="instagram"></img>
            <span> @{portfolio.instagram}</span>
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
                  <strong>{portfolio.name}</strong>
                </div>
              </header>
              <div className="des-item">
                <img
                  src={card.picture}
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
  );
}




