import React, { Component } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import {withRouter} from 'react-router-dom';
class Formulario extends Component {
  state = {
    nombrePabellon: "",
    error: false
  };
  // escucharCambios = (e) => {
  //     console.log({
  //         value: e.target.value,
  //         name: e.target.name
  //     });
  // }

  escucharClick = e => {
    console.log("Se hizo click");
  };

  escucharSubmit = e => {
    e.preventDefault();
    // console.log("Se ejecuto el submit");
    // console.log(this.state);
    if (this.props.formValues.nombrePabellon.trim() === "") {
      if (!this.state.error) {
        this.setState({
          error: true
        });
      } 
    }else {
        if (this.state.error) {
          this.setState({
            error: false
          });
        }
        console.log("pruebita")
        let misHeaders = {
          "Content-Type": "application/json"
        };
        let data = {
          pab_nom: this.props.formValues.nombrePabellon
        };
        axios
          .post("http://localhost:5000/api/pabellon", data, {
            headers: misHeaders
          })
          .then(rpta => {
            if (rpta.status === 201) {
            //   console.log("Pabellón creado");
            Swal.fire(
                'Pabellon Creado!',
                'Exito al creado el pabellon',
                'success'
            ).then(()=>{
                this.props.history.push('/pabellones');
            })
            } else {
              console.log("Error algo ha pasado");
            }
          });
      }
  };

  manejarCambios = e => {
    this.setState({
      // nombrePabellon: e.target.value
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h4>Nuevo Registro</h4>
        <form onSubmit={this.escucharSubmit}>
          <div className="form-group">
            <label>Nombre Pabellón</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="nombrePabellon"
              value={this.props.formValues.nombrePabellon}
            />
          </div>
          <div className="form-group">
            <label>Encargado</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="encargado"
              value={this.props.formValues.encargado}
            />
          </div>
          <div className="form-group">
            <label>Area</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="area"
              value={this.props.formValues.area}
            />
          </div>

          {/* onClick={this.escucharClick}  */}
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    );
  }
}


export default withRouter(Formulario);