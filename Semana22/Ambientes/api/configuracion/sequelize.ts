import { aula_model } from './../modelos/Aula';
import { pabellon_model } from './../modelos/Pabellon';
const Sequelize = require("sequelize");

export const conexion = new Sequelize('aulas', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  timezone: '-05:00',
  // configuración para lectura de fechas en la base de datos
  dialectOptions: {
    useUTC: false,
    dateStrings: true,
    typeCast: true
  }
});

export const Pabellon = pabellon_model(conexion);
export const Aula = aula_model(conexion);

Pabellon.hasMany(Aula, { foreignKey: "pab_id" });
Aula.belongsTo(Pabellon, { foreignKey: "pab_id" });

