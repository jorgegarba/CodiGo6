window.onload = () => {
    let traerGatos = () => {
        return new Promise((resolve,reject)=>{
            //va nuestro código asincrono
            $.ajax({
                type:"GET",
                url:"https://5d4b6adb00dbb10014879b12.mockapi.io/gatos",
                timeout:1000,
                data:null,
                success:function(respuesta){
                    resolve(respuesta); //el resolve disparará el then
                },
                error:function(error){
                    reject(error); //disparará la función catch
                },
                beforeSend:function(){
                    console.log("Aqui buscando gatos ");
                }
            });
        });
    }

    let promesa = traerGatos();
    //esta promesa va estar pendiente,
    //pendiente a que se ejecute resolve o reject
    console.log(promesa);

    promesa.then((gatos)=>{ //resolve
        console.log("Exito!!Promesa Cumplida", gatos);
        }).catch((error)=>{ //reject
            console.log("Ups algo ha pasado",error);
    });
}

//charla acerca de event loop
//http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
