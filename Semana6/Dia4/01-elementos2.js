var principal = document.getElementById("principal");
var footer = document.getElementById("pie");

// Crear un elemento
// createElement("[nombre de la etiqueta]")
var nuevoDiv = document.createElement("div");
// colocar contenido dentro de un elemento HTML
// [elemento].innerHTML
nuevoDiv.innerHTML = "Este es un texto de prueba";

// seteando o colocando un atributo en un elemento
// [el].setAttribute("[nombre_del_atributo]","[valor_del_atributo]")
nuevoDiv.setAttribute("id","nuevoDiv");

// tambien se puede asignar atributos no válidos por html
nuevoDiv.setAttribute("nombre","unaSeccion");
nuevoDiv.style.backgroundColor="rgba(200,200,200,0.5)";

// agregando un elemento dentro de otro
// [elemento].appendChild([elemento]);
principal.appendChild(nuevoDiv);


// forma de crear un elemento dentro de otro mediante
// la creacion de otro elemento.
var miH1 = document.createElement("h1");
miH1.innerHTML = "Titulo del pie";

var miH2 = document.createElement("h2");
miH2.innerHTML = "Titulo del pie";

var miH3 = document.createElement("h3");
miH3.innerHTML = "Titulo del pie";

footer.appendChild(miH1);
footer.appendChild(miH2);
// [elemento].prepend([elemento])
// inyecta un elemento hijo dentro de otro, como primer
// elemento hijo.
footer.prepend(miH3);

// forma de crear un elemento dentro de otro mediante
// texto con el atributo innerHTML
// footer.innerHTML = "<h1>Titulo del pie</h1>";