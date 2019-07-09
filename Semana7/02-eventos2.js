var inputCorreo = document.getElementById("inputCorreo");
var resultado = document.getElementById("resultado");

var personas = [
    {
    nombre: "Jorge",
    correo: "jgarnica@gmail.com"
}, {
    nombre: "Omar",
    correo: "ojimenez@gmail.com"
}];

// onfocus => evento que se desencadena cuando el cursor
// se encuentra sobre un elemento
inputCorreo.onfocus = function () {
    inputCorreo.style.backgroundColor = "#32C24F";
    inputCorreo.style.borderBottom = "4px solid white";
    inputCorreo.style.borderRadius = "8px";
}
// onblur => evento que se desencadena cuando el cursor
// deja, sale o abandona a un elemento
inputCorreo.onblur = function () {
    inputCorreo.style.backgroundColor = "transparent";
    inputCorreo.style.borderBottom = "4px solid #999999";
    inputCorreo.style.borderRadius = "0px";
    // buscar el correo ingresado en la lista de correos
    var correoIngresado = inputCorreo.value;
    correoIngresado = correoIngresado.toLowerCase();
    correoIngresado = correoIngresado.trim();

    for(var i = 0; i < personas.length; i++){
        if(correoIngresado === personas[i].correo){
            resultado.removeAttribute("hidden");
            break;
        }
    }
}


