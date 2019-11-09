// imrc => importa la clase React y Component de React
import React, { Fragment } from 'react';

// sfc => crea automaticamente un Stateless Functional Component
const Formulario = (props) => {
    // La forma en que se pasa datos del padre al hijo es por medio de los props
    // Todo componente react obligatoriamente tiene que retorna algo
    let titulo = "Titulo del Formulario"
    // En react solo se puede retornar un elemento, pero para que no afecte nuestros estilos utilizamos una etiqueta de REACT llamada Fragment
    return (
        <Fragment>
            <h2>{titulo}</h2>
            <h4>{props.subtitulo}</h4>
            <p>{props.descripcion}</p>
            <form>
                <input type="text"/>
            </form>
        </Fragment>
    );
}

export default Formulario;