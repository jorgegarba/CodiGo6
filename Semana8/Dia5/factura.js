window.onload = function(){
    //Creamos nuestro objeto global, para guardarlo en el localStorage
    var objFactura = {
        fecha:'',
        nombre:'',
        direccion:'',
        dni:'',
        listadoProductos:[],
        total:''
    }

    //Empezamos a relacionar los input con nuestras variables
    var inputFecha = document.getElementById("inputFecha");
    var inputNombre = document.getElementById("inputNombre");
    var inputDni = document.getElementById("inputDni");
    var inputDireccion = document.getElementById("inputDireccion");

    var tProductos = document.getElementById("tProductos");

    var inputCant = document.getElementById("inputCant");
    var inputProd = document.getElementById("inputProd");
    var inputPrecio = document.getElementById("inputPrecio");
    var btnAgregar = document.getElementById("btnAgregar");
    var tdTotal = document.getElementById("tdTotal");

    var totalFactura = 0;

    function obtenerFactura(){
        //obtenemos nuestro objeto en texto del localStorage
        var facturaTexto = localStorage.getItem("objFactura");
        //Y aquí lo convertimos de nuevo a un objeto
        var facturaJSON = JSON.parse(facturaTexto);

        // console.log(facturaJSON);
        //igualo facturaJSON a objFactura, para poder seguir trabajando con los mismos datos
        objFactura = facturaJSON;

        var arregloProductos = facturaJSON.listadoProductos;
        // console.log(arregloProductos);

        //forEach recorrerá todo el arreglo y recibirá como parámetro una función Anónima
        arregloProductos.forEach(function(producto){
            console.log(producto);
            
            var tr = document.createElement("tr");
            // console.log(producto.precioUnitario);
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");

            td1.innerHTML = producto.cantidad;
            td2.innerHTML = producto.producto;
            td3.innerHTML = producto.precioUnitario;
            td4.innerHTML = producto.valorVenta;

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tProductos.appendChild(tr);
        });
        

    }

    obtenerFactura();

    //Estamos cambiando los valores de las propiedades del objeto factura con el valor de los input.
    btnAgregar.addEventListener("click",function(){
        objFactura.fecha = inputFecha.value;
        objFactura.nombre = inputNombre.value;
        objFactura.dni = inputDni.value;
        objFactura.direccion = inputDireccion.value;

        // console.log(objFactura);

        //estamos creando elementos para agregar al tbody
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");

        //hemos obtenido los valores de los input y los hemos agregado dentro de cada columna correspondiente para nuestro listado de productos
        td1.innerHTML = inputCant.value;
        td2.innerHTML = inputProd.value;
        td3.innerHTML = inputPrecio.value;
        td4.innerHTML = parseInt(inputCant.value) * parseFloat(inputPrecio.value);
        
        //AQUI CAMBIAREMOS EL VALOR TOTAL DE LA FACTURA
        totalFactura = totalFactura + parseInt(inputCant.value)*parseFloat(inputPrecio.value);
        tdTotal.innerHTML = totalFactura;
        //Agregamos el valor a nuestra objFactura
        objFactura.total = totalFactura;

        

        //agregamos cada columna ya con su contenido como elemento hijo de la fila
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        //Ya teniendola fila con sus columnas, la agregamos al tbody de nuestra tabla de productos
        tProductos.appendChild(tr);

        //Creamos un obj temporal que represente nuestro producto
        var objProducto = {
            cantidad: inputCant.value,
            producto: inputProd.value,
            precioUnitario: inputPrecio.value,
            valorVenta: inputCant.value * inputPrecio.value
        }
        //lo agregamos al arreglo de productos que tiene nuestro
        //objFactura

        objFactura.listadoProductos.push(objProducto);
        console.log(objFactura);

        var facturaConvertida = JSON.stringify(objFactura);
        
        //Guardamos nuestro objeto en el localStorage
        localStorage.setItem("objFactura",facturaConvertida);

        //Limpiamos el input
        inputCant.value = "";
        inputProd.value = "";
        inputPrecio.value = "";

        
    })

}