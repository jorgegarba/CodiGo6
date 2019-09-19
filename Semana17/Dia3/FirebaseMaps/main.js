window.onload = () => {
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

};
