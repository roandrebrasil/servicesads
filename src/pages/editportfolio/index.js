import React, { useState } from "react";
import api from "../../services/api";

import "./index.css";

function EditPortfolio() {
  const [name, setName] = useState("");
  const [sobre, setSobre] = useState("");
  const [email, setEmail] = useState("");
  const [contato, setContato] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [portfolio, setPotfolio] = useState([]);
  const [perfil, setPerfil] = useState("");

  const transformBase64 = (file, callback) =>
    new Promise((resolve, reject) => {
      var reader = new FileReader();
      var baseString;
      reader.onloadend = function () {
        baseString = reader.result;
        callback(baseString)
        console.log(baseString)

        resolve(baseString);
      };
      reader.readAsDataURL(file);
    })

  const appendPortfolio = (img) => {
    let port = portfolio
    port.push(img)
    setPotfolio(port)
  }

  const setPortfolioFileList = event => {
    setPotfolio([]);
    [...event.target.files].map(file => transformBase64(file, appendPortfolio))
    console.log(portfolio);

  }


  async function handleSubmit(event) {
    event.preventDefault();


    const response = await api.put("/auth/updateuser", {
      name,
      sobre,
      email,
      contato,
      facebook,
      instagram,
      perfil,
      portfolio
    }, {
      headers: {
        authorization: `Bearer ${sessionStorage.getItem(`__TOKEN`)}`
      }
    );

    console.log(response);

    const user = response.data;
    sessionStorage.setItem("__USER", JSON.stringify(user));
    window.location.href = window.location.origin; // manda o usuario para tela de inicio
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
          onChange={(event) => setName(event.target.value)}
        />
        <input
          id="sobre"
          type="text"
          placeholder="Sobre Mim*"
          value={sobre}
          onChange={(event) => setSobre(event.target.value)}
        />
        <input
          id="email"
          type="email"
          placeholder="E-mail*"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          id="contato"
          type="fone"
          placeholder="Telefone*"
          value={contato}
          onChange={(event) => setContato(event.target.value)}
        />
        <input
          id="facebook"
          type="text"
          placeholder="Facebook*"
          value={facebook}
          onChange={(event) => setFacebook(event.target.value)}
        />
        <input
          id="user_instagram"
          type="text"
          placeholder="Instagram*"
          value={instagram}
          onChange={(event) => setInstagram(event.target.value)}
        />
        <button className="att" type="submit">
          Atualizar
        </button>
      </form>
      <div id="container2">
        <div id="text">
          <label>Faça upload de uma foto do seu perfil*</label>
        </div>
        <input id="foto_perfil" type="file" onChange={event => transformBase64(event.target.files[0], setPerfil)}></input>
        <div id="text">
          <label>Faça upload de imagens para seu portfólio*</label>
        </div>
        <input id="imgs_portfolio" type="file" multiple onChange={setPortfolioFileList}></input>
      </div>
    </>
  );
}

export default EditPortfolio;
