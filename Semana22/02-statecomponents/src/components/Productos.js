// Snippet para crear toda la clase => rcc
import React, { Component } from 'react';

export default class Productos extends Component {
    // snippet para crear el constructor => con
    constructor(props) {
        super(props);
        console.log("Constructor de los productos");
        this.state = {
            productos: props.productos,
            producto: {}
        }
    }
    seleccionaProducto = (prod) => {
        console.log(prod);
        // Para cuando necesitemos actualizar el state se hace con el this.setstate
        this.setState({
            producto: prod
        })
    }
    componentDidMount() {
        // Funcion que se ejecuta luego del render cuando todo el DOM ya ha sido cargado con exito
        // Esta funcion solo se ejecuta UNA sola vez y puede , al igual que otras, modificar el state
        // FUNCIONALIDAD: se usa generalmente para traer data mediante las API's y para settear objetos JQUERY, como los DatePicker, modales, datatables, etc.
        console.log("Productos ComponentDidMount");
    }

    render() {
        console.log("Productos Render");
        let {productos} = this.state;
        return (
            <div> <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table> </div>
        );
    }
}
