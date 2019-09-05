//[arreglo].filter(()=>())
//recibe los parametros de igual manera que forEach,recorre el arreglo
//y me retorna un nuevo arreglo con el contenido ya filtrado
let alumnitos =[
    {id:1, nombre:"Juan", edad:20},
    {id:2, nombre:"Martha", edad:30},
    {id:3, nombre:"Erika", edad:25},
    {id:4, nombre:"Ronald", edad:27}
]

let mayoresA20 = alumnitos.filter(alumno=>{
    return alumno.edad > 26; //nos va a devolver un arreglo ya filtrado
});

//y aca ya utlizamos forEach para ver cada elemento
//manera tradicional
// mayoresA20.forEach(function(elemento){
//     console.log(elemento);
// });

//con función flecha 
mayoresA20.forEach(elemento => console.log(elemento));