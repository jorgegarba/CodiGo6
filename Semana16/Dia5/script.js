window.onload = () => {
    var mapaGoogle;
    var divMapa = document.getElementById("mapa");
    let configurarMapa = () => {
        //google.maps.Map(elemento donde se colocara el mapa)
        mapaGoogle = new google.maps.Map(divMapa,{
            center: { lat: -16, lng: -71},
            zoom: 8
        });
    }
    
    configurarMapa();
}