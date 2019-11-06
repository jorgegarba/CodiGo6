import { DataTypes, Sequelize } from 'sequelize';
export let tipoaula_model = (sequelize:Sequelize)=>{
    var tipoaula = sequelize.define('t_tipoAula',{
        taula_id:{
            type: DataTypes.INTEGER, // Que su tipo de dato sea entero
            primaryKey: true, // Que sea una llave primaria
            autoIncrement: true, // Que sea autoincrementable
            allowNull: false // Que no permita valores nulos
        },
        taula_desc:{
            type: DataTypes.STRING(45),
            allowNull: false
        }
    },{
        tableName: 't_tipoAula',
        timestamps: false
    });
    return tipoaula;
}