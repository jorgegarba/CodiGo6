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
    generarAleatorio= ()=>{
        let productoTemporal ={
            id: Math.floor(Math.random()*(50-5))+5,
            nombre: "Producto Aleatorio",
            precio: Math.random()*(10000-1000)+1000
        };
        // Estamos sobreescribiendo los productos pero antes guardamos lo que teniamos con "...this.state.productos" y lo que va despues de la coma es lo que se va a insertar, en este caso, el objeto productoTemporal
        this.setState({
            productos:[...this.state.productos, productoTemporal]
        })
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
                    {
                        productos.map(producto=>{
                            return(
                                <tr key={producto.id}>
                                    <td>{producto.id}</td>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.precio}</td>
                                    <td><button className="btn btn-block btn-success" onClick={
                                        ()=>{
                                            this.seleccionaProducto(producto);
                                        }
                                    }>selecionar {producto.nombre}</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table> 
            {
                this.state.producto.nombre ? (<p>Producto Seleccionado: {this.state.producto.nombre}</p>) : (<p>Producto no seleccionado</p>)
            }
            <button onClick={this.generarAleatorio}>Genera un producto Aleatorio</button>
            </div>
        );
    }
}
