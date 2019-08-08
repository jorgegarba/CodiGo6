window.onload = function(){

    var divProductos = document.getElementById("divProductos");
    // var detalleProducto = document.getElementById("detalleProducto");
    var nombreProducto = document.getElementById("nombreProducto");
    var descProducto = document.getElementById("descProducto");
    var precioProducto = document.getElementById("precioProducto");
    var stockProducto = document.getElementById("stockProducto");
    var btnEliminar = document.getElementById("btnEliminar");

    /**
     * eliminarProducto recibirá un id y lo eliminara del recurso 'productos' de mockapi
     */
    function eliminarProducto(id){
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function(){
            switch(xhr.readyState){
                case 2:
                    console.log("se esta ejecutando la petición");
                    break;
                case 3:
                    console.log("descargando datos");
                    break;
                case 4:

                    console.log("Se ha eliminado el producto Correctamente");
                    // Al eliminar el producto llamamos de nuevo a nuestra función obtenerProductos, para que obtenga los datos sin el producto que acabamos de eliminar y los imprima nuevamente
                    obtenerProductos();
            }
        }
        xhr.open("DELETE","https://5d4b381a00dbb10014879959.mockapi.io/productos/"+id);
        xhr.send(null);
    }

    /**
     * imprimir detalle recibira el id de producto y hara una consulta por un solo elemento, 
     * Después actualizará los datos en detalleProducto
     */
    function imprimirDetalle(id){
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function(){
            switch (xhr.readyState){
                case 2:
                    console.log("se esta ejecutando la petición");
                    break;
                case 3:
                    console.log("descargando datos");
                    break;
                case 4:
                    console.log(xhr.responseText);
                    let objProducto = JSON.parse(xhr.responseText);
                    console.log(objProducto);
                // Actualizamos los datos
                    nombreProducto.innerHTML = objProducto.prod_nom;

                    descProducto.innerHTML = objProducto.prod_desc;

                    precioProducto.innerHTML = objProducto.prod_prec;

                    stockProducto.innerHTML = objProducto.prod_stock ? "Hay Stock" : "No hay Stock";

                    btnEliminar.onclick = function(){
                        eliminarProducto(id);
                    }
                break;
            }
        }

        xhr.open("GET","https://5d4b381a00dbb10014879959.mockapi.io/productos/"+id);
        xhr.send(null);
    }

    function imprimirProductos(arregloProductos){
        divProductos.innerHTML = "";
        divFila = document.createElement("div");
        divFila.setAttribute("class","row");
        divProductos.appendChild(divFila);

        for(let i=0;i<arregloProductos.length;i++){
            // creamos nuestro dic que contendrá a nuestro producto
            var divColumna = document.createElement("div");
            divColumna.setAttribute("class","col-md-4");
            // definimos algunas propiedades
            divColumna.style.height = "300px";
            divColumna.style.backgroundImage = `url('${arregloProductos[i].prod_img}')`;
            
            // validamos si el producto esta en stock, en caso no este lo resaltamos con una borde
            if(arregloProductos[i].prod_stock == false){
                divColumna.style.border = "2px solid red";
            }
            // agregamosel nombre del producto
            divColumna.innerHTML = arregloProductos[i].prod_nom;
            divColumna.style.padding = "5px";
            // agregamos nuestro div que representa el producto al row que esta dentro de nuestro divProductos
            divFila.appendChild(divColumna);

            divColumna.onclick = function(){
                imprimirDetalle(arregloProductos[i].prod_id);
            }
            
        }


    }

    function obtenerProductos(){
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function(){
            switch (xhr.readyState){
                case 2:
                    console.log("se esta ejecutando la petición");
                    break;
                case 3:
                    console.log("descargando datos");
                    break;
                case 4:
                    console.log("Listo! datos obtenidos");
                    // console.log(xhr.responseText);

                    var jsonProductos = JSON.parse(xhr.responseText);
                // imprimimos los productos en divProductos invocando la sgte función
                    imprimirProductos(jsonProductos);

                    break;
            }
        }

        xhr.open("GET","https://5d4b381a00dbb10014879959.mockapi.io/productos");
        xhr.send(null);

    }
    obtenerProductos();
}