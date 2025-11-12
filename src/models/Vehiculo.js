import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Vehiculo = sequelize.define("Vehiculo", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  placa: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false, // "Carro" o "Moto"
  },
  horaEntrada: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  horaSalida: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  tarifa: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  totalPagar: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

export default Vehiculo;
