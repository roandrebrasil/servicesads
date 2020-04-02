import React from "react";

import api from "../../services/api";

import "./index.css";

export default class Login extends React.Component {
  state = {
    email: "",
    password: ""
    // username: ""
  };

  login() {
    api
      .post("/auth/authenticate", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        const { user, token } = response.data;
        sessionStorage.setItem("__TOKEN", token);
        sessionStorage.setItem("__USER", JSON.stringify(user));
        window.location.href = window.location.origin;
      })
      .catch(e => console.error(e));
    // const tokens = sessionStorage.getItem("__TOKEN")
    // axios.post(process.env.REACT_APP_SERVER + "/auth/authenticate",{}, {authorization: 'Bearer '+tokens})
    // console.log('vai')
  }
  //}
  // pegarUsername(){
  //   let user = sessionStorage.getItem("__USER")
  //   if(!!user){
  //     user = JSON.parse(user)

  //     this.setState({username: user.name})
  //   }
  // }

  render() {
    return (
      <div className="containerlogin">
        <div className="boxlogin">
          <h1>SERVICES</h1>
          <h1>ADS</h1>
          <p className="title">Entre em sua conta</p>
          <div className="label">
            <label>E-mail*</label>
          </div>
          <input
            type="email"
            value={this.state.email}
            onChange={event => this.setState({ email: event.target.value })}
          ></input>
          <div className="label2">
            <label>Senha*</label>
          </div>
          {/* {this.state.username} */}
          <input
            type="password"
            value={this.state.password}
            onChange={event => this.setState({ password: event.target.value })}
          ></input>
          <button onClick={() => this.login()}> Entrar</button> {}
          <div id="box2">
            <p className="text2"> Não tem uma conta ? </p>
            <a href="/"> Crie Agora </a>
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
