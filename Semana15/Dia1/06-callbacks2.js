let BDalumnos = [
    {
        id:1,
        nombre:"Roberto",
        edad:30
    },
    {
        id:2,
        nombre:"Danny",
        edad:30
    },
    {
        id:3,
        nombre:"Patrick",
        edad:27
    }
];

//id = id a buscar, callback = mi función callback
let getAlumnoById = (id,callback) =>{
    for (let i = 0;i<BDalumnos.length;i++){
        if(BDalumnos[i].id === id){
            callback(null,BDalumnos[i]);
            //cortamos la ejecución del código con return
            return;
        }
        //puedo precindir del null en la sgte linea, ya que solo
        //enviamos un parámetro util que es el primero, el msj
        // de error
    }
    callback("No se encontro el alumno",null);
}

getAlumnoById(3,(error,objAlumno)=>{
    if(error){
        console.log(error);
    }else{
        console.log(objAlumno);
    }
});