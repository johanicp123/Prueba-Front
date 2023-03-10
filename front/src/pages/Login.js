import React, { Component } from "react";
import "../css/Login.css";
import axios from "axios";
import Cookies from "universal-cookie";

const baseUrl = "http://localhost:3001/usuarios";
const cookies = new Cookies();

class Login extends Component {
  state = {
    form: {
      username: "",
      password: "",
    },
  };

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  iniciarSesion = async () => {
    await axios
      .get(baseUrl, {
        params: {
          username: this.state.form.username,
          password: this.state.form.password,
        },
      })
      .then((Response) => {
        return Response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          let respuesta = response[0];
          cookies.set("id", respuesta.id, { path: "/" });
          cookies.set("username", respuesta.username, { path: "/" });
          alert(`Bienvenido ${respuesta.username}`);
          window.location.href = "./menu";
        } else {
          alert("el usuario o la constraseña no son correctos");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    if (cookies.get("username")) {
      window.location.href = "./menu";
    }
  }

  render() {
    return (
      <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <button
              className="btn btn-primary"
              onClick={() => this.iniciarSesion()}
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
