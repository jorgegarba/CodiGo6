window.onload = function() {
  var xhr = new XMLHttpRequest();

    var divProductos = document.getElementById("divProductos");
    var detalleProducto = document.getElementById("detalleProducto");
    var productos = [];

    function buscarProductById(idBuscado){
        for (let i = 0; i < productos.length; i++) {
            if(productos[i].id == idBuscado){
                return productos[i];
            }
        }
        return null;
    }
  function imprimirProductos(arregloProductos){
    divProductos.innerHTML = "";
    var fila = document.createElement("div");
    fila.setAttribute("class","row");
    divProductos.appendChild(fila);
    
    arregloProductos.forEach(function(producto){
        var columna = document.createElement("div");
        columna.setAttribute("class","col-md-4");
        let card = document.createElement("div");
        card.setAttribute("class","card mt-2");

        card.innerHTML = `<img src="${producto.prod_img}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${producto.prod_nom}</h5>
                        <button class="btn btn-primary producto" idproducto="${producto.prod_id}">Ver Detalles</button>
                        </div>`;

        if(producto.prod_stock == false){
            card.setAttribute("style","border: 2px solid red !important");
        }
        fila.appendChild(columna);
        columna.appendChild(card);
        
        var btnProductos = document.querySelectorAll(".producto");

        for(let i=0;i<btnProductos.length;i++){
            btnProductos[i].onclick = function(){

                var idProducto = this.getAttribute("idproducto");

                var productoEncontrado = buscarProductById(idProducto);

                detalleProducto.innerHTML = "";
                var detalles = `<li class="list-group-item active">${productoEncontrado.prod_nom}</li>
                                <li class="list-group-item">Descripción: ${productoEncontrado.prod_desc}</li>
                                <li class="list-group-item">Precio: ${productoEncontrado.prod_prec}</li>
                                <li class="list-group-item">Con Stock:${productoEncontrado.prod_stock}</li>`;
                detalleProducto.innerHTML = detalles;
            }
    
        }
    });
    
    

    
  }

  function obtenerProductos() {
    xhr.onreadystatechange = function() {
      switch (xhr.readyState) {
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
          console.log(xhr.responseText);
          var jsonProductos = JSON.parse(xhr.responseText);
          productos = jsonProductos;
          imprimirProductos(jsonProductos);

          break;
        default:
          console.log("Ha ocurrido un error inesperado");
      }
    };

    xhr.open("GET", "http://5d4b381a00dbb10014879959.mockapi.io/productos");
    xhr.send(null);
  }

  obtenerProductos();
};
