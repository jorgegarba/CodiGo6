import React, { Component } from 'react'

export default class Tarjeta extends Component {
    render() {
        return (
            <div>
                <h4>Datos Del registro</h4>
                <p>
                    Nombre Pabellon: {this.props.nombrePabellon}
                </p>
               
                <p>
                    Encargado: {this.props.encargado}
                </p>
                
                <p>
                    Area: {this.props.area}
                </p>
            </div>
        )
    }
}
