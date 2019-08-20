console.log($('.item-2'));

//.find("elemento a buscar") busca un elemento hijo a partir del nodo, en este caso nuestro nodo es "item-2"

//find buscará el elemento que se le pase como parámetro
$(".item-2").find("li:eq(0)").css("background-color","skyblue");

// $(".item-a").parent()
//             .parent()
//             .parent()
//             .css("list-style","none");
$(".item-a").parents()
            .css("list-style","none");
//.parents() -> aplicará para todos los padres de un elemento ej.: $(".item-a").parents()

//.parentsUntil("selector") - Hará lo mismo que parents pero se detendrá hasta encontrar el selector que sele haya pasado como parámetro

$(".nivel-1 > li").addClass("vinetas");