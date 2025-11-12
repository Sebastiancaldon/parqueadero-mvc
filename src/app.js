import express from "express";
import dotenv from "dotenv";
import sequelize from "../src/config/database.js";
import vehRoutes from "../src/routes/vehiculoRoutes.js";
import Vehiculo from "../src/models/Vehiculo.js";

dotenv.config();

const app = express();
app.use(express.json());

// Ruta raíz
app.get("/", (req, res) => {
  res.send("🚗 API del parqueadero funcionando correctamente 🚀");
});

// Rutas de vehículos
app.use("/vehiculos", vehRoutes);

// Puerto (Render usa PORT automáticamente)
const PORT = process.env.PORT || 3000;

// Conexión a BD y arranque del servidor
const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conectado a Neon PostgreSQL");
    await sequelize.sync(); // crea tablas si no existen
    app.listen(PORT, () =>
      console.log(`🚀 Servidor ejecutándose en el puerto ${PORT}`)
    );
  } catch (err) {
    console.error("❌ Error al conectar con Neon:", err);
  }
};

start();
