import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Pabellon from './components/pabellon/Pabellon';
import Reserva from './components/reserva/Reserva';
import Registro from './components/registro/Registro';
import EditarPabellon from './components/editarPabellon/EditarPabellon';

// importando enrutamiento
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default class App extends Component {

  render() {
    return (
      <Fragment>
        {/* Todos los componentes que van a estar 
        afectos al sistema de enrutamiento, deben estar en el
        componente Router */}
        <Router>

          <Header />
          {/* El componente Switch es como un <router-outlet> en Angular */}
          <Switch>
            <Route exact path={"/pabellones"} component={Pabellon} />
            <Route exact path={"/reservas"} component={Reserva} />
            <Route exact path={"/registro"} component={Registro} />
            <Route exact path={"/pabellones/:pabId/edit"} component={EditarPabellon}/>
          </Switch>

        </Router>
      </Fragment>
    )
  }
}
