//window.onload
//evento que se ejecuta pero cuando ya se cargue todos 
//los elementos hijos en este caso los elementos del(DOM), 
window.onload = function(){
    //va todonuestro código que queramos ejecutar
    var body = document.querySelector("body");
    var inputColor = document.getElementById("colorselector");
    var color = "#ffffff";
    var colorHex = document.getElementById("colorhex");
    inputColor.value=color;
    colorHex.innerHTML = color;
    // var lapicero = document.getElementById("lapicero");
    //onmousemove es el evento que hace referencia cuando nosotros, movamos el mouse, dentro de un elemento
    // body.style.cursor = "pointer";
    //style.cursor me permite cambiar el cursor dentro de un elemento,en este body
    //la propiedad cursor puede recibir una ruta 
    //cursor: url('ruta') p_hor por_v, auto establecerá el cursor por defecto
    body.style.cursor = "url('./pencil2.png') 0 80, auto";
    body.onmousemove = function(e){
        // console.log(`La posición en X = ${e.offsetX}`);
        // console.log(`La posición en Y = ${e.offsetY}`);

        // lapicero.style.left = `${e.offsetX-26}px`;
        // lapicero.style.top = `${e.offsetY-100}px`;

        //Agregando puntito
        //creamos elemento
        var punto = document.createElement("div");

        //damos propiedades a nuestro elemento
        punto.style.width = "2px";
        punto.style.height = "2px";
        punto.style.borderRadius = "50%";
        punto.style.backgroundColor = color;
        punto.style.position = "absolute";
        punto.style.left = `${e.offsetX+8}px`;
        punto.style.top = `${e.offsetY}px`;
        punto.style.boxShadow = "0 0 6px #fff";

        //lo agregamos
        this.appendChild(punto);
    }

    inputColor.onchange = function(){
        console.log(inputColor.value);
        color = inputColor.value;
        colorHex.innerHTML = "";
        colorHex.innerHTML = color;
    }

    

}