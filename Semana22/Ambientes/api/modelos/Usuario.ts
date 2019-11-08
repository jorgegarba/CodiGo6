import { DataTypes, Sequelize } from 'sequelize';
const crypto = require('crypto');
var jwt = require('jsonwebtoken');

export let usuario_model = (sequelize: Sequelize) => {
    var usuario = sequelize.define('t_usuario', {
        usu_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        usu_nom: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        usu_ape: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        usu_email: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        usu_hash: {
            type: DataTypes.TEXT
        },
        usu_salt: {
            type: DataTypes.TEXT
        }
    }, {
        tableName: 't_usuario',
        timestamps: false
    });
    // Sirve para encriptar la contraseña ingresada por el usuario
    usuario.prototype.setSaltYHash = function (password: any) {
        this.usu_salt = crypto.randomBytes(16).toString('hex');
        this.usu_hash = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512').toString('hex');
    }
    usuario.prototype.validPass = function (password: any) {
        let usu_hash_temp = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512').toString('hex')
        return usu_hash_temp === this.usu_hash;
    }
    usuario.prototype.generarJWT = function(){
        let payload = {
            usu_id: this.usu_id,
            usu_nom: `${this.usu_nom} ${this.usu_ape}`
        }
        let token = jwt.sign(payload,'codigo6',{expiresIn:'1h'},{algorithm:'RS256'})
        return token;
    }
    return usuario;
}