import React, { Component } from 'react';
const Mascota = (props) => {
    return (
        <div className="mascota">
            <p className="tipo">Tipo: {props.objMascota.tipo}</p>
            <p className="nombre">Nombre: {props.objMascota.nombre}</p>
        </div>
    );
}

export default Mascota;