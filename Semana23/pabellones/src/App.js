import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Header from "./components/Header";
import Pabellon from "./components/pabellon/Pabellon";
import Reserva from "./components/reserva/Reserva";
import Registro from "./components/registro/Registro";
import EditarPabellon from "./components/editarPabellon/EditarPabellon";
import PageError from "./components/PageError/PageError";
import Login from "./components/Login/Login";
import CrearUsuario from "./components/crearUsuario/crearUsuario";
import AuthService from "./services/Auth";
// importando enrutamiento

export default class App extends Component {
  _sAuth = new AuthService();

  constructor(props) {
    super(props);

    if (this._sAuth.isLogged()) {
      this.state = {
        isLogged: true
      };
    } else {
      this.state = {
        isLogged: false
      };
    }
    this.signin.bind(this);
  }

  signin = (email, pass) => {
    this._sAuth.login(email, pass).then(rpta => {
      console.log(rpta);
      if (rpta.status === 200) {
        this._sAuth.guardarToken(rpta.data.token);
        this.setState({
          isLogged: true
        });
        console.log(this.state.isLogged);
      }
    });
  };

  signout = () => {
    this._sAuth.cerrarSesion();
    this.setState({ isLogged: false });
  }

  render() {
    return (
      <Fragment>
        <Router>
          <Header isLogged={this.state.isLogged}
            signout={this.signout} />

          <Switch>
            {/* evaluamos si esta loqueado en la ruta base, redirigimos a pabelloón y si no retornamos al login */}
            <Route
              exact
              path="/"
              render={() => {
                if (this.state.isLogged) {
                  return <Pabellon />;
                } else {
                  return <Redirect to={{ pathname: "/login" }} />;
                }
              }}
            />

            <Route
              exact
              path="/login"
              render={() => {
                if (this.state.isLogged) {
                  return <Pabellon />;
                } else {
                  return <Login signin={this.signin} />;
                }
              }}
            />

            <Route
              exact
              path="/pabellones"
              render={() => {
                if (this.state.isLogged) {
                  return <Pabellon />;
                } else {
                  return <Login signin={this.signin} />;
                }
              }}
            />

            <Route
              exact
              path="/registro"
              render={() => {
                if (this.state.isLogged) {
                  return <Registro />;
                } else {
                  return <Login signin={this.signin} />;
                }
              }}
            />

            <Route
              exact
              path="/reservas"
              render={() => {
                if (this.state.isLogged) {
                  return <Reserva />;
                } else {
                  return <Login signin={this.signin} />;
                }
              }}
            />
            <Route
              exact
              path="/crearusuario"
              render={() => {
                if (this.state.isLogged) {
                  return <CrearUsuario />;
                } else {
                  return <Login signin={this.signin} />;
                }
              }}
            />

            <Route
              exact
              path="/pabellones/:pabId/edit"
              render={() => {
                if (this.state.isLogged) {
                  return <EditarPabellon />;
                } else {
                  return <Login signin={this.signin} />;
                }
              }}
            />
            <Route component={PageError} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}
