import React, { useState } from "react";
import api from "../../services/api";

import "./index.css";

function Cadastro({ history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post("/auth/register", {
      name,
      email,
      password
    });

    const { _id } = response.data;

    console.log(_id);

    localStorage.setItem("user", _id);

    history.push("/login");
  }

  return (
    <div className="content-signup">
      <div className="boxsignup">
        <h1 className="title">SERVICES</h1>
        <h1 className="title">ADS</h1>

        <p className="text1">Crie sua conta</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome *</label>
          <input
            id="name"
            type="text"
            placeholder="Ex: Romulo Brasil"
            value={name}
            onChange={event => setName(event.target.value)}
          />

          <label htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            placeholder="Ex: romulo@gmail.com"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <label htmlFor="password">Senha *</label>
          <input
            id="password"
            type="password"
            placeholder="Use letras, números e caracteres especiais"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />

          <button className="btn" type="submit">
            Cadastrar
          </button>
        </form>
        <div className="box-conta">
          <p className="text-conta">Já possui conta?</p>
          <a href="/login">Entre</a>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
