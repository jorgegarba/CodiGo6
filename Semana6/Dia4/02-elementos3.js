var autos = ["mazda","audi","toyota","renault"];

var principal = document.getElementById("principal");

var ul = document.createElement("ul");


for(var i = 0; i < autos.length; i++){
    var li = document.createElement("li");
    li.innerHTML = autos[i];
    li.style.display = "inline-block";
    li.style.marginRight = "10px";
    li.style.fontSize = "20px";
    li.classList.add("item");
    ul.appendChild(li);
}

principal.appendChild(ul);

// [elemento].children => devuelve un arreglo
// con todos los elementos hijos de un elemento padre
console.log(ul.children[2]);