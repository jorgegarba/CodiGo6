window.onload = function(){

    var btnDescargar = document.getElementById("btnDescargar");
    var progressBar = document.getElementById("progreso");

    //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget/onprogress
    btnDescargar.onclick = function(){
        var xhr = new XMLHttpRequest();
        console.log(xhr);
        //imagenes de imgur.com en este caso ya que estas no tienen el....
        //CORS, que es una especie de firewall
        xhr.open("GET","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Collage_of_Nine_Dogs.jpg/800px-Collage_of_Nine_Dogs.jpg");
        //indicamos el tipo de respuesta
        xhr.responseType = "text";

        //llamamosal evento onprogress del xhr
        xhr.onprogress = function(e){
            console.log(e);
            //lengthComputable devuelve un valor booleano si se puede medir la subida o descarga del archivo
            if(e.lengthComputable){
                //e.loaded nos da la cantidad de datos cargados
                //e.total nos da la cantidad de datos a cargar
                //Los dividimos para obtener un porcentaje y los multiplicamos por 100ya que nos devolverá un decimal
                var porcentaje = (e.loaded / e.total) * 100;

                //y ese valor lo aplicamos al porcentaje de la barra de progreso
                progressBar.style.width = `${porcentaje}%`;

                //la data la obtendremos en el responseText como binario
            }
        }

        xhr.onloadstart = function(){
            console.log("esta iniciando la carga del archivo")
        }

        xhr.onload = function(){
            console.log("esta cargando el archivo");
        }

        xhr.onloadend = function(){
            console.log("la carga ha finalizado")
        }

        //activamos el evento send();
        xhr.send(null);
    }

}