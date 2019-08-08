window.onload = function() {
  var inputNombre = document.getElementById("inputNombre");
  var inputTrabajo = document.getElementById("inputTrabajo");
  var btnCrear = document.getElementById("btnCrear");
  var divAlertas = document.getElementById("alertas");

//   prevenimos el evento por defecto (en caso este dentro del form) para evitar que se actualice la página
  btnCrear.onclick = function(evt) {
    evt.preventDefault();
    // https://reqres.in/api/users ...al crear nos pide un objeto asi que creamos uno según sus parámetros
    var trabajador = {
      name: inputNombre.value.trim(),
      job: inputTrabajo.value.trim()
    };

    var xhr = new XMLHttpRequest();
    // console.log(xhr);
    // Limitamos el tiempo de respuesta de nuestra petición
    //cambiando la propiedad timeout de xhr, el tiempo es en ms
    xhr.timeout = 1200;
    // ontimeout se ejecutará en caso el tiempo de espera sea mayor al configurado
    xhr.ontimeout = function() {
      console.log("Tiempo de espera superado");
    };

    xhr.onreadystatechange = function() {
      switch (xhr.readyState) {
        case 1:
          console.log("configurando");
          break;
        case 2:
          console.log("Enviando los datos ...");
          break;
        case 3:
          console.log("ñeeee cargando");
          break;
        case 4:
          // evaluamos el estado de nuestro objeto xhr, y si obtenemos el status correcto 201  --
          //https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_de_estado_HTTP
          // -- convertimos la respuesta a un objeto
          if (xhr.status === 201) {
            var json = JSON.parse(xhr.responseText);
            console.log(json);
            console.log("Hecho!");
             // cambiamos el contenido de divAlertas por nuestra Alerta que es un componente de Bootstrap
            divAlertas.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                Tu usuario <strong>${json.name}</strong> Ha sido creado exitosamente con el cargo de <strong>${json.job}</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
          </div>`;
          } else {
            console.log("respuesta obtenida, pero status extraño");
          }

          break;
        default:
          console.log("Algo inesperado ha pasao");
      }
    };
    // .open() pedirá dos parámetros, el tipo de petición y la dirección donde se hará la petición
    xhr.open("POST", "https://reqres.in/api/users");

    //Cuando se hace una petición POST
    //tenemos que indicar que tipos de datos estan viajando y esta información se configura en las cabeceras (Headers) de nuestra petición.
    //recibirá el header y su valor
    xhr.setRequestHeader("Content-Type", "application/json");

    //Convertimos nuestro objetito a Texto para que pueda ser enviado
    xhr.send(JSON.stringify(trabajador));
  };
};
