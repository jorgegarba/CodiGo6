window.onload = function(){

    var btnTraerDatos = document.getElementById("btnTraerDatos");

    var tabla = document.getElementById("tabla");

    //esta funcion va a recibir los datos de la api(reqres) y en la tabla colocará los datos recibidos
    function ponerDatos(personas){
        tabla.innerHTML = `<thead>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Correo</th>
                                <th>Foto</th>
                            </thead>`
        var tbody = document.createElement("tbody");
        tabla.appendChild(tbody);
        personas.forEach(function(persona) {
            var tr = document.createElement("tr");

            var tdId = document.createElement("td");
            tdId.innerHTML = persona.id;
            tr.appendChild(tdId);

            var tdNombre = document.createElement("td");
            tdNombre.innerHTML = persona.first_name;
            tr.appendChild(tdNombre);

            var tdApellido = document.createElement("td");
            tdApellido.innerHTML = persona.last_name;
            tr.appendChild(tdApellido);

            var tdCorreo = document.createElement("td");
            tdCorreo.innerHTML = persona.email;
            tr.appendChild(tdCorreo);

            var avatar = document.createElement("img");
            avatar.setAttribute("src",persona.avatar);
            
            var tdImagen = document.createElement("td");
            tdImagen.appendChild(avatar);
            tr.appendChild(tdImagen);

            tbody.appendChild(tr);
        });

    }


    // xhr => XMLHttpRequest    , SolicitudHTTPXML
    
    btnTraerDatos.onclick = function(){

        //creando mi objeto XHR
        var xhr = new XMLHttpRequest();

        console.log(xhr);

        // readyState devolverá el estado actual del objeto (de la comunicación que esta teniendo)
        //va de 0 a 4 dependiendo de que evento haya ocurrido
        //https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest
        //readyState 0 => El objeto ha sido creado
        console.log("readyState",xhr.readyState);

        // onreadystatechange estará pendiente del readyState
        xhr.onreadystatechange = function () { 
                switch (xhr.readyState){
                    case 1:
                        console.log("se ha ejecutado la función open()");
                        break;
                    case 2:
                        console.log("se ha disparado una petición http");
                        break;
                    case 3:
                        console.log("ya estamos descargando los datos");
                        break;
                    case 4:
                        console.log("ya tenemos los datos, la operación terminó");
                        // Documentación de los estados
                        //https://www.tutorialspoint.com/http/http_status_codes
                        // https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP
                        console.log("el codigo de estado es: " + xhr.status);
                        var json = JSON.parse(xhr.responseText);

                        console.log("el contenido de la solicitud es: ", json.data);
                        ponerDatos(json.data);
                        break;
                    default:
                        console.log("Ha ocurrido un error inesperado");
                }
            }
        //  .open recibirá como variables el tipo de petición (GET, POST) y la dirección URL de la API que nos dará los datos
        //llegará hasta 1 (readyState)
         xhr.open("GET","https://reqres.in/api/users?page=4");

         //Segun lo que hayamos configurado en .open ejecutarara la solicitud/petición http
         xhr.send(null);
    }

    //https://www.mockapi.io/
}