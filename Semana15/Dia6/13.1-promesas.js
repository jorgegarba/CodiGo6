let consulta = () => {
    //codigo que va a demorar cierto tiempo
    //setTimeout(funcion(),tiempoenms)
    return new Promise((resolve,reject)=>{
        //el código asincrono
        // setTimeout(function(){
        // })
        
        setTimeout(()=>{
            let arreglo = [];
            for(let i=0;i<30;i++){
                arreglo.push(i);
            }
            //si es que he obtenido datos
            if(arreglo.length > 0){
                resolve(arreglo);
                //return(arreglo)
            }else{
                reject("Ha ocurrido un error o no se han encontrado datos");
                //return("msjdeerror")
            }
        },3000);
    })

}

consulta().then(respuesta=>{
    console.log("mis datos",respuesta);
}).catch(err=>{
    console.log(err);
});