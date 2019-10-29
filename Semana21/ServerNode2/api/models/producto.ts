import {Sequelize} from 'sequelize';

export var producto_model = (sequelize:Sequelize, type:any) => {
    var producto_model = sequelize.define('t_producto',{
        prod_id:{
            type:type.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull:false
        },
        prod_nom:{
            type:type.STRING(45)
        },
        prod_descr:{
            type:type.STRING(100)
        },
        prod_price:{
            type:type.DECIMAL(5,2)
        },
    },
    {
        timestamps:false
    });

    return producto_model;
    
}