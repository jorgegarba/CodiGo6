import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';

export default class Header extends Component {
  state = {
    isLogged: false
  }
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/pabellones"}>
                  Pabellones
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/reservas"}>
                  Reservas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/registro"}>
                  Registro
                </NavLink>
              </li>
              <li className="nav-item">
                {
                  this.props.isLogged ? 
                  <NavLink className="nav-link" to={"/crearusuario"}>
                  Crear Usuario
                </NavLink>
                : null
                }
              </li>
              <li className="nav-item">
                        {
                            this.props.isLogged ?
                                <Link className="nav-link"  to={"/login"} onClick={() => {
                                    this.props.signout();
                                }}>
                                    Cerrar Sesion
                                </Link> : null
                                
                        }
                    </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </header>
    )
  }
}
