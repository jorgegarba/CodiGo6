import React, { Component } from 'react'

export default class Formulario extends Component {
    state = {
        nombrePabellon:''
    }
    // escucharCambios = (e) => {
    //     console.log({
    //         value: e.target.value,
    //         name: e.target.name
    //     });
    // }

    escucharClick = (e) => {
        console.log("Se hizo click");
    }

    escucharSubmit = (e) => {
        e.preventDefault();
        console.log("Se ejecuto el submit");
        console.log(this.state);
    }

    manejarCambios = (e) => {
        this.setState({
            // nombrePabellon: e.target.value
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h4>Nuevo Registro</h4>
                <form onSubmit={this.escucharSubmit}>
                    <div className="form-group">
                        <label>
                            Nombre Pabellón
                        </label>
                        <input 
                            onChange={this.props.onChange} className="form-control" 
                            type="text" 
                            name="nombrePabellon" 
                            value={this.props.formValues.nombrePabellon}
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Encargado
                        </label>
                        <input 
                            onChange={this.props.onChange} className="form-control" 
                            type="text" 
                            name="encargado" 
                            value={this.props.formValues.encargado}
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Area
                        </label>
                        <input 
                            onChange={this.props.onChange} className="form-control" 
                            type="text" 
                            name="area"
                            value={this.props.formValues.area}
                        />
                    </div>

                    {/* onClick={this.escucharClick}  */}
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </form>
            </div>
        )
    }
}
