import React from 'react';
import Navbar from './components/Navbar';


const Componente = (props) => {

  return (
    <div>
      <button onClick={() => {
        console.log("cambiar");
        props.cambiar90(800);
      }}>
        click
      </button>
      <p>{props.t}</p>
    </div>
  );
}

function App() {
  let x = 90;
  let cambiar90 = (valor) => {
    console.log("cambiando valor");
    x = valor;
  }
  return (
    <div >
      <Navbar marca={"CodiGo"} />
      <p>{x}</p>
      <Componente t={1} cambiar90={cambiar90} />
    </div>
  );
}

export default App;
