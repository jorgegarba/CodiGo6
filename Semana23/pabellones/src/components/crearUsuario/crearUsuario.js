import React, {useState,useEffect} from 'react';

const CrearUsuario = () => {

    const [name,setName] = useState('');
    const [apell,setApell] = useState('');
    const [pass,setPass] = useState('');

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                <form>
                    <div className="form-group">
                        <label>Nombres</label>
                        <input className="form-control" type="text" value={name} onChange={(event) => setName(event.target.value)}/>
                        <label>Apellido</label>
                        <input className="form-control" type="text" value={apell} onChange={(event) => setApell(event.target.value)}/>
                        <label>Contraseña</label>
                        <input className="form-control" type="text" value={pass} onChange={(event) => setPass(event.target.value)}/>
                        
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CrearUsuario;