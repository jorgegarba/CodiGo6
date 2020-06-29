import axios from 'axios';
import {URL_BACKEND} from './../environments/environments';

export default class AuthService {

    token;

    constructor(){
        this.cargarToken();
    }

    cargarToken(){
        if(localStorage.getItem("token")){
            this.token = localStorage.getItem("token");
        }
    }

    login = async (email, password) => {
        //encriptamos el password a base64
        let password_enc = window.btoa(password);
        let contenido = {
            usu_email: email,
            usu_pass: password
        };

        let misHeaders = {
            "Content-Type": "application/json"
        };

        let rpta = await axios.post(`${URL_BACKEND}/api/usuario/loggin`, contenido, {headers: misHeaders});

        return rpta;
    }

    isLogged() {
        if (this.token){
            try{
                let payload = this.token.split('.')[1];
                let payload_dec = JSON.parse(window.atob(payload));
                if(payload_dec.expiresIn > (new Date().getTime())/1000){
                    return true;
                }else{
                    localStorage.removeItem("token");
                    return false;
                }
            }catch{
                localStorage.removeItem("token");
                return false;
            }
        }else{
            console.log('Nel no hay token');
            return false;
        }
    }

    guardarToken(token){
        this.token = token;
        localStorage.setItem("token", token);
    }

    cerrarSesion(){
        this.token = null;
        localStorage.removeItem("token");
    }

}