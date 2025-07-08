import Reserved from "../models/Reserved.js";

// Muestra todas las reservas de un cliente (por clientId en query param)
export const getAllReservations = async (req, res) => {
  try {
    const { clientId } = req.query;
    let query = {};
    if (clientId) query.clientId = clientId;
    const reservations = await Reserved.find(query);
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las reservas", error });
  }
};

// Obtiene una reserva por ID
export const getReservationById = async (req, res) => {
  try {
    const reservation = await Reserved.findById(req.params.id);
    if (!reservation) return res.status(404).json({ message: "Reserva no encontrada" });
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la reserva", error });
  }
};

// Crea una reserva para un cliente
export const createReservation = async (req, res) => {
  try {
    const { clientId, vehicle, service, status } = req.body;
    const newReservation = new Reserved({ clientId, vehicle, service, status });
    await newReservation.save();
    res.status(201).json(newReservation);
  } catch (error) {
    res.status(400).json({ message: "Error al crear la reserva", error });
  }
};

// Actualiza una reserva
export const updateReservation = async (req, res) => {
  try {
    const { clientId, vehicle, service, status } = req.body;
    const updatedReservation = await Reserved.findByIdAndUpdate(
      req.params.id,
      { clientId, vehicle, service, status },
      { new: true }
    );
    if (!updatedReservation) return res.status(404).json({ message: "Reserva no encontrada" });
    res.status(200).json(updatedReservation);
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar la reserva", error });
  }
};

// Elimina una reserva
export const deleteReservation = async (req, res) => {
  try {
    const deletedReservation = await Reserved.findByIdAndDelete(req.params.id);
    if (!deletedReservation) return res.status(404).json({ message: "Reserva no encontrada" });
    res.status(200).json({ message: "Reserva eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la reserva", error });
  }
};