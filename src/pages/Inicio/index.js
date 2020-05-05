import React, { useState, useEffect } from "react";

import api from "../../services/api";

import "./App.css";
import "./Main.css";

import BannerAnim, { Element } from "rc-banner-anim";
import TweenOne from "rc-tween-one";
const BgElement = Element.BgElement;

export default function Inicio({ img }) {
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
    <div style={{ height: 300 }}>
      <BannerAnim prefixCls="banner-user" autoPlay>
        <Element prefixCls="banner-user-elem" key="0">
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(${"https://wallpaperplay.com/walls/full/b/d/9/8131.jpg"})`,
            }}
          />
          <TweenOne
            className="banner-user-title"
            animation={{ y: 30, opacity: 0, type: "from" }}
          >
            Seja Bem Vindo
          </TweenOne>
          <TweenOne
            className="banner-user-text"
            animation={{ y: 30, opacity: 0, type: "from", delay: 100 }}
          >
            Crie sua conta e comece já !
          </TweenOne>
        </Element>
        <Element prefixCls="banner-user-elem" key="1">
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(${"https://wallpaperplay.com/walls/full/6/6/c/8130.jpg"})`,
            }}
          />
          <TweenOne
            className="banner-user-title"
            animation={{ y: 30, opacity: 0, type: "from" }}
          >
            Adicione um card com seu serviço.
          </TweenOne>
          <TweenOne
            className="banner-user-text"
            animation={{ y: 30, opacity: 0, type: "from", delay: 100 }}
          >
            Escolha o serviço que vai anúnciar.
          </TweenOne>
        </Element>
      </BannerAnim>

      <div id="app">
        {/* {JSON.stringify(cards)} */}

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
    </div>
  );
}
