import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
class EditarPabellon extends Component {
  state = {
    loading: true,
    error: null,
    nombrePabellon: ""
  };

  manejarSubmit = e => {
    e.preventDefault();
  };

  manejarCambio = e => {
    this.setState({
      nombrePabellon: e.target.value
    });
  };

  componentDidMount() {
    this.obtenerData();
  }

  obtenerData = e => {
    this.setState({ loading: true, error: null });
    const id = this.props.match.params.pabId;
    axios.get(`http://localhost:5000/api/pabellon/${id}`).then(rpta => {
      this.setState({loading:false, nombrePabellon: rpta.data.pabellon.pab_nom })
    }).catch(error=>{
        this.setState({loading:false,error:error});
    });
    
  };

  render() {
    if (this.state.loading) {
      return "..CARGANDO";
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Actualizar Datos</h2>
            <form onSubmit={this.manejarSubmit}>
              <div className="form-group">
                <label>Nombre de Pabellón</label>
                <input
                  type="text"
                  name="nombrePabellon"
                  onChange={this.manejarCambio}
                  value={this.state.nombrePabellon}
                  className="form-control"
                ></input>
              </div>
            </form>
            <button className="btn btn-primary">Guardar Cambios</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(EditarPabellon);
