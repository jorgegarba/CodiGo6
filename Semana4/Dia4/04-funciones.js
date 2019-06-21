//variables globales
var cafe = "pasado";

function Hola(){
    console.log("Hola chicos no pidan mucha pizza tomen mejor un café " + cafe);
}

//Invocando a una función :)
Hola();

cafe = "latte";

function Chau(){
    var hora = "10:00 pm";
    console.log("Chicos tranquilos hoy nos vamos a las " + hora);
}
Chau();

if(true){
    // let nos limitará el ambito de una variable a su entorno local
    let valor = "Galletas";
}
// esto será un error mientras
console.log(valor);