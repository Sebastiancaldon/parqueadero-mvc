import express from "express";
import dotenv from "dotenv";
import sequelize from "../src/config/database.js";
import vehRoutes from "../src/routes/vehiculoRoutes.js";
import Vehiculo from "../src/models/Vehiculo.js";


dotenv.config();
const app = express();
app.use(express.json());

app.use("/vehiculos", vehRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: true }) // ⚠️ esto borra y recrea las tablas
  .then(() => console.log("Tablas sincronizadas correctamente"))
  .catch(err => console.error("Error al sincronizar tablas:", err));

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conectado a Neon PostgreSQL");
    await sequelize.sync(); // crea tabla automáticamente
    app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
  } catch (err) {
    console.error("❌ Error al conectar con Neon:", err);
  }
};

start();
