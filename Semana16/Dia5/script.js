window.onload = () => {
    var mapaGoogle;
    var miPosicion;
    var divMapa = document.getElementById("mapa");
    var btnGetPosition = document.getElementById("btnGetPosition");
    
    let configurarMapa = () => {
        //google.maps.Map(elemento donde se colocara el mapa)
        mapaGoogle = new google.maps.Map(divMapa,{
            center: { lat: -16, lng: -71},
            zoom: 8
        });
    }

    btnGetPosition.onclick = () => {
        //Esta habilitada la ubicación?
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((posicion)=>{
                console.log(posicion)
                let ubicacion = {
                    lat: posicion.coords.latitude,
                    lng: posicion.coords.longitude
                }
                miPosicion = new google.maps.Marker({
                    position: ubicacion,
                    title:"Aqui estamos",
                    map: mapaGoogle
                });
            },(error)=>{
                console.log(error);
            });
        }else{
            alert("No se permitio el acceso a la ubicación");
        }
    }

    configurarMapa();

}