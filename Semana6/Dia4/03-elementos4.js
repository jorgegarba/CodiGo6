var productos = [
    {
        codigo:"0001",
        descripcion:"Laptop Toshiba",
        precio:4500.00,
        imagen:"http://placehold.it/100x100/",
        existencias:45,
        estado:"activo"
    },{
        codigo:"0002",
        descripcion:"Mouse Razer",
        precio:400.00,
        imagen:"http://placehold.it/100x100/",
        existencias:10,
        estado:"inactivo"
    },{
        codigo:"0003",
        descripcion:"Tablet Lenovo",
        precio:100.00,
        imagen:"http://placehold.it/100x100/",
        existencias:900,
        estado:"activo"
    }
]

var contenedor = document.getElementById("contenedor");

var tabla = document.createElement("table");
tabla.setAttribute("border","1");
tabla.innerHTML= `<tr>
                    <th>Codigo</th>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>Imagen</th>
                    <th>Existencias</th>
                    <th>Estado</th>
                  </tr>`;


for(var i = 0; i < productos.length; i++){
    // creando la fila en cada vuelta
    var trFila = document.createElement("tr");

    
    // creando las 6 columnas en cada vuelta
    var tdCodigo = document.createElement("td");
    var tdDescripcion = document.createElement("td");
    var tdPrecio = document.createElement("td");
    var tdImagen = document.createElement("td");
    var tdExistencias = document.createElement("td");
    var tdEstado = document.createElement("td");

    // forma 1 para la imagen => creamos un elemento img
    // var imagen = document.createElement("img");
    // imagen.setAttribute("src",productos[i].imagen);

    // Colocando el contenido de cada td
    tdCodigo.innerHTML = productos[i].codigo;
    tdDescripcion.innerHTML = productos[i].descripcion;
    tdPrecio.innerHTML = productos[i].precio;

    // forma 2 para la imagen => colocar la imagen como innerHTML, es decir
    // como texto puro
    tdImagen.innerHTML = `<img src=${productos[i].imagen}/>`;

    // forma 1 para la imagen => inyectamos el elemento img al td
    // tdImagen.appendChild(imagen);
    tdExistencias.innerHTML = productos[i].existencias;
    tdEstado.innerHTML = productos[i].estado;
    tdEstado.style.color = productos[i].estado === "inactivo" ? "red" : "green";

    // inyectando los TD's DENTRO DEL TR O FILA
    trFila.appendChild(tdCodigo);
    trFila.appendChild(tdDescripcion);
    trFila.appendChild(tdPrecio);
    trFila.appendChild(tdImagen);
    trFila.appendChild(tdExistencias);
    trFila.appendChild(tdEstado);

    // inyectar toooooooodo el TR o fila en la tabla
    tabla.appendChild(trFila);
}
contenedor.appendChild(tabla);