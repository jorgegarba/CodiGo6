import { DataTypes, Sequelize } from 'sequelize';
export let reserva_model = (sequelize: Sequelize) => {
    var reserva = sequelize.define('t_reserva', {
        res_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        res_fechin: {
            type: DataTypes.DATE
        },
        res_fechfin: {
            type: DataTypes.DATE
        },
        res_est: {
            type: DataTypes.STRING(45)
        },
        res_obs: {
            type: DataTypes.TEXT
        }
    },{
        tableName:'t_reserva',
        timestamps: false
    });
    return reserva;
}