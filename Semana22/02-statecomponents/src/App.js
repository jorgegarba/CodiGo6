import React, { Component } from 'react';
import Navbar from './components/Navbar';
class App extends Component {
  // como toda clase en JS, podemos tener un constructor para inicializar las variables
  // En una clase las props(propiedades) se reciben por medio del constructor
  constructor(props){
    // Se usa el super para hacer referencia a nuestra clase padre (Component) para pasarle nuestras propiedas, esto se usa mas que todo para usar Hooks, no podemos usar "this" hasta pasar la referencia a nuestro padre
    // ACA NO SE PUEDE USAR THIS
    super(props);
    // ACA SI SE PUEDE USAR THIS
    // Para modificar nuestro state y como estamos en una clase usamos el this
    this.state={
      productos:[
        {id:1,nombre:'Leche',precio:4.20},
        {id:2,nombre:'Arroz',precio:2.10},
        {id:3,nombre:'Manjar',precio:5.30}
      ],
      producto:{}
    }
  }
  // A diferencia de un functional component, una class component tiene que tener el metodo render () y dentro de el, el retorno de lo que se va a mostrar (codigo html)
  render() {
    return (
      <div >
        <Navbar marca={"CodiGo"} />
      </div>

    );
  }
}

export default App;
