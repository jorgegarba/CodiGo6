window.onload = function(){
    let btnObtenerDatos = document.getElementById("obtenerDatos");
    let inputNombre = document.getElementById("nombre");
    let inputDireccion = document.getElementById("direccion");
    let btnEnviarDatos = document.getElementById("enviarDatos");

    btnObtenerDatos.onclick = function(){

        //con una petición de tipo GET
        //a la ruta que nos da firebase, agregamos el .json para que nos de acceso a los datos
        fetch("https://prueba-20384.firebaseio.com/restaurantes.json")
                    //respuesta es el estado de mi peticion
                    .then((respuesta) => {
                        return respuesta.json();
                    //retornaremos otra promesa mediante la función .json()
                    }).then((respuestaJson) =>{
                        //obtenemos los datos :)
                        console.log(respuestaJson);
                    }).catch((error) => {
                        //y capturamos el error por si acaso :/
                        console.log(error);
                    });

    }
    // btnEnviarDatos.onclick = function() {
    btnEnviarDatos.onclick = () => {
        let nombre = inputNombre.value;
        let direccion = inputDireccion.value;

        let objRestaurante = {
            nombre:nombre,
            direccion:direccion
        }

        let configuracion = {
            method:'POST',
            //body = los datos que vamos a enviar al servidor
            body: JSON.stringify(objRestaurante),
            //recordemos que indicamos que tipo de datos estamos enviando, tenemos que respetar los headers tal como son
            headers: {'Content-Type':'application/json'}
        }
        //para la petición POST me esta recibiendo la dirección donde hará la petición y la configuración de esa petición
        fetch("https://prueba-20384.firebaseio.com/restaurantes.json",configuracion)
                        .then((respuesta) =>{
                            return respuesta.json();
                        }).then(respuestaJSON =>{
                            console.log(respuestaJSON)
                        });
    }

}