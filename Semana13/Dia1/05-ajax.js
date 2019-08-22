function obtenerServicios(){
    $.ajax({
        type:"GET",
        url:"http://mockapi.com/jfsnduifhsduifdsi",
        timeout:1000, //ms
        data:null,
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


var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if (xhr.readyState == 4){
        //COSAS
    }
}
xhr.open("GET","URL");
xhr.send();