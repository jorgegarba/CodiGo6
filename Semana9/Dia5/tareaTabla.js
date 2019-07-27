window.onload = function(){

    var tbody = document.getElementById("tbody");
    var inputBuscar = document.getElementById("buscar");

    var personas = [
        {
            id: 1,
            nombres: 'Patrick',
            apellidos: 'Rodriguez',
            edad: 27
        },
        {
            id:2,
            nombres: 'Jorge',
            apellidos: 'Garnica',
            edad:27
        },
        {
            id:3,
            nombres: 'Jorge Osmar',
            apellidos: 'Montesinos Aramayo',
            edad:28
        },
        {
            id:4,
            nombres:'Christian',
            apellidos:'Cabrera',
            edad:26
        },
        {
            id:5,
            nombres:'Azucena',
            apellidos:'Rodriguez',
            edad:42
        }
    ];


    function rellenarCeldas(arregloPersonas){
        //Var temporal
        var personasConsideradas = [];
        //evaluamos si recibimos una arreglo de personas
        if(arregloPersonas != null){
            personasConsideradas = arregloPersonas;
            //Y si no que ejecute todas las personas
        }else{
            personasConsideradas = personas;
        }
        // limpiamos la casa antes de poner cosas
        var tr = "";
        tbody.innerHTML = "";
        //Renderiza las personasConsideradas
        personasConsideradas.forEach(function(persona){
            tr = tr + `<tr>
                            <td>${persona.id}</td>
                            <td>${persona.nombres}</td>
                            <td>${persona.apellidos}</td>
                            <td>${persona.edad}</td>
                        </tr>`;
        });
        tbody.innerHTML = tr;
    }
    rellenarCeldas();

    // var numeros = [6,5,6,7,4,3,5,4,5,3];

    // var numfiltrados = numeros.filter(function(numero){
    //    return numero == 6;
    // })
    // console.log("mis numeros filtrados son: " + numfiltrados);


    inputBuscar.onkeyup = function(e){
        // console.log("THIS",this.value);
        console.log(e.target.value);

        var textoFiltrado = this.value;
        
        var filtrado = personas.filter(function(persona){
            console.log(toString(persona.edad));
            // var texto = "Hola";
            // texto.toLowerCase => hola
            return persona.nombres.toLowerCase().includes(textoFiltrado.toLowerCase()) || persona.apellidos.toLowerCase().includes(textoFiltrado.toLowerCase()) ||  persona.edad == (parseInt(textoFiltrado)); //devuelve un true o false
        }); //me va a devolver un arreglo con todo lo que haya filtrado

        //filtrado = arreglo de objetos ya filtrado con el código de arriba
        rellenarCeldas(filtrado);
    }

}