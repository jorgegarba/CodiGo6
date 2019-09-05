

let miPromesa = () => {
    return new Promise ((resolve,reject)=>{
        //lo que queramos que haga

        setTimeout(()=>{
            reject("algo ha pasado y hemos tenido exito ejecutandolo");
        },3000)
    });
}

/**.then() se disparará cuando se ejecute la función resolve, y .catch() 
 * cuando se ejecute la funcion reject
 * 
 * then y catch pueden recibir un parametro dentro de una función anonima
    si es que se le ha pasado ese parametro a reject y resolve
 */

miPromesa().then(respuesta=>{
    console.log("exito!!!!!");
    console.log(respuesta);
        }).catch(error=>{
            console.log("error");
        });
