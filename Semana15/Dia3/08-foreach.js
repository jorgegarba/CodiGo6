let comida = ["Aji de Gallina","Cevichela","Chocolates","Rocoto Relleno"];

//[Arreglo].forEach((elemento,?i ()=>{}))

//forEach recorre todo el arreglo y cada elemento es entregado a un callback

comida.forEach(function(plato,i){
    console.log(`${plato} => ${i}`);
})