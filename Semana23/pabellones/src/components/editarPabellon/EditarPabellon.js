import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

class EditarPabellon extends Component {
  state = {
    loading: true,
    error: null,
    pabellon: {}
  };

  

  manejarSubmit = e => {
    e.preventDefault();
    if (this.state.pabellon.pab_nom.trim() === "") {
      this.setState({
        error: true
      });
     
    } else {
      let misHeaders = {
        "Content-Type": "application/json"
      };
      let data = {
        pabellon: {
          ...this.state.pabellon
        }
      };
      console.log(this.state.pabellon);
      axios
        .put("http://localhost:5000/api/pabellon", data, { misHeaders })
        .then(rpta => {
          if (rpta.status === 200) {
            Swal.fire(
              "Actualizado!!!!",
              "Pabellón actualizado correctamente",
              "success"
            );
          } else {
            console.log("Error al actualizar");
          }
        });
    }
  };

  manejarCambio = e => {
    this.setState({
      pabellon: {
        ...this.state.pabellon,
        [e.target.name]: e.target.value
      }
    });
  };

  componentDidMount() {
    this.obtenerData();
  }

  obtenerData = e => {
    this.setState({ loading: true, error: null });
    const id = this.props.match.params.pabId;
    axios
      .get(`http://localhost:5000/api/pabellon/${id}`)
      .then(rpta => {
        console.log(rpta);
        this.setState({ loading: false, pabellon: rpta.data.pabellon });
      })
      .catch(error => {
        this.setState({ loading: false, error: error });
      });
  };

  alertaError() {
    toastr.options = {
      positionClass : 'toast-bottom-full-width',
      hideDuration: 300,
      maxOpened:1,
      autoDismiss:true,
      preventDuplicates:true
    }
    toastr.clear()
    // Success,Info,Warning,Error
    setTimeout(() => toastr.warning(`No deje espacios en blanco`), 500)
  }

  render() {
    if (this.state.loading) {
      return "..CARGANDO";
    }
    return (
      <div className="container">
        {
           this.state.error === true ? this.alertaError() : null
        }
        <div className="row">
          <div className="col-12">
            <h2>Actualizar Datos</h2>
            <form onSubmit={this.manejarSubmit}>
              <div className="form-group">
                <label>Nombre de Pabellón</label>
                <input
                  type="text"
                  name="pab_nom"
                  onChange={this.manejarCambio}
                  value={this.state.pabellon.pab_nom}
                  className="form-control"
                ></input>
              </div>
              <button className="btn btn-primary">Guardar Cambios</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(EditarPabellon);
