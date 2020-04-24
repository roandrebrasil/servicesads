import React, { useState } from "react";
import api from "../../services/api"; // api criada para receber o local que o host esta alocado
import "./index.css";

export default function Newcard() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categoria, setCategoria] = useState("");
  const [cep, setCep] = useState("");
  const [phone, setPhone] = useState("");
  const [picture, setPicture] = useState("");

  const transformBase64 = file =>
    new Promise((resolve, reject) => {
      var reader = new FileReader();
      var baseString;
      reader.onloadend = function () {
        baseString = reader.result;
        setPicture(baseString)
        console.log(baseString)

        resolve(baseString);
      };
      reader.readAsDataURL(file);
    })




  const handleSubmit = async event => {
    event.preventDefault();
    event.stopPropagation();


    try {
      const response = await api.post(
        "/cards",
        {
          name,
          description,
          categoria,
          cep: cep.replace(/\.|-/g, ""),
          phone,
          picture
        },
        {
          headers: {
            authorization: `Bearer ${sessionStorage.getItem("__TOKEN")}`
          }
        }
      );
      const { cards, message } = response.data;
      if (cards) {
        alert(`Novo card adicionado.`);
      }
      if (message) {
        alert(message);
      }
    } catch (e) {
      alert("Erro ao cadastrar dados.");
    }
  };

  return (
    // form name, description, categoria, cep, phone -> para poder testar se as varias estao sendo lidas. Depois retirar
    <form onSubmit={handleSubmit}>
      <div id="topo">
        <h1> Qual serviço você oferece?</h1>
      </div>
      <div id="container">
        <input
          id="service_name"
          type="text"
          required
          minLength="3"
          placeholder="Nome do seu serviço/trabalho*"
          value={name}
          onChange={event => setName(event.target.value)}
        ></input>
        <input
          id="desc_service"
          type="text"
          minLength="5"
          required
          placeholder="Descrição do serviço*"
          value={description}
          onChange={event => setDescription(event.target.value)}
        ></input>
        {/* <label>Categoria*</label> */}
        <div>
          <select
            onChange={event => setCategoria(event.target.value)}
            value={categoria}
            required
          >
            <option value="">Selecione</option>
            <option value="jardinagem">Jardinagem</option>
            <option value="encanador">Encanador</option>
            <option value="eletricista">Eletricista</option>
            <option value="limpeza">Limpeza Geral</option>
          </select>
        </div>
      </div>
      <div id="container2">
        <div id="text">
          <label>Localização*</label>
        </div>
        <input
          id="cep"
          type="text"
          required
          placeholder="CEP*"
          value={cep}
          minLength="10"
          maxLength="10"
          onChange={event => {
            let newCep = event.target.value.replace(/\D/g, "");
            newCep = newCep.replace(
              /^([\d]{2})\.*([\d]{3})-*([\d]{3})/,
              "$1.$2-$3"
            );
            if (newCep.length <= 10) setCep(newCep);
          }}
        ></input>
        <div id="text">
          <label>Contato*</label>
        </div>
        <input
          id="telefone"
          type="text"
          required
          placeholder="Telefone*"
          minLength="14"
          value={phone}
          onChange={event => {
            let newPhone = event.target.value.replace(/\D/g, "");

            newPhone = newPhone.replace(
              /\(*([0-9]{2})\)*\s{0,1}([0-9]{4,5})-{0,1}([0-9]{4})/,
              "($1) $2-$3"
            );
            if (newPhone.length <= 15) setPhone(newPhone);
          }}
        ></input>
        <div id="text">
          <label>Faça upload de uma foto do serviço*</label>
        </div>
        <input
          id="foto_service"
          type="file"
          required
          onChange={event => transformBase64(event.target.files[0])}
        ></input>
        <button type="submit">Cadastrar</button>
      </div>
    </form>
  );
}
