import React from 'react';
import Formulario from './components/Formulario';
import Mascotas from './components/Mascotas';
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
  return (
    <div className="App">
      <Formulario
        subtitulo={'Formulario del Registro de Usuarios'}
        descripcion={'Soy una descripcion del formulario'}
      />
      <Mascotas mascotas={mascotas}/>
    </div>
  );
}

export default App;
