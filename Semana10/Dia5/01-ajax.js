window.onload = function(){

    var btnTraerDatos = document.getElementById("btnTraerDatos");

    var tabla = document.getElementById("tabla");

    // xhr => XMLHttpRequest    , SolicitudHTTPXML

    btnTraerDatos.onclick = function(){

        //creando mi objeto XHR
        var xhr = new XMLHttpRequest();

        // console.log(xhr);

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
                    console.log("el codigo de estado es: " + xhr.status);
                    break;

            }
         }



    }


}