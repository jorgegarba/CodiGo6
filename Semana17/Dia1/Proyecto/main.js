window.onload = () => {
  let btnCrearRestaurante = $("#crearRestaurante");
  let btnObtenerRestaurantes = $("#obtenerRestaurante");

  function inicializandoFirebase() {
    let firebaseConfig = {
      apiKey: "AIzaSyBii1Gii9GYCrkxURc8r_3zCcz1ODrSuUA",
      authDomain: "restaurantes-40fa7.firebaseapp.com",
      databaseURL: "https://restaurantes-40fa7.firebaseio.com",
      projectId: "restaurantes-40fa7",
      storageBucket: "",
      messagingSenderId: "462977848476",
      appId: "1:462977848476:web:f45588497e0a6224690959"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  inicializandoFirebase();

  function getRestaurantes () {
      //nos conectaremos a la BD, y le pasaremos a que nodo queremos conectarnos
      var referencia = firebase.database().ref("restaurantes");

      referencia.on("value",data => {
        //   console.log(data);

          data.forEach(fila => {
              console.log(fila.key);
              console.log(fila.val().nombre);
              console.log(fila.val().direccion);
          });
      });
  }

  let crearRestaurante = () =>{
      let nombre = "Cevichelas 2";
      let direccion ="No se camino a las Alas Peruanas";

      let referencia = firebase.database().ref("restaurantes");

      const NUEVOKEY = referencia.push().key;

      referencia.child(NUEVOKEY).set(
          {
              nombre:nombre,
              direccion:direccion
          },
          error => {
              if(error){
                  console.log(error);
              }
          }
      )
  }

  btnCrearRestaurante.click(crearRestaurante);

  getRestaurantes();
};
