import {Sequelize, Model} from 'sequelize';

export var empleado_model = (sequelize:Sequelize, type:any) => {

    class empleado_model extends Model {};
    //.init(campos de mi tabla, opciones de mi tabla<nombredemitabla>)
    empleado_model.init({
        emp_id:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        emp_nom:{
            type:type.STRING(100)
        },
        emp_ape:{
            type:type.STRING(100)
        },
        emp_dni:{
            type:type.STRING(11)
        },
    },{
        //nombre de mi tabla
        sequelize,
        modelName:'t_empleado',
        timestamps:false
    });

    empleado_model.prototype.mostrarDatos = function(){
        console.log(`Datos`);
    }

    return empleado_model;

}