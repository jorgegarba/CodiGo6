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
        this._sAuth.guardarToken(rpta.token);
        this.setState({
          isLogged: true
        });
      }
    });
  };

  render() {
    return (
      <Fragment>
        
        <Router>
          <Header />
          
          <Switch>
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
            {this.state.isLogged ?
              (<Redirect to={{ pathname: "/pabellones" }} />) :
              (<Route
                exact
                path={"/login"}
                render={() => {
                  return <Login signin={this.signin} />
                }} />)}
            <Route exact path={"/pabellones"} component={Pabellon} />
            <Route exact path={"/reservas"} component={Reserva} />
            <Route exact path={"/registro"} component={Registro} />
            <Route
              exact
              path={"/pabellones/:pabId/edit"}
              component={EditarPabellon}
            />
            <Route component={PageError} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}
