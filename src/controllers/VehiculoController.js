import Vehiculo from "../models/Vehiculo.js";

export const listar = async (req, res) => {
  const v = await Vehiculo.findAll();
  res.json(v);
};

export const crear = async (req, res) => {
  const { placa, tipo } = req.body;
  const nuevo = await Vehiculo.create({
    placa,
    tipo,
    horaEntrada: new Date()
  });
  res.status(201).json(nuevo);
};

export const registrarSalida = async (req, res) => {
  const { id } = req.params;
  const veh = await Vehiculo.findByPk(id);
  if (!veh) return res.status(404).json({ error: "No encontrado" });

  veh.horaSalida = new Date();

  const horas = Math.max(1, Math.ceil((veh.horaSalida - veh.horaEntrada) / (1000 * 60 * 60)));
  const tarifaPorHora = 2000;
  veh.tarifa = horas * tarifaPorHora;

  await veh.save();
  res.json(veh);
};
