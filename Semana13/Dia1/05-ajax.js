function obtenerServicios(){
    $.ajax({
        type:"GET",
        url:"https://5d4b6adb00dbb10014879b12.mockapi.io/servicios",
        timeout:1000, //ms
        data:null,
        //exito!
        success:function(){
            //lo que quiera ejecutar cuando mi petición haya tenido exito
            
        },
        error:function(){
            console.log("Ha ocurrido un error, no tenemos internet");
        },
        beforeSend:function(){
            console.log("codigo que se ejecutará antes de hacer la petición");
        }
    });
}


// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if (xhr.readyState == 4){
//         //COSAS
//     }
// }
// xhr.open("GET","URL");
// xhr.send();