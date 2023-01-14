import React, { Component,lazy } from "react";
import Cookies from "universal-cookie";
import "../css/menu.css";



const cookies = new Cookies();

class Menu extends Component {
  cerrarSesion = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("username", { path: "/" });
    window.location.href = "./";
  };

  componentDidMount() {
    if (!cookies.get("username")) {
      window.location.href = "./";
    }
  }

  render() {
    console.log("id: " + cookies.get("id"));
    console.log("username" + cookies.get("username"));
    return (
      <div className="container">
        <div className="row ">
          <div className="col-md-6 col-6 mt-2 justify-content-center">
            <h1>Enerbit</h1>
          </div>
          <br />
          <div className="col-md-6 col-6 mt-2 justify-content-center">
            <button className="btn btn-danger">Agregar Producto</button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-2 ">
            <button className="btn btn-danger">Buscar</button>
          </div>
        </div>
        <div className="col-md-6 col-12 mt-2">
          <button
            className="btn btn-danger "
            onClick={() => this.cerrarSesion()}
          >
            Cerrar Sesion
          </button>
        </div>
      </div>
    );
  }
}
export default Menu;
