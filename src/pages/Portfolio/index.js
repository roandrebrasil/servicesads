import React from "react";
import "./index.css";
import Perfil from "./imgs/img1.jpg";
import facebook from "./imgs/facebook.png";
import instagram from "./imgs/instagram.png";

export default function Portfolio() {
  return (
    <main id="portfolio">
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
