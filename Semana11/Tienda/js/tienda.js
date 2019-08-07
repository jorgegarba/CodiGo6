window.onload = function(){

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        switch (xhr.readyState){
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
                
                break;
            default:
                console.log("Ha ocurrido un error inesperado");
        }
    }

    xhr.open("GET","https://5d4a3aed5c331e00148eaec4.mockapi.io/productos");
    
    xhr.send(null);
}