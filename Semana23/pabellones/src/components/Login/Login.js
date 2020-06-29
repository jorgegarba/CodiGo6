import React from 'react';
import {withRouter} from 'react-router-dom';

const Login = ({signin}) => {
    
    let usuRef = React.createRef();
    let passRef = React.createRef();

    const iniciarSesion = event => {
        event.preventDefault();
        signin(usuRef.current.value, passRef.current.value);
    }

    return(
        <main className="container" >
            <div className="row mt-5">
                <div className="col-4"></div>
                <div className="col-4 align-middle">
                    <form onSubmit={iniciarSesion}>
                        <div className="form-group">
                            <label>Usuario</label>
                            <input 
                            type="text" 
                            className="form-control"
                            placeholder="Ingrese su usuario"
                            ref={usuRef}/>
                        </div>
                        <div className="form-group">
                            <label>Contraseña:</label>
                            <input 
                            type="password" 
                            className="form-control"
                            placeholder="Ingrese su contraseña"
                            ref={passRef}/>
                        </div>
                        <input type="submit" value="Iniciar Sesión"
                        className="btn btn-primary"/>
                    </form>
                </div>
                <div className="col-4"></div>
            </div>
        </main>
    )
}

export default withRouter(Login);