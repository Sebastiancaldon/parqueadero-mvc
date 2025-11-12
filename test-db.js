import sequelize from "./config/database.js";

try {
  await sequelize.authenticate();
  console.log("✅ Conexión exitosa a MySQL");
} catch (error) {
  console.error("❌ Error conectando a MySQL:", error);
}
