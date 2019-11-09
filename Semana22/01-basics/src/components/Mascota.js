import React from 'react';
// le podemos dar estilos a uno de nuestros elementos a cada uno por separado
import '../css/mascota.css';
const Mascota = (props) => {
    return (
        <div className="mascota">
            <p className="tipo">Tipo: {props.objMascota.tipo}</p>
            <p className="nombre">Nombre: {props.objMascota.nombre}</p>
        </div>
    );
}

export default Mascota;