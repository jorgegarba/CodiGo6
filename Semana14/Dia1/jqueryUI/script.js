//draggable, me permitirá arrastrar el elemento por todo la ventana
$(".cuadrado").draggable();

//rezisable, permite cambiar el tamaño del elemento
$(".cuadrado").resizable();

//Sortable,Me permitirá reordenar mi lista
$('.bandas').sortable({
    update:function(){
        console.log("Se ha reordenado la tablita");
    }
});

//
$(".cajita").draggable();

//droppable, me va permitir detectar cuando otro elemento se suelte dentro de este
$(".cajota").droppable({
    //drop me va a detectar como si fuera un listener el momento que un elemento entre dentro de cajota
    drop:function(evento){
        console.log("ha caido alguien! o algo!");
        console.log(evento);
        $(this).css("background-color","yellow");
        $(this).css("border-radius","50%");
    }
});
//effect añadirá una animación al elemento en el que se aplique
$("#btnAnimar1").click(function(){
    //puede ser ("puff") o ("slide",tiempoenms)
    // $(".efecto1").effect("explode");
    //toggle quitara o pondrá el elemento segun seael caso pero con una animación
    $(".efecto1").toggle("shake",100);
})

//mostrará información de una imagen si esta contiene el atributo title
//mostrando el valor de title
$("#imagen").tooltip();
