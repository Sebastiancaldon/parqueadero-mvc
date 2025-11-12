import express from "express";
import Vehiculo from "../models/Vehiculo.js";

const router = express.Router();

// 🚘 Registrar entrada
router.post("/", async (req, res) => {
  try {
    const { placa, tipo, horaEntrada } = req.body;

    const nuevoVehiculo = await Vehiculo.create({
      placa,
      tipo,
      horaEntrada: horaEntrada || new Date(),
      tarifa: tipo === "Carro" ? 2000 : 1000, // ejemplo de tarifas
    });

    res.json({
      mensaje: "Vehículo registrado correctamente",
      vehiculo: nuevoVehiculo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al registrar el vehículo" });
  }
});

// 🕓 Registrar salida y calcular total
router.put("/salida/:placa", async (req, res) => {
  try {
    const { placa } = req.params;
    const vehiculo = await Vehiculo.findOne({ where: { placa } });

    if (!vehiculo) return res.status(404).json({ error: "Vehículo no encontrado" });

    const horaSalida = new Date();
    vehiculo.horaSalida = horaSalida;

    // Calcular tiempo en horas
    const horas = Math.ceil((horaSalida - vehiculo.horaEntrada) / (1000 * 60 * 60));

    // Calcular total
    const total = vehiculo.tarifa * horas;
    vehiculo.totalPagar = total;

    await vehiculo.save();

    res.json({
      mensaje: "Salida registrada correctamente",
      placa: vehiculo.placa,
      tipo: vehiculo.tipo,
      horasEstadia: horas,
      tarifa: vehiculo.tarifa,
      totalPagar: total,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al registrar la salida" });
  }
});

// 🧾 Obtener todos los registros
router.get("/", async (req, res) => {
  const vehiculos = await Vehiculo.findAll();
  res.json(vehiculos);
});

export default router;
