import React from 'react';
import Formulario from './components/Formulario';
function App() {
  let mascotas = [
    {
      nombre:'Scooby', 
      tipo:'Perro'
    },
    {
      nombre:'Garfield',
      tipo:'Gato'
    }
  ]
  return (
    <div className="App">
      <Formulario/>
    </div>
  );
}

export default App;
