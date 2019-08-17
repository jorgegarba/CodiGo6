// $("document").ready(function(){

// });
//Jquery funciona con $() ej.: $("Selector")
//selector puede ser una etiqueta clase id, 
//como si lo llamaramos de css

var titulo = $('h1');
var parrafo = $('#parrafo');
var modificarParrafo = $('#modificarParrafo');
var agregarClases = $('#agregarClases');
var agregarElementos = $('#agregarElementos');
//obtenemos el contenido de la etiqueta con html(), sin darle parámetros
console.log(titulo.html());
//brindamos contenido pasando un parámetro
titulo.html("Este título es más corto");
//cambiando los estilos, equivalente al .style.property de JS
// podemos ir juntando funciones facilitandonos el trabajo
parrafo.css("color","orange")
        .css("font-weight","bold")
        .css("background-color","yellow");

//Podemos seguis utilizando JS con Jquery pero no debemos
//mezclar las funciones entre objetos ej.:
//titulo es un obj de JQuery, no funcionaria si hago esto
//titulo.innerHTML ="SBDJBFSD";

modificarParrafo.click(function(){

    var primerParrafo = $("p:first");
    var segundoParrafo = $("p:eq(1)");

    primerParrafo.css("text-align","justify");
    segundoParrafo.css("color","blue");
});

agregarClases.dblclick(function(){
    //removeClass("clase a remover")
    $(this).removeClass("btn-info");
    
    //.attr("atributo","valor atributo")
    // $(this).attr("class","btn btn-success btn-block");
    $(this).addClass("btn")
            .addClass("btn-danger")
            .addClass("btn-block");
});

agregarElementos.click(function(){
    //prepend agregará un elemento antes de cualquier otro en el contenido html del elemento en el que este trabajando
    $('.row').prepend("<small>Esta es una descripción del título añadida con preprend</small>");
    //append seria equivalente al appendChild agregando un elemento al final
    $('.row').append("<p>Hola soy un párrafo nuevo kjxbxfshuaygdsyuagvdysa</p>");
});

$("p:eq(1)").click(function(){
    //toggleClass funcionará como un interruptor, si hay una clase implementada la quitará y si no esta agregará la clase
    $(this).toggleClass("text-danger");
});
