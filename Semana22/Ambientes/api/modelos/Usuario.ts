import { DataTypes, Sequelize } from 'sequelize';
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
        usu_ape:{
            type: DataTypes.STRING(50),
            allowNull: false
        },
        usu_email:{
            type: DataTypes.STRING(30),
            allowNull: false
        },
        usu_hash:{
            type: DataTypes.TEXT
        },
        usu_salt:{
            type: DataTypes.TEXT
        }
    },{
        tableName:'t_usuario',
        timestamps: false
    });
    return usuario;
}