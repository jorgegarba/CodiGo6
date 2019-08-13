window.onload = function () {

    var divCarga = document.getElementById("divCarga");
    var inputBuscar = document.getElementById("inputBuscar");
    var frmBusqueda = document.getElementById("frmBusqueda");
    var divVacio = document.getElementById("divVacio");

    frmBusqueda.onsubmit = function (evento) {
        evento.preventDefault();
        // ocultando el div de "sin resultados"
        divVacio.setAttribute("hidden","true");

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
    
    function dibujarTabla(gata){
        if(gata.length === 0 ){
            // no hay resultados
            divVacio.removeAttribute("hidden");
        }else{
            // si hay resultados
            var tabla = document.createElement("table");
            var thead = document.createElement("thead");
            tabla.appendChild(thead);
        }
    }


}