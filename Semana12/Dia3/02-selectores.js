//en vez de utilizar getElementById, querySelector, utilizamos $(selector) , el selector como si se tratará de css
var btnCambiarColor = $('#btnCambiarColor');
var btnModificarParrafo = $('#btnModificarParrafo');
var btnSinClase = $('#sinClase');
//.html() seria lo equivalente a innerHTML de JS
//tanto para GET (OBTENER) y SET (SETEAR)
//obteniendo contenido
console.log("Imprimiendo contenido de botón:", btnCambiarColor.html());
//CAMBIANDO contenido 
btnCambiarColor.html('Cambiar Color');

// IMPORTANTE!!!!!!
//los objetos de JQUERY no pueden mezclarse con funciones de JS, porque poseen funciones y propiedades diferentes
//por ejemplo btnCambiarColor es un obj de JQUERY y yo no puedo aplicarle un innerHTML, no funca!!!!!
// btnCambiarColor.innerHTML = "Cambiar Color :)";

//referencias y ayuda para JQUERY --->  https://htmlcheatsheet.com/jquery/

//AcÁ casual obteniendo el evento Click
btnCambiarColor.click(function(){
    //de nuevo $(selector) en este caso todos los párrafos
    let p = $("p");
    //.css("propiedad","valor");
    //esto utilizando jq ...de los snippets jqcssset
    // $("p").css("color","red").css("font-weight","bold");
    
    p.css("color","blue").css("font-weight","bold");
});

btnModificarParrafo.click(function(){
    //obteniendo Párrafos por su posición
    var primerParrafo = $('p:first');
    var tercerParrafo = $('p:eq(2)');

    primerParrafo.html("Este es el 1er párrafo, como estuvo el concierto").css("font-weight","bold");

    tercerParrafo.css("background-color","#35ff4A");
});

btnSinClase.click(function(){
    //attr("atributo HTML","valor")
    //dando el atributo clase a nuestro botón
    // btnSinClase.attr("class","btn btn-danger btn-block");

    //añadiendo clase x clase
    //.addClass("nombreClase");
    btnSinClase.addClass("btn")
                .addClass("btn-warning")
                .addClass("btn-block");
});

$("p:eq(1)").dblclick(function(){
    $(this).toggleClass("text-danger");
});