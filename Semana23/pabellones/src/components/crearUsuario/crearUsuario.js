import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'
import { URL_BACKEND } from "../../environments/environments";
//pongan de nombre una Mayuscula
const CrearUsuario = () => {
    //HOOKS

  const [name, setName] = useState("");
  const [apell, setApell] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [contador, setContador] = useState(0);  

  useEffect(() => {
      console.log(contador);
  },[contador]);
//   useEffect(() => {
//     console.log(contador);
// })

  const nuevoUsuario = event => {
    event.preventDefault();

    let misHeaders = {
      "Content-Type": "application/json"
    };

    let contenido = {
      usuario: {
        usu_nom: name,
        usu_ape: apell,
        usu_email: email,
        usu_pass: pass
      }
    };

    axios
      .post(`${URL_BACKEND}/api/usuario`, contenido, {
        headers: misHeaders
      })
      .then(rpta => {
          console.log(rpta.status);
          if(rpta.status===201){
            Swal.fire(
                'Usuario Creado',
                "Operación Exitosa!",
                "success"
            )
          }else{
            console.log("error al crear");
        }
        limpiarCampos();
      });
  };

  const limpiarCampos = () => {
    setName('');
    setApell('');
    setEmail('');
    setPass('');
    toastr.option = {
        positionClass : 'toast-bottom',
        hideDuration: 300,
        preventDuplicates:true
    }
    toastr.clear();
    setTimeout(() => toastr.info(`Espacios en blanco`), 500)
  }

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-12">
            <button className="btn btn-info" 
            onClick={()=>limpiarCampos()}>
                Limpiar Todo
            </button>
          <form onSubmit={nuevoUsuario}>
            <div className="form-group">
              <label>Nombres</label>
              <input
                className="form-control"
                type="text"
                value={name}
                onChange={event => setName(event.target.value)}
              />

              <label>Apellido</label>
              <input
                className="form-control"
                type="text"
                value={apell}
                onChange={event => setApell(event.target.value)}
              />

              <label>Email</label>
              <input
                className="form-control"
                type="text"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />

              <label>Contraseña</label>
              <input
                className="form-control"
                type="text"
                value={pass}
                onChange={event => setPass(event.target.value)}
              />
            </div>

            <button className="btn btn-primary" 
            onClick={
                () => {
                let c = contador;
                c++;
                setContador(c);
            }}>
                Crear Usuario
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CrearUsuario;
