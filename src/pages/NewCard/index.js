import React from "react";

import "./index.css";

export default function Newcard() {
  return (
    <div>
      <div id="topo">
        <h1> Qual serviço você oferece?</h1>
      </div>
      <div id="container">
        <input
          id="service_name"
          type="text"
          placeholder="Nome do seu serviço/trabalho*"
        ></input>
        <input
          id="desc_service"
          type="text"
          placeholder="Descrição do serviço*"
        ></input>
        <form>
          <select>
            <option>Categoria*</option>
            <option value="jardinagem">Jardinagem</option>
            <option value="encanador">Encanador</option>
            <option value="eletricista">Eletricista</option>
            <option value="limpeza">Limpeza Geral</option>
          </select>
        </form>
      </div>
      <div id="container2">
        <div id="text">
          <label>Localização*</label>
        </div>
        <input id="cep" type="number" placeholder="CEP*"></input>
        <input id="telefone" type="number" placeholder="Telefone*"></input>
        <div id="text">
          <label>Faça upload de uma foto do serviço*</label>
        </div>
        <input id="foto_service" type="file"></input>
      </div>
    </div>
  );
}
