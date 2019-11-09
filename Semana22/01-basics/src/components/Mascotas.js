import React from 'react';
import Mascota from './Mascota';
const Mascotas = (props) => {
    // props.mascotas.map((m,indice)=>{
    //     console.log(indice);
    //     console.log(m);
    // })
    return (
        <div>
            {props.mascotas.map((m,indice)=>{
                // Siempre que vamos a crear hijos a partir de una iteracion se tiene que pasar el parametro key
                return(<Mascota objMascota={m} key={indice}/>)
            })
            }

        </div>
    );
}

export default Mascotas;