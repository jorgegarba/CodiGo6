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
    //esto con el fin de obtener solamente la tabla, la variable "tabla" me representa múltiples elementos
    //no confundir una variable de texto con un elemento del dom
    var tablaServicios = $('#tablaServicios');
    var tbody = `<tbody id="tbody"></tbody>`;
    tablaServicios.append(tbody);
    var tbodyServicios = $("tbody");
    
    arregloServicios.forEach(function(servicio){
        //agregar por cada elemento de arregloServicios, vamos a ponerlo en la tabla
        var tr = $('<tr></tr>');
        var td1 = $(`<td>${servicio.serv_nom}</td>`);
        var td2 = $(`<td>${servicio.serv_desc}</td>`);
        var td3 = $(`<td>${servicio.serv_price}</td>`);
        var img = $(`<img src="${servicio.serv_img}" width="150px"/>`);
        var td4 = $(`<td></td>`);
        td4.append(img);
        tr.append(td1).append(td2).append(td3).append(td4);
        tbodyServicios.append(tr);
    });
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

//Como era antes con JS
// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if (xhr.readyState == 4){
//         //COSAS
//     }
// }
// xhr.open("GET","URL");
// xhr.send();