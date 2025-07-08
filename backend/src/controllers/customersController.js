import Customer from "../models/customers.js";

// Lista todos los clientes
export const getAllClients = async (req, res) => {
  try {
    const clients = await Customer.find();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener clientes", error });
  }
};

// Obtiene un cliente por ID
export const getClientById = async (req, res) => {
  try {
    const client = await Customer.findById(req.params.id);
    if (!client) return res.status(404).json({ message: "Cliente no encontrado" });
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el cliente", error });
  }
};

// Crea un nuevo cliente, verificando que el email no esté registrado previamente
export const createClient = async (req, res) => {
  try {
    const { name, email, password, phone, age } = req.body;

    // Verificar si ya existe un cliente con el mismo email
    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      return res.status(409).json({ message: "El email ya está registrado" });
    }

    // Crear y guardar el nuevo cliente
    const newClient = new Customer({ name, email, password, phone, age });
    await newClient.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(400).json({ message: "Error al crear cliente", error });
  }
};

// Actualiza un cliente
export const updateClient = async (req, res) => {
  try {
    const { name, email, password, phone, age } = req.body;
    const updatedClient = await Customer.findByIdAndUpdate(
      req.params.id,
      { name, email, password, phone, age },
      { new: true }
    );
    if (!updatedClient) return res.status(404).json({ message: "Cliente no encontrado" });
    res.status(200).json(updatedClient);
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar cliente", error });
  }
};

// Elimina un cliente
export const deleteClient = async (req, res) => {
  try {
    const deletedClient = await Customer.findByIdAndDelete(req.params.id);
    if (!deletedClient) return res.status(404).json({ message: "Cliente no encontrado" });
    res.status(200).json({ message: "Cliente eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar cliente", error });
  }
};