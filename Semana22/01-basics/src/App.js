import React from 'react';
import Formulario from './components/Formulario';
import Mascotas from './components/Mascotas';
import Tabla from './components/Tabla';
function App() {
  let mascotas = [
    {
      nombre: 'Scooby',
      tipo: 'Perro'
    },
    {
      nombre: 'Garfield',
      tipo: 'Gato'
    }
  ]
  let respuesta="NO HAY RESPUESTA";
  let padre = (nombre)=>{
    console.log('Imprimiendo al padre');
    console.log(nombre);
    respuesta=nombre;
    console.log(respuesta);
    
  }
  return (
    <div className="App">
      <p>{respuesta}</p>
      <Formulario
        subtitulo={'Formulario del Registro de Usuarios'}
        descripcion={'Soy una descripcion del formulario'}
      />
      <Mascotas mascotas={mascotas}/>
      <Tabla data={mascotas} funcion={padre}/>
    </div>
  );
}

export default App;
