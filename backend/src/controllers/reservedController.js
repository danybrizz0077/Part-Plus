import Reserved from "../models/Reserved.js";

// Obtener todas las reservaciones
export const getReserveds = async (req, res) => {
  try {
    const reserveds = await Reserved.find();
    res.status(200).json(reserveds);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener reservaciones", error });
  }
};

// Obtener una reservación por ID
export const getReservedById = async (req, res) => {
  try {
    const { id } = req.params;
    const reserved = await Reserved.findById(id);
    if (!reserved) {
      return res.status(404).json({ message: "Reservación no encontrada" });
    }
    res.status(200).json(reserved);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la reservación", error });
  }
};

// Crear una nueva reservación
export const createReserved = async (req, res) => {
  try {
    const reserved = new Reserved(req.body);
    await reserved.save();
    res.status(201).json(reserved);
  } catch (error) {
    res.status(400).json({ message: "Error al crear la reservación", error });
  }
};

// Actualizar una reservación existente
export const updateReserved = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Reserved.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ message: "Reservación no encontrada" });
    }
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar la reservación", error });
  }
};

// Eliminar una reservación
export const deleteReserved = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Reserved.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Reservación no encontrada" });
    }
    res.status(200).json({ message: "Reservación eliminada" });
  } catch (error) {
    res.status(400).json({ message: "Error al eliminar la reservación", error });
  }
};

// Buscar reservaciones por vehículo
export const getReservedsByVehicle = async (req, res) => {
  try {
    const { vehicle } = req.params;
    const reserveds = await Reserved.find({ vehicle });
    if (reserveds.length === 0) {
      return res.status(404).json({ message: "No se encontraron reservaciones para ese vehículo" });
    }
    res.status(200).json(reserveds);
  } catch (error) {
    res.status(500).json({ message: "Error al buscar reservaciones", error });
  }
};

// Buscar reservaciones por cliente
export const getReservedsByClient = async (req, res) => {
  try {
    const { clientId } = req.params;
    const reserveds = await Reserved.find({ clientId });
    if (reserveds.length === 0) {
      return res.status(404).json({ message: "No se encontraron reservaciones para ese cliente" });
    }
    res.status(200).json(reserveds);
  } catch (error) {
    res.status(500).json({ message: "Error al buscar reservaciones por cliente", error });
  }
};