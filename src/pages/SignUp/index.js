import React from "react";

import "./index.css";

export default function Cadastro() {
  return (
    <div id="containerSign">
      <div id="box">
        <h1>SERVICES</h1>
        <h1>ADS</h1>
        <p className="text1">Crie sua conta</p>
        <div id="label">
          <label>Nome</label>
          <p> Ex: Daniel Belfort </p>
        </div>
        <input type="text"></input>
        <div id="label2">
          <label>E-mail</label>
          <p> Será enviado um e-mail de confirmação </p>
        </div>
        <input type="email"></input>
        <div id="label3">
          <label>Senha</label>
          <p> Use letras, números e caracteres especiais </p>
        </div>
        <input type="password"></input>
        <button>Cadastrar</button>

        <div id="box2">
          <p className="text2">Já possui conta?</p>
          <a href="/login">Entre</a>
        </div>
      </div>
    </div>
  );
}

