window.onload = function () {

    var divCarga = document.getElementById("divCarga");
    var inputBuscar = document.getElementById("inputBuscar");
    var frmBusqueda = document.getElementById("frmBusqueda");
    var divVacio = document.getElementById("divVacio");
    var cuerpo = document.getElementById("cuerpo");
    var contenedorTabla = document.getElementById("contenedorTabla");
    var map;

    frmBusqueda.onsubmit = function (evento) {
        evento.preventDefault();
        // ocultando el div de "sin resultados"
        divVacio.setAttribute("hidden", "true");
        // limpiar el cuerpo de la tabla
        cuerpo.innerHTML = "";
        // ocultar contenedor de la tabla
        contenedorTabla.setAttribute("hidden", "true");

        var busqueda = inputBuscar.value;
        buscarLugar(busqueda);
    }

    // Funcion para hacer la busqueda del lugar en la API de lugares
    function buscarLugar(busqueda) {
        // mostrando el div de carga
        divCarga.removeAttribute("hidden");

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                divCarga.setAttribute("hidden", "true");
                var gata = JSON.parse(xhr.responseText).Results;
                console.log(gata);
                dibujarTabla(gata);
            }
        }

        xhr.open("GET", `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${busqueda}`);
        xhr.setRequestHeader("x-rapidapi-host", "devru-latitude-longitude-find-v1.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "dc8d31b41amshedb873d01ae14adp10f91cjsnd24bc4353e07");
        xhr.send();

    }

    function dibujarTabla(gata) {
        if (gata.length === 0) {
            // no hay resultados
            divVacio.removeAttribute("hidden");
        } else {
            // si hay resultados

            gata.forEach(function (elemento, i) {
                var tr = document.createElement("tr");
                var tdNro = document.createElement("td");
                tdNro.innerHTML = (i + 1);
                tr.appendChild(tdNro);

                var tdNombre = document.createElement("td");
                tdNombre.innerHTML = elemento.name;
                tr.appendChild(tdNombre);

                var tdTipo = document.createElement("td");
                tdTipo.innerHTML = elemento.type;
                tr.appendChild(tdTipo);

                var tdPais = document.createElement("td");
                tdPais.innerHTML = elemento.c;
                tr.appendChild(tdPais);

                var tdLongitud = document.createElement("td");
                tdLongitud.innerHTML = elemento.lon;
                tr.appendChild(tdLongitud);

                var tdLatitud = document.createElement("td");
                tdLatitud.innerHTML = elemento.lat;
                tr.appendChild(tdLatitud);

                var botonVer = document.createElement("button");
                botonVer.innerHTML = "<i class='fas fa-eye'></i>";
                botonVer.setAttribute("class", "btn btn-primary")
                // botonVer.setAttribute("type","button");
                // botonVer.setAttribute("data-toggle","modal");
                // botonVer.setAttribute("data-target","#modalMapa");
                botonVer.onclick = function () {
                    $('#modalMapa').modal('show');
                    // centrar el mapa en una coordenada especifica
                    map.setCenter(new google.maps.LatLng(elemento.lat,elemento.lon));
                };
                tr.appendChild(botonVer);

                cuerpo.appendChild(tr);
            });

            contenedorTabla.removeAttribute("hidden");

        }
    }

    function initMap() {
        // inicializar el mapa
        // la variable map es la referencia al mapa de google
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 15
        });
    }

    initMap();




}


