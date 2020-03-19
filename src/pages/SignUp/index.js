import React, { useState } from "react";
import api from "../../services/api";

import "./index.css";

export default function Cadastro() {
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
    console.log(response.data);
    const { _id } = response.data;

    localStorage.setItem("user", _id);
  }

  return (
    <div id="containerSign">
      <div id="box">
        <h1>SERVICES</h1>
        <h1>ADS</h1>
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

          <button type="submit">Cadastrar</button>
        </form>

        <div id="box2">
          <p className="text2">Já possui conta?</p>
          <a href="/login">Entre</a>
        </div>
      </div>
    </div>
  );
}

