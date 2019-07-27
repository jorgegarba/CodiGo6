window.onload = function(){
    //Obtenemos los elementos del HTML a utilizar
    //tanto del contenedor como del modal
    var main = document.getElementById("contenedor");
    var modalTitulo = document.getElementById("modalTitulo");
    var modalImagen = document.getElementById("modalImagen");
    var modalDescripcion = document.getElementById("modalDescripcion");

    //es simular nuestra Base de datos
    var productos = [
        {
            id:10,
            nombre:'Xiaomi Redmi 7',
            precio:150,
            descripcion:'Smartphone de 6 pulgadas con bateria de 4000 mAh, Buen rendimiento de gama media',
            imagen:'https://picsum.photos/200/200'
        },
        {
            id:20,
            nombre:'Razer Smartphone',
            precio:300,
            descripcion:'Bonito con pantalla 4k, bateria de alto rendimiento y excelente acabado',
            imagen:'https://picsum.photos/200/200'
        },
        {
            id:30,
            nombre:'Huawei P10',
            precio:700,
            descripcion:'El Huawei P10 Plus es un Smartphone que redefine la forma en que el mundo te ve',
            imagen:'https://picsum.photos/200/200'
        },
        {
            id:40,
            nombre:'Sony Xperia Z20',
            precio:600,
            descripcion:'Pantalla deficiente pero excelente rendimiento y protección contra liquidos',
            imagen:'https://picsum.photos/200/200'
        },
        {
            id:50,
            nombre:'Akita',
            precio:100,
            descripcion:'Pantalla deficiente pero excelente rendimiento y protección contra liquidos',
            imagen:'https://picsum.photos/200/200'
        }
    ];

    //esta función recibira una ID del producto para evaluarlo
    //con los id's de nuestro arreglo
    function buscarProducto(idProducto){
        for(let i = 0;i<productos.length;i++){
            if(productos[i].id == idProducto){
                //retornamos el producto que coincida con el ID
                return productos[i];
            }
        }
    }

    var row = document.createElement("div");
    row.className = "row";
    main.appendChild(row);

    var divProducto = "";
    
    productos.forEach(function(item){
        divProducto = 
        divProducto + `<div class="col-md-4 mb-2">
                            <div class="card">
                                <img src="${item.imagen}" class="card-img-top"/> 
                                <div class="card-body">
                                    <h4 class="card-title">
                                        ${item.nombre}
                                    </h4>
                                    <p class="card-text">
                                        Precio:$/ ${item.precio}
                                    </p>
                                    <button class="btn btn-primary click" idproducto="${item.id}">Detalles...</button>
                                </div>
                            </div>   
                        </div>`
    });
    row.innerHTML = divProducto;
    //----------
    var botones = document.querySelectorAll(".click");
    console.log(botones);
    
    for(var i=0; i<botones.length;i++){

        botones[i].onclick = function(){
            //vamos a vaciar el contenido del modal
            modalTitulo.innerHTML = "";
            modalDescripcion.innerHTML = "";
            modalImagen.setAttribute("src","");

            var idProducto = this.getAttribute("idproducto");
            console.log(idProducto);

            var productoEncontrado = buscarProducto(idProducto); //un objeto que coincida con el ID

            // if(productoEncontrado = null)
            if(!productoEncontrado){
                console.log("error producto no encontrado");
                location.reload();
            }else{
                //mostramos el modal mediante Jquery
                $("#miModal").modal("show");
                //Actualizabamos el contenido del modal
                modalTitulo.innerHTML = productoEncontrado.nombre;

                modalDescripcion.innerHTML = productoEncontrado.descripcion;

                modalImagen.setAttribute("src",productoEncontrado.imagen);
            }
        }

        

    }
}

