let alumnos = [
  {
    id: 1,
    nombre: "Patricio La estrella",
    edad: 27
  },
  {
    id: 2,
    nombre: "Bob",
    edad: 25
  },
  {
    id: 3,
    nombre: "Arenita",
    edad: 20
  },
  {
    id: 4,
    nombre: "Don Cangrejo",
    edad: 40
  }
];

let cursos = [
  {
    idAlumno: 1,
    cursos: ["HTML", "jsx", "Ionic"]
  },
  {
    idAlumno: 2,
    cursos: ["WebPack", "MongoDB", "Firebase"]
  }
];

//async await que convertira mi funcion a una función asincrona
//en resumen lo transforma en una promesa
// return equivaldria a resolve
// throw equivaldria a reject
let getAlumnoById = async (id) => {
    for(let i=0; i<alumnos.length;i++){
        if(alumnos[i].id === id){
            return alumnos[i]; //resolve
        }
    }
    throw "Ups no hay el alumno"; //reject
}

let getCursosByAlumnoId = async (id) =>{
    for (let i=0;i<cursos.length;i++){
        if(cursos[i].idAlumno === id){
            return cursos[i];
        }
    }
    throw "No se han encontrado cursos para el alumno";
}
//await indicará que miVariable no tome un valor hasta que la función retorne algo

let getGatos = async () =>{
    let alumno = await getAlumnoById(6);
    let curso = await getCursosByAlumnoId(6);

    // console.log(alumno);
    // console.log(curso);

    return [alumno,curso];
}

getGatos().then(([alumno,curso])=>{
    console.log(alumno);
    console.log(curso)
}).catch(error =>{
    console.log(error);
});