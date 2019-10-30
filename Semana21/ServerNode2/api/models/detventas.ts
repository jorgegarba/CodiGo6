import {Sequelize,Model} from 'sequelize';
import { Producto } from '../config/sequelize';

export var detventa_model = (sequelize:Sequelize, type:any) => {
    class detventa_model extends Model{}

    detventa_model.init({
        dv_int:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull:false
        },
        dv_cant:{
            type:type.INTEGER
        },
        dv_punit:{
            type:type.FLOAT
        },
        dv_importe:{
            type:type.FLOAT
        },
    },
    {
        sequelize,
        modelName: 't_detventa',
        timestamps:false
    })

    return detventa_model;
}