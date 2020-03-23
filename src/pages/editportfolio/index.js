import React, { useState, useEffect } from "react";
import api from "../../services/api";

import "./index.css";

function EditPortfolio() {
  const [name, setName] = useState("");
  const [sobre, setSobre] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function loadPortfolio() {
      const user_id = localStorage.getItem("user");
      const response = await api.get("/auth/updateuser", {
        headers: { user_id }
      });

      setName(response.data);
      setEmail(response.data);
      setSobre(response.data);
    }

    loadPortfolio();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post("/auth/updateuser00", {
      name,
      sobre,
      email
    });

    const { _id } = response.data;

    console.log(_id);
  }

  return (
    <>
      <div id="top">
        <h1> Editar Portfólio </h1>
      </div>
      <form id="info" onSubmit={handleSubmit}>
        <input
          id="name"
          type="text"
          placeholder="Nome*"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <input
          id="sobre"
          type="text"
          placeholder="Sobre Mim*"
          value={sobre}
          onChange={event => setSobre(event.target.value)}
        />
        <input
          id="email"
          type="email"
          placeholder="E-mail*"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <input id="user_phone" type="fone" placeholder="Telefone*"></input>
        <input id="user_facebook" type="text" placeholder="Facebook*"></input>
        <input id="user_instagram" type="text" placeholder="Instagram*"></input>
        <button className="att" type="submit">
          Atualizar
        </button>
      </form>
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
    </>
  );
}

export default EditPortfolio;
