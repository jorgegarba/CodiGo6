window.onload = () => {
  var mapGoogle;
  let divMapa = document.getElementById("mapa");
  // configuracion de firebase
  function inicializandoFirebase() {
    //Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyD1PMgQVd6znOGdq5RnsZHRIw2oQveiP6k",
      authDomain: "parking-3c24e.firebaseapp.com",
      databaseURL: "https://parking-3c24e.firebaseio.com",
      projectId: "parking-3c24e",
      storageBucket: "",
      messagingSenderId: "348215956236",
      appId: "1:348215956236:web:945920e010f5ff0e696f29"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  inicializandoFirebase();

  function configurarMaps() {
    //.Map(div_donde_se_renderiza,{objeto_con_sus_propiedades})
    mapGoogle = new google.maps.Map(divMapa, {
      //coordenadas
      center: { lat: -16, lng: -71 },
      //zoom
      zoom: 9
    });
    listenerMaps();
  }
  let crearNuevoParqueo = (lat, lng) => {
    $("#modal").modal("show");

    let btnCrear = $("#btnCrear");

    btnCrear.click(() => {
      let inputNombre = $("#inputNombre").val();
      let inputDireccion = $("#inputDireccion").val();
      let inputDescripcion = $("#inputDescripcion").val();
      let referencia = firebase.database().ref("parking");

      const NUEVO_ID = referencia.push().key;

      referencia.child(NUEVO_ID).set(
        {
          nombre: inputNombre,
          descripcion: inputDescripcion,
          direccion: inputDireccion,
          lat: lat,
          lng: lng
        },
        error => {
          if (error) {
            console.log(error);
          }
        }
      );
    });
  };

  let listenerMaps = () => {
    mapGoogle.addListener("click", coords => {
      let lat = coords.latLng.lat();
      let lng = coords.latLng.lng();
      console.log(lat, lng);
      crearNuevoParqueo(lat, lng);
    });
  };

  function imprimirMarcadores(arregloMarcadores) {
    // arregloMarcadores.forEach((objParqueo)=>{ objParqueo.nombre})
    arregloMarcadores.forEach(
      ({ nombre, direccion, descripcion, lat, lng }) => {
        let miLatLng = {
          lat: lat, //objParqueo.lat
          lng: lng //objParqueo.lng
        };
        let marcador = new google.maps.Marker({
          position: miLatLng,
          icon: {
            url: "./parking.png",
            scaledSize: new google.maps.Size(50, 50)
          },
          title: nombre
        });

        let info = new google.maps.InfoWindow({
          content: `<h4>${nombre}</h4>
                    <br/>
                    <strong>Dirección:</strong>${direccion}
                    <br/>
                    <strong>Descripción:</strong>${descripcion}`
        });
        marcador.addListener("click", () => {
          //mapadondepongolainfo,marcador
          info.open(mapGoogle, marcador);
        });
        //setMap(el mapa donde lo quiero poner)
        marcador.setMap(mapGoogle);
      }
    );
  }

  function obtenerParking() {
    let referencia = firebase.database().ref("parking");

    referencia.on("value", data => {
      let arregloData = [];
      data.forEach(espacio => {
        let objTemporal = {
          nombre: espacio.val().nombre,
          direccion: espacio.val().direccion,
          descripcion: espacio.val().descripcion,
          lat: espacio.val().lat,
          lng: espacio.val().lng
        };
        arregloData.push(objTemporal);
        imprimirMarcadores(arregloData);
      });
    });
  }

  obtenerParking();
  configurarMaps();
};
