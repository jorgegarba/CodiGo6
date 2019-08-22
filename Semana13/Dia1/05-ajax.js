function imprimirServicios(arregloServicios){
    var divRow = $('.row');
    var tabla = `<table id="tablaServicios" class="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                </table>`;
    divRow.html(tabla);
}

function obtenerServicios(){
    $.ajax({
        type:"GET",
        url:"https://5d4b6adb00dbb10014879b12.mockapi.io/servicios",
        timeout:1000, //ms
        data:null,
        //exito! mi peticion ha sido respondida
        //la funcion anónima de success recibira una variable que contendrá la información de respuesta, nosotros le ponemos el nombre a esa variable
        success:function(respuesta){
            //lo que quiera ejecutar cuando mi petición haya tenido exito
            console.log(respuesta);
            imprimirServicios(respuesta);

        },
        error:function(){
            console.log("Ha ocurrido un error, no tenemos internet");
        },
        beforeSend:function(){
            console.log("codigo que se ejecutará antes de hacer la petición");
        },
        //https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
        //Con la propiedad complete ejecutamos codigo despues que la operacion ya se ha ejecutado y podemos obtener el estado de nuestra petición
        complete:function(xhr){
            console.log(xhr.status);
        }
    });
}
obtenerServicios();

// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if (xhr.readyState == 4){
//         //COSAS
//     }
// }
// xhr.open("GET","URL");
// xhr.send();