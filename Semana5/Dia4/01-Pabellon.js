function Pabellon(nuevoNombre="Sin Nombre",nuevoFilas,nuevoColumnas,nuevoId) {
    var objPabellon = {
        nombre: nuevoNombre,
        capacidad: nuevoFilas*nuevoColumnas,
        nro_filas: nuevoFilas,
        nro_col: nuevoColumnas,
        id: nuevoId,
        nichos: [
            {
                id: 1,
                nro: 1,
                precio: 5000,
                estado: "disponible"
            },
            {
                id: 2,
                nro: 2,
                precio: 5500,
                estado: "ocupado"
            }
        ]
    }
    return objPabellon;
}

// Desarrollar las siguientes funciones

// - venderNicho(idNicho) =>  La funcion, mostrará un mensaje por
// consola, de "Nicho vendido" tras cambiar su estado a "ocupado"
// Si el nicho estaba ocupado, el sistema, deberá mostrar
// un mensaje de error indicando que el nicho no se puede vender.

// - consultarNichosLibres() => La función retornará la cantidad
// de nichos en estado "libre"

// - liberarPabellon() => La función borrará todos los nichos del
// pabellon(limpiará el arreglo de nichos)

// - repoblarPabellon() => la función, primero llamará a la función
// liberarPabellon(), luego creará tantos nichos como
// capacidad tenga el pabellon, con valores por defecto para cada
// nicho. OJO > el número y el id del nicho, deben ser valores
// correlativos, el precio inciará en 0 y todos los estados serán
// "libre"