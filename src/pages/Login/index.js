import React from "react";

import "./index.css";

export default function Login() {
  return (
    <div id="containerlogin">
      <div id="box">
        <h1>SERVICES</h1>
        <h1>ADS</h1>
        <p className="text1">Entre em sua conta</p>
        <div id="label">
          <label>E-mail</label>
        </div>
        <input type="email"></input>
        <div id="label2">
          <label>Senha</label>
        </div>
        <input type="password"></input>
        <button>Entrar</button>

        <div id="box2">
          <p className="text2">Não tem uma conta?</p>
          <a href="/">Crie Agora</a>
        </div>
      </div>
    </div>
  );
}
