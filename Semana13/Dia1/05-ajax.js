function llenarDatosDatatable(){
    //documentacion y plugin datatables.net
    var tablaProductos = $('#listaProductos');
    tablaProductos.DataTable({
        //dentro del objeto que recibe datatables
        //los params de ajax se pasan en un objeto
        "ajax":{
            type:"GET",
            url:"https://5d4b6adb00dbb10014879b12.mockapi.io/productos",
            timeout:1500,
            //dataSrc que toda la informacion que reciba se manejara como un arreglo
            dataSrc:""
        },
        "columns":[
            {data:"prod_nom"},
            {data:"prod_desc"},
            {data:"prod_prec"}
        ],
        "language":{
            "lengthMenu":"Mostrando _MENU_ elementos",
            "search":"Buscar"
        }
    })
}

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

    tablaServicios.DataTable();

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

function crearServicio(servicio){

    $.ajax({
        type:"POST",
        url:"https://5d4b6adb00dbb10014879b12.mockapi.io/servicios",
        timeout:1500,
        //a diferencia de GET si enviaremos data, donde va nuestro objeto transformado a texto
        data:JSON.stringify(servicio),
        //Y para que nos entienda nuestro API que estamos enviando y como interpretarlo en la propiedad contentType tenemos que indicarle que tipo de contenido es, en este caso "application/json"
        contentType:"application/json",
        success:function(respuesta){
            console.log(respuesta);
            obtenerServicios();
        },
        error:function(error){
            console.log(error);
        },
        beforeSend:function(){
            console.log("Código ejecutado antes de enviar la data");
            //mensajito o imagen de que se esta enviando los datos y que espere
        }
    })
}

var anadirServicios = $('#anadirServicios');

anadirServicios.click(function(e){
    e.preventDefault();
    var divRow = $(".row");

    var formulario = `<form>
                            <table class="table">
                                <tr>
                                    <td>Nombre:</td>
                                    <td><input class="form-control" type="text" name="serv_nom"></td>
                                </tr>
                                <tr>
                                    <td>Descripción:</td>
                                    <td><input class="form-control" type="text" name="serv_desc"></td>
                                </tr>
                                <tr>
                                    <td>Precio:</td>
                                    <td><input class="form-control" type="number" name="serv_price"></td>
                                </tr>
                            </table>
                            <input type="submit" value="Crear" class="btn btn-primary">
                        </form>`
    divRow.html("");
    divRow.html(formulario);
    
    var miFormulario = $('form');
    miFormulario.submit(function(e){
        e.preventDefault();
        var misDatos = miFormulario.serializeArray();
        console.log("Datos form",misDatos);

        //En caso de querer obtener los valor 1 x 1
        //bastaba con poner algún id:
        //y usar .val() que nos retorna elvalor
        //var inputName = $("#serv_nom")
        /*var objServicio = {
            serv_nom : inputName.val()
        }*/
        var objServicio = {};
        // // //each seria similar a la función forEach de JS
        // // //recibe un arreglo y una función anónima donde le digo que hacer, esa función anónima me devuelve por cada elemento una variable que en nuestro caso es input
        misDatos.forEach(function(input){
            //objeto[nombrepropiedad]=valordepropiedad
            //objServicio[input.name] = input.value;
            //objServicio["nombrepropiedad"] = "valordemipropiedad";
            objServicio[input.name] = input.value;
        });
        // $.each(misDatos,function(i,input){
        //     //objeto[nombrepropiedad]=valordepropiedad
        //     objServicio[input.name] = input.value;
        // });
        
        console.log(objServicio);

        crearServicio(objServicio);
    })

})

llenarDatosDatatable();
obtenerServicios();

//Como era antes con JS
// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if (xhr.readyState == 4){
//         //COSAS
//         xhr.responseText
//     }
// }
// xhr.open("GET","URL");
// xhr.send();