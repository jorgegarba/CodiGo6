var liDark = document.getElementById("liDark");
var liLight = document.getElementById("liLight");
var link = document.getElementById("estilos");
var btnCentral = document.getElementById("btnCentral");
var principal = document.getElementById("principal");

// forma 1 de asignar un evento
// [elemento].onclick = funcion anonima
liDark.onclick = function(){
    link.setAttribute("href","./01-eventos-repaso-dark.css");
}
liLight.onclick = function(){
    link.setAttribute("href","./01-eventos-repaso-light.css");
}

// forma 2 de asignar un evento
//[elemento].addEventListener(["evento_sin_prefijo_on"],function anonima)
btnCentral.addEventListener("click",function(evento){
    var alto = window.innerHeight;
    var ancho = window.innerWidth;

    var nuevoDiv = document.createElement("div");
    nuevoDiv.style.width = "15px";
    nuevoDiv.style.height = "15px";
    nuevoDiv.style.borderRadius = "50%";
    nuevoDiv.style.backgroundColor = "yellow";
    
    var randomX = Math.random() * (ancho-0) + 0;
    var randomY = Math.random() * (alto-0) + 0;

    nuevoDiv.style.position = "absolute";
    nuevoDiv.style.top = randomY + "px";
    nuevoDiv.style.left = randomX + "px";

    principal.appendChild(nuevoDiv);
});
