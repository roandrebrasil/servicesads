import React from "react";

import "./index.css";

export default function EditPortfolio() {
  return (
    <div>
      <div id="top">
        <h1> Editar Portfólio </h1>
      </div>
      <article id="info">
        <input id="id_name" type="text" placeholder="Nome*"></input>
        <input id="user_sobremim" type="text" placeholder="Sobre Mim*"></input>
        <input id="user_email" type="email" placeholder="E-mail*"></input>
        <input id="user_phone" type="fone" placeholder="Telefone*"></input>
        <input id="user_facebook" type="text" placeholder="Facebook*"></input>
        <input id="user_instagram" type="text" placeholder="Instagram*"></input>
      </article>
      <div id="container2">
        <div id="text">
          <label>Faça upload de uma foto do seu perfil*</label>
        </div>
        <input id="foto_perfil" type="file"></input>
        <div id="text">
          <label>Faça upload de imagens para seu portfólio*</label>
        </div>
        <input id="imgs_portfolio" type="file"></input>
      </div>
    </div>
  );
}
