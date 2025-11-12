router.post("/calcular", (req, res) => {
  const { horaEntrada, horaSalida } = req.body;
  const horas = (new Date(horaSalida) - new Date(horaEntrada)) / 3600000;
  const tarifa = Math.ceil(horas) * 5000;
  res.json({ horas: Math.ceil(horas), tarifa });
});
