import React from "react";
import Formulario from '../formulario/Formulario';
import Tarjeta from '../tarjeta/Tarjeta';

class Registro extends React.Component {

    state = {
        form:{
            nombrePabellon: '',
            encargado: '',
            area: ''
        }
    };

    manejarCambios = (e) => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        })
    }

  render() {
    return (
      <div>
        <div className="container">

          <div className="row">

            <div className="col-6">
                <Formulario 
                    onChange={this.manejarCambios} 
                    formValues={this.state.form}
                />
            </div>

            <div className="col-6">
                <Tarjeta 
                  nombrePabellon={this.state.form.nombrePabellon}
                  encargado={this.state.form.encargado}
                  area={this.state.form.area}
                />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Registro;
